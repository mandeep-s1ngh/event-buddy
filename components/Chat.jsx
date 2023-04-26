import { useEffect, useState, useContext, useRef } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { postMessageToChatHistory } from '../api/postMessageToChatHistory';
import styles from '../utils/styles.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import { MenuShownContext } from '../context/MenuShownContext.js';
import { useNavigation } from '@react-navigation/native';
import { configureAbly, useChannel } from '@ably-labs/react-hooks';
import { getConversations } from '../api/getConversations';
import { patchChatMessagesRead } from '../api/patchChatMessagesRead';
import uuid from 'react-native-uuid';
import { Icon } from '@rneui/themed';

const Chat = ({
  setUsernameForProfile,
  chatMessages,
  setChatMessages,
  navigation,
  route,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newMessageInput, setNewMessageInput] = useState('');
  const { currentUser } = useContext(CurrentUserContext);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);
  const { buddyUsername, messages, setConversationsWerePatched } = route.params;
  const [conversationMessages, setConversationMessages] = useState(messages);

  const scrollViewRef = useRef();
  useEffect(() => {
    scrollToBottom('useEffect');
  }, [conversationMessages]);

  configureAbly({
    key: 'kLUCaw.ca3a5Q:pBcLgZPFJBJ_7w2-IaOMmc_tBXF7GYsm3mKAzpgvyKM',
  });
  const [channel] = useChannel(`liveChatMessages`, ({ data }) => {
    if (
      data.recipient === currentUser.username &&
      data.username === buddyUsername
    ) {
      data.isRead = true;
      setConversationMessages((prev) => [...prev, data]);
    }
    scrollToBottom('ably');
  });

  function scrollToBottom(source) {
    if (scrollViewRef.current) {
      if (source === 'useEffect')
        scrollViewRef.current.scrollToEnd({ animated: false });
      else
        setTimeout(
          () => scrollViewRef.current.scrollToEnd({ animated: false }),
          100
        );
    }
  }
  function goToMessagesOverview() {
    navigation.navigate('MessagesOverview');
  }
  function sendMessage() {
    const newUuid = uuid.v4();
    const newMessage = {
      uuid: newUuid,
      username: currentUser.username,
      recipient: buddyUsername,
      timestamp: Date.now(),
      message: newMessageInput,
    };
    setNewMessageInput('');
    setConversationMessages((previous) => [...previous, newMessage]);
    channel.publish('liveChatMessages', newMessage, () =>
      postMessageToChatHistory(
        newUuid,
        currentUser.username,
        buddyUsername,
        newMessage.timestamp,
        newMessageInput
      )
    );
  }
  function markAllMessagesRead() {
    if (!conversationMessages.every((message) => message.isRead)) {
      const messagesToPatch = conversationMessages.filter(
        (message) =>
          message.recipient === currentUser.username && !message.isRead
      );
      const uuids = messagesToPatch.map((message) => message.uuid);
      patchChatMessagesRead(uuids);

      const updatedConversationMessages = conversationMessages.map(
        (message) => {
          const updatedMessage = { ...message };
          updatedMessage.isRead = true;
          return updatedMessage;
        }
      );
      setConversationMessages(updatedConversationMessages);
      const updatedChatMessages = chatMessages.map((chatMessage) => {
        const updatedMessage = { ...chatMessage };
        if (
          updatedConversationMessages.find(
            (message) => message.uuid === chatMessage.uuid
          )
        )
          updatedMessage.isRead = true;
        return updatedMessage;
      });
      setChatMessages(updatedChatMessages);
    }
  }

  useEffect(() => {
    setTimeout(markAllMessagesRead, 2000);
  }, []);

  const conversationMessagesNewestFirst =
    !conversationMessages || !conversationMessages.length
      ? []
      : conversationMessages.sort((a, b) => a.timestamp - b.timestamp);

  const chatMessageCards =
    !conversationMessages || !conversationMessages.length
      ? null
      : conversationMessagesNewestFirst
          .filter(
            (message, index) =>
              index === 0 ||
              message.timestamp !==
                conversationMessagesNewestFirst[index - 1].timestamp
          )
          .map(
            (
              { message, username, recipient, timestamp, isRead, uuid },
              index
            ) => {
              const timestampDate = new Date(+timestamp);
              const currentDate = new Date();
              const messageTimeDisplay =
                timestampDate.getFullYear() === currentDate.getFullYear() &&
                timestampDate.getMonth() === currentDate.getMonth() &&
                timestampDate.getDate() === currentDate.getDate()
                  ? timestampDate.toTimeString().slice(0, 5)
                  : timestampDate.getFullYear() === currentDate.getFullYear()
                  ? `${timestampDate
                      .toDateString()
                      .slice(8, 10)} ${timestampDate
                      .toDateString()
                      .slice(4, 7)}`
                  : `${timestampDate
                      .toDateString()
                      .slice(8, 10)} ${timestampDate
                      .toDateString()
                      .slice(4, 7)} ${timestampDate
                      .toDateString()
                      .slice(11, 15)}`;
              return (
                <View
                  key={index}
                  style={
                    username === currentUser.username
                      ? [
                          styles.MessagesOverview__conversationCard,
                          styles.Chat__currentUserMessageCard,
                        ]
                      : [
                          styles.MessagesOverview__conversationCard,
                          styles.Chat__otherUserMessageCard,
                        ]
                  }
                >
                  <View>
                    <View style={styles.MessagesOverview__TextInfoBar}>
                      <Text
                        style={
                          styles.MessagesOverview__conversationCardUsername
                        }
                      >
                        {username}
                      </Text>
                      <Text
                        style={styles.MessagesOverview__conversationCardTime}
                      >
                        {messageTimeDisplay}
                      </Text>
                    </View>
                    <Text
                      style={styles.MessagesOverview__conversationCardMessage}
                    >
                      {message}
                    </Text>
                  </View>
                  {!isRead && username !== currentUser.username ? (
                    <Text style={styles.Chat__unreadIndicator}></Text>
                  ) : null}
                </View>
              );
            }
          );

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  return (
    <>
      <View style={styles.Chat__stickyHeader}>
        <TouchableOpacity onPress={goToMessagesOverview}>
          <Icon
            style={styles.Chat__backIcon}
            type="ionicon"
            name="return-up-back"
            color="black"
            size={30}
          />
        </TouchableOpacity>
        <Text style={[styles.MessagesOverview__header, styles.Chat__header]}>
          Chatting with {buddyUsername}
        </Text>
      </View>
      <ScrollView ref={scrollViewRef} style={styles.Chat}>
        <View
          style={styles.Chat__messagesView}
          onStartShouldSetResponder={() => true}
        >
          {chatMessageCards}
        </View>
      </ScrollView>
      <View style={styles.Chat__newMessageView}>
        <TextInput
          multiline
          value={newMessageInput}
          onChangeText={(text) => setNewMessageInput(text)}
          placeholder="Enter message..."
          onFocus={() => setMenuShown(false)}
          style={styles.Chat__TextInput}
        />
        <TouchableHighlight style={styles.Chat__Button} onPress={sendMessage}>
          {/* <Text style={styles.Chat__ButtonText}>Send</Text> */}
          <Icon name="send" color={'white'} size={25} />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Chat;
