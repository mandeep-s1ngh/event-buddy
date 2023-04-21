import { useEffect, useState, useContext } from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';
import { getConversations } from '../api/getConversations';
import styles from '../styles';
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
    return (
      <View
        key={index}
        style={
          mostRecentIsRead
            ? styles.MessagesOverview_ConversationCard
            : [
                styles.MessagesOverview_ConversationCard,
                styles.MessagesOverview_ConversationCardRead,
              ]
        }
      >
        <Text style={styles.MessagesOverview_ConversationCardUsername}>
          {buddyUsername}
        </Text>
        <Text style={styles.MessagesOverview_ConversationCardTime}>
          {new Date(+mostRecentTimestamp).toDateString()}
        </Text>
        <Text style={styles.MessagesOverview_ConversationCardMessage}>
          {mostRecentMessageText}
        </Text>
        <TouchableHighlight
          style={styles.MessagesOverview_ConversationCardButton}
          onPress={() => goToChat(buddyUsername, messages)}
        >
          <Text>View Chat</Text>
        </TouchableHighlight>
      </View>
    );
  });

  return (
    <ScrollView style={styles.MessagesOverview}>{conversationCards}</ScrollView>
  );
};

export default MessagesOverview;