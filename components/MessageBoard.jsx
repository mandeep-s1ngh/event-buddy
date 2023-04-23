import { useEffect, useState, useContext } from 'react';
import { Text, Button, Icon } from '@rneui/themed';
import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { getMessageBoardMessages } from '../api/getMessageBoardMessages.js';
import { postToMessageBoard } from '../api/postToMessageBoard';
import styles from '../utils/styles.js';
import MessageCard from './MessageCard.jsx';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import { MenuShownContext } from '../context/MenuShownContext.js';
import { useNavigation } from '@react-navigation/native';

const MessageBoard = ({
  eventNameForMessages,
  setUsernameForProfile,
  setNewlyAddedBuddy,
}) => {
  const [messages, setMessages] = useState([]);
  const [newMessageInput, setNewMessageInput] = useState('');
  const [newMessage, setNewMessage] = useState({});
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);
  const [threadToView, setThreadToView] = useState(false);
  const [inputShown, setInputShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);
  const navigation = useNavigation();

  function exitThread() {
    setThreadToView(false);
    setIsInvalidSubmit(false);
    setInputShown(false);
  }

  function submitNewMessage() {
    if (!currentUser) return navigation.navigate('LogIn');
    if (!newMessageInput) {
      setIsInvalidSubmit(true);
      return;
    }
    const messageToSubmit = {
      eventName: eventNameForMessages.replaceAll(' ', '_'),
      username: currentUser.username,
      timestamp: Date.now().toString(),
      message: newMessageInput,
    };
    if (threadToView) {
      messageToSubmit.replyTo = threadToView.timestamp;
    }
    const { eventName, username, timestamp, message, replyTo } =
      messageToSubmit;
    const updatedMessages = [
      {
        message: { S: message },
        timestamp: { S: timestamp },
        username: { S: username },
      },
      ...messages,
    ];
    setMessages(updatedMessages);
    setInputShown(false);
    setNewMessageInput('');
    postToMessageBoard(eventName, username, timestamp, message, replyTo);
  }

  function toggleInput() {
    if (!currentUser) return navigation.navigate('LogIn');
    setInputShown(!inputShown);
  }

  const clearTextInput = () => {
    setNewMessageInput('');
  };

  useEffect(() => {
    setIsLoading(true);
    getMessageBoardMessages(eventNameForMessages)
      .then((result) => {
        if (result !== 'none')
          setMessages(
            result.Items.sort((a, b) => b.timestamp.S - a.timestamp.S)
          );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [eventNameForMessages]);

  if (isLoading || !messages)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  const messageCards = [];
  const fetchedReplies = [];
  let messageCardsIndex = 0;
  messages.forEach((fetchedMessage, index) => {
    const { username, timestamp, message, replyTo } = fetchedMessage;
    const usernameValue = username.S;
    const timestampValue = timestamp.S;
    const messageValue = message.S;

    if (!replyTo) {
      let replyCount = 0;
      messages.forEach((otherMessage) => {
        if (otherMessage.replyTo && otherMessage.replyTo.S === timestampValue)
          replyCount++;
      });

      messageCards.push(
        <MessageCard
          key={timestamp.S}
          index={messageCardsIndex}
          username={usernameValue}
          timestamp={timestampValue}
          message={messageValue}
          replyCount={replyCount}
          setThreadToView={setThreadToView}
          setUsernameForProfile={setUsernameForProfile}
          setIsInvalidSubmit={setIsInvalidSubmit}
          setInputShown={setInputShown}
          setNewlyAddedBuddy={setNewlyAddedBuddy}
        />
      );
      messageCardsIndex++;
    } else fetchedReplies.push(fetchedMessage);
  });

  const thread = !threadToView
    ? null
    : fetchedReplies
        .filter((reply) => reply.replyTo.S === threadToView.timestamp)
        .map((reply) => {
          return (
            <MessageCard
              style={styles.MessageCard}
              key={reply.timestamp.S}
              username={reply.username.S}
              timestamp={reply.timestamp.S}
              message={reply.message.S}
              setThreadToView={setThreadToView}
              setUsernameForProfile={setUsernameForProfile}
              setNewlyAddedBuddy={setNewlyAddedBuddy}
              isReply={true}
            />
          );
        });

  if (threadToView)
    thread.unshift(
      <Button color="#ec8e2f" key={Math.random()} onPress={exitThread}>
        Exit thread
      </Button>,
      messageCards[threadToView.index]
    );

  return (
    <View>
      {inputShown ? (
        <View>
          {isInvalidSubmit ? (
            <Text>Please enter a message before submitting</Text>
          ) : null}
          <View
            style={{ paddingTop: 10, paddingBottom: 15, alignItems: 'center' }}
          >
            <TextInput
              style={styles.MessageBoard__TextInput}
              placeholder="Write your message here ..."
              value={newMessageInput}
              onFocus={() => setMenuShown(false)}
              onChangeText={(text) => setNewMessageInput(text)}
            />
            {newMessageInput.length > 0 && (
              <TouchableOpacity
                style={styles.MessageBoard__closeInputButton}
                onPress={clearTextInput}
              >
                <Icon name="close" size={20} />
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{ marginTop: 5, marginBottom: 15, alignItems: 'center' }}
          >
            <View style={styles.MessageBoard__Button}>
              <Button onPress={submitNewMessage} color="#ec8e2f">
                Submit
              </Button>
            </View>
          </View>
        </View>
      ) : null}
      <ScrollView>
        <View
          style={{ paddingTop: 5, paddingBottom: 15, alignItems: 'center' }}
        >
          <View
            style={[
              styles.MessageBoard__Button,
              { paddingTop: 1, alignItems: 'center' },
            ]}
          >
            <Button color="#ec8e2f" onPress={toggleInput}>
              {inputShown ? 'Hide' : threadToView ? 'New reply' : 'New message'}
            </Button>
          </View>
        </View>
        {threadToView ? thread : messageCards}
      </ScrollView>
    </View>
  );
};

export default MessageBoard;
