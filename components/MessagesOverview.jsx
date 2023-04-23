import { useEffect, useState, useContext } from 'react';
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

const MessagesOverview = ({ setUsernameForProfile, navigation }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [messagesForChat, setMessagesForChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  function goToChat(buddyUsername, messages) {
    // set state necessary, or possible to just pass down vars?
    navigation.navigate('Chat', { buddyUsername, messages });
  }

  //   useEffect(() => {
  //     const forceLogIn = navigation.addListener('focus', () => {
  //       console.log(currentUser, '<<< CURR USER FROM LISTEN');
  //       if (!currentUser) {
  //         console.log('NO USER IN UE 1 NAV LISTENER');
  //         navigation.navigate('LogIn');
  //       }
  //     });
  //     console.log(currentUser, '<<< CURR USER FROM UE1');
  //     return forceLogIn;
  //   }, [navigation]);

  useEffect(() => {
    if (!currentUser) {
      return navigation.navigate('LogIn');
    }
    setIsLoading(true);
    getConversations(currentUser.username).then((result) => {
      setChatMessages(result);
      setIsLoading(false);
    });
  }, [currentUser]);

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  let conversations = [];
  const conversationIndexLookup = {};
  if (chatMessages.length) {
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
        <View style={styles.MessagesOverview__conversationCard}>
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
          {!mostRecentIsRead ? (
            <Text style={styles.MessagesOverview__unreadIndicator}>
              {unreadCount}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView style={styles.MessagesOverview}>
      <Text style={styles.MessagesOverview__header}>Your conversations:</Text>
      {conversationCards}
    </ScrollView>
  );
};

export default MessagesOverview;
