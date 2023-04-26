import { useEffect, useRef, useState, useContext } from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { getConversations } from '../api/getConversations';
import styles from '../utils/styles';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { configureAbly, useChannel } from '@ably-labs/react-hooks';

const MessagesOverview = ({
  setUsernameForProfile,
  navigation,
  chatMessages,
  setChatMessages,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  configureAbly({
    key: 'kLUCaw.ca3a5Q:pBcLgZPFJBJ_7w2-IaOMmc_tBXF7GYsm3mKAzpgvyKM',
  });
  const [channel] = useChannel('liveChatMessages', ({ data }) => {
    setChatMessages((prev) => [...prev, data]);
  });

  function goToChat(buddyUsername, messages) {
    navigation.navigate('Chat', {
      buddyUsername,
      messages,
    });
  }
  function goToBuddyList() {
    navigation.navigate('Buddies');
  }
  function goToEventsList() {
    navigation.navigate('Events');
  }

  useEffect(() => {
    if (!currentUser) return navigation.navigate('LogIn');
    setIsLoading(true);
    getConversations(currentUser.username).then((result) => {
      setChatMessages(result);
      setIsLoading(false);
    });
  }, [currentUser]);

  // automatically scroll to bottom to see latest messages first
  const scrollViewRef = useRef();
  useEffect(() => {
    if (scrollViewRef.current)
      scrollViewRef.current.scrollToEnd({ animated: false });
  }, [chatMessages]);
  //////

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  let conversations = [];
  const conversationIndexLookup = {};
  if (chatMessages.length && currentUser) {
    chatMessages
      .sort((a, b) => b.timestamp - a.timestamp)
      .forEach((chatMessage) => {
        const { username, recipient, timestamp, message, isRead } = chatMessage;
        const otherUser =
          recipient === currentUser.username ? username : recipient;
        if (
          !conversations.find(
            (conversation) => conversation.buddyUsername === otherUser
          )
        ) {
          conversations.push({
            buddyUsername: otherUser,
            mostRecentTimestamp: timestamp,
            mostRecentMessageText: message,
            mostRecentIsRead: isRead,
            messages: [chatMessage],
          });
          conversationIndexLookup[otherUser] = conversations.length - 1;
        } else {
          const conversationIndex = conversationIndexLookup[otherUser];
          conversations[conversationIndex].messages.push(chatMessage);
        }
      });
  }

  if (!conversations.length)
    return (
      <View style={styles.MessagesOverview__noConversations}>
        <Text style={styles.MessagesOverview__noConversationsText}>
          You haven't messaged anyone yet.{'\n\n'}Choose one of your buddies to
          message, or view events to start connecting with new buddies.
        </Text>
        <View style={styles.MessagesOverview__noConversationsChoices}>
          <TouchableOpacity
            style={[
              styles.LandingPage__Button,
              styles.MessagesOverview__Button,
            ]}
            onPress={goToBuddyList}
          >
            <Text style={styles.LandingPage__ButtonText}>My buddies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.LandingPage__Button,
              styles.MessagesOverview__Button,
            ]}
            onPress={goToEventsList}
          >
            <Text style={styles.LandingPage__ButtonText}>Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  const conversationCards = conversations.map((conversation, index) => {
    const {
      buddyUsername,
      mostRecentTimestamp,
      mostRecentMessageText,
      mostRecentIsRead,
      messages,
    } = conversation;
    const timestampDate = new Date(+mostRecentTimestamp);
    const currentDate = new Date();
    const messageTimeDisplay =
      timestampDate.getFullYear() === currentDate.getFullYear() &&
      timestampDate.getMonth() === currentDate.getMonth() &&
      timestampDate.getDate() === currentDate.getDate()
        ? timestampDate.toTimeString().slice(0, 5)
        : `${timestampDate.toDateString().slice(8, 10)} ${timestampDate
            .toDateString()
            .slice(4, 7)}`;
    let unreadCount = 0;
    messages.forEach((message) => {
      if (!message.isRead && message.username !== currentUser.username)
        unreadCount++;
    });
    return (
      <TouchableOpacity
        key={index}
        onPress={() => goToChat(buddyUsername, messages)}
      >
        <View
          style={
            unreadCount
              ? styles.MessagesOverview__conversationCard
              : [
                  styles.MessagesOverview__conversationCard,
                  styles['MessagesOverview__conversationCard--read'],
                ]
          }
        >
          <View>
            <View style={styles.MessagesOverview__TextInfoBar}>
              <Text style={styles.MessagesOverview__conversationCardUsername}>
                {buddyUsername}
              </Text>
              <Text style={styles.MessagesOverview__conversationCardTime}>
                {messageTimeDisplay}
              </Text>
            </View>
            <Text style={styles.MessagesOverview__conversationCardMessage}>
              {mostRecentMessageText}
            </Text>
          </View>
          {unreadCount ? (
            <Text style={styles.MessagesOverview__unreadIndicator}>
              {unreadCount}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView ref={scrollViewRef} style={styles.MessagesOverview}>
      <Text style={styles.MessagesOverview__header}>Your conversations:</Text>
      <View onStartShouldSetResponder={() => true}>{conversationCards}</View>
    </ScrollView>
  );
};

export default MessagesOverview;
