import { useEffect, useState } from 'react';
import { Card, Text, ListItem, Avatar, Button } from '@rneui/themed';
import { ActivityIndicator, ScrollView, TextInput, View } from 'react-native';
import { getMessageBoardMessages } from '../api/getMessageBoardMessages.js';
import { postToMessageBoard } from '../api/postToMessageBoard';
import styles from '../styles.js';
import MessageCard from './MessageCard.jsx';

const MessageBoard = ({
  eventNameForMessages,
  setUsernameForProfile,
  currentUser,
}) => {
  const [messages, setMessages] = useState([]);
  const [newMessageInput, setNewMessageInput] = useState('');
  const [newMessage, setNewMessage] = useState({});
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);
  const [threadToView, setThreadToView] = useState(false);
  const [inputShown, setInputShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function exitThread() {
    setThreadToView(false);
    setIsInvalidSubmit(false);
    setInputShown(false);
  }

  function submitNewMessage() {
    if (!newMessageInput) {
      setIsInvalidSubmit(true);
      return;
    }
    const messageToSubmit = {
      eventName: eventNameForMessages.replaceAll(' ', '_'),
      username: currentUser,
      timestamp: Date.now().toString(),
      message: newMessageInput,
    };
    if (threadToView) {
      messageToSubmit.replyTo = threadToView.timestamp;
    }
    const { eventName, username, timestamp, message, replyTo } =
      messageToSubmit;
    setNewMessage(newMessageInput);
    setInputShown(false);
    setNewMessageInput('');
    postToMessageBoard(eventName, username, timestamp, message, replyTo);
  }

  function toggleInput() {
    setInputShown(!inputShown);
  }

  useEffect(() => {
    setIsLoading(true);
    getMessageBoardMessages(eventNameForMessages)
      .then((result) => {
        if (result !== 'none') setMessages(result.Items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [eventNameForMessages]);

  if (isLoading || !messages) return <ActivityIndicator />;

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
              key={reply.timestamp.S}
              username={reply.username.S}
              timestamp={reply.timestamp.S}
              message={reply.message.S}
              setThreadToView={setThreadToView}
              setUsernameForProfile={setUsernameForProfile}
              isReply={true}
            />
          );
        });

  if (threadToView)
    thread.unshift(
      <Button key={Math.random()} onPress={exitThread}>
        Exit thread
      </Button>,
      messageCards[threadToView.index]
    );

  return (
    <View style={styles.fixedHeaderContainer}>
      {inputShown ? (
        <View>
          {isInvalidSubmit ? (
            <Text>Please enter a message before submitting</Text>
          ) : null}
          <TextInput
            value={newMessageInput}
            onChangeText={(text) => setNewMessageInput(text)}
          />
          <Button onPress={submitNewMessage}>Submit</Button>
        </View>
      ) : null}
      <ScrollView>
        <Button onPress={toggleInput}>
          {inputShown ? 'Hide' : threadToView ? 'New reply' : 'New message'}
        </Button>
        {threadToView ? thread : messageCards}
      </ScrollView>
    </View>
  );
};

export default MessageBoard;
