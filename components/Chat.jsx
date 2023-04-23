import { useEffect, useState, useContext } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { postMessageToChatHistory } from '../api/postMessageToChatHistory';
import styles from '../utils/styles.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import { MenuShownContext } from '../context/MenuShownContext.js';
import { useNavigation } from '@react-navigation/native';

const Chat = ({ setUsernameForProfile, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newMessageInput, setNewMessageInput] = useState('');
  const { currentUser } = useContext(CurrentUserContext);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);
  const { buddyUsername, messages } = route.params;
  const [conversationMessages, setConversationMessages] = useState(messages);

  // useEffect(() => {
  //   if (!currentUser) return navigation.navigate('LogIn');
  //   setIsLoading(true);
  //   getChatHistory(conversation)
  //     .then((result) => {
  //       if (result !== 'none')
  //         setMessages(
  //           result.Items.sort((a, b) => b.timestamp.S - a.timestamp.S)
  //         );
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [currentUser, eventNameForMessages]);

  function sendMessage() {
    const newMessage = {
      username: currentUser.username,
      recipient: buddyUsername,
      timestamp: Date.now(),
      message: newMessageInput,
    };
    postMessageToChatHistory(
      currentUser.username,
      buddyUsername,
      Date.now(),
      newMessageInput
    );
    setNewMessageInput('');
    setConversationMessages((previous) => [...previous, newMessage]);
  }

  const chatMessageCards = conversationMessages
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(({ message, username, timestamp }, index) => {
      const timestampDate = new Date(+timestamp);
      const currentDate = new Date();
      const messageTimeDisplay =
        timestampDate.getFullYear() === currentDate.getFullYear() &&
        timestampDate.getMonth() === currentDate.getMonth() &&
        timestampDate.getDate() === currentDate.getDate()
          ? timestampDate.toTimeString().slice(0, 5)
          : timestampDate.getFullYear() === currentDate.getFullYear()
          ? `${timestampDate.toDateString().slice(8, 10)} ${timestampDate
              .toDateString()
              .slice(4, 7)}`
          : `${timestampDate.toDateString().slice(8, 10)} ${timestampDate
              .toDateString()
              .slice(4, 7)} ${timestampDate.toDateString().slice(11, 15)}`;

      return (
        <View
          key={index}
          style={
            username === currentUser.username
              ? [
                  styles.MessagesOverview__conversationCard,
                  styles.Chat__CurrentUserMessageCard,
                ]
              : styles.MessagesOverview__conversationCard
          }
        >
          <View style={styles.MessagesOverview__TextInfoBar}>
            <Text style={styles.MessagesOverview__conversationCardUsername}>
              {username}
            </Text>
            <Text style={styles.MessagesOverview__conversationCardTime}>
              {messageTimeDisplay}
            </Text>
          </View>
          <Text style={styles.MessagesOverview__conversationCardMessage}>
            {message}
          </Text>
        </View>
      );
    });

  if (isLoading || !messages)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  return (
    <>
      <ScrollView style={styles.MessagesOverview}>
        <Text style={styles.MessagesOverview__header}>
          Chatting with {buddyUsername}
        </Text>
        {chatMessageCards}
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
          <Text style={styles.Chat__ButtonText}>Send</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Chat;
