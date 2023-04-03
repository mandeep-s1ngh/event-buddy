import { useEffect, useState } from 'react';
import { Card, ListItem, Avatar } from '@rneui/themed';
import { ActivityIndicator, ScrollView } from 'react-native';
import { getMessageBoardMessages } from '../api/getMessageBoardMessages.js';
import { postToMessageBoard } from '../api/postToMessageBoard';
import styles from '../styles.js';
import MessageCard from './MessageCard.jsx';

const MessageBoard = ({ eventNameForMessages }) => {
  console.log(eventNameForMessages, 'messageboard component');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   postToMessageBoard(eventNameForMessages)
  //     .then((result) => {
  //       console.log(result, 'when does this get logged?');
  //       if (!result) return Promise.resolve(false);
  //       const eventTitle = result.Items;
  //       return Promise.all(eventTitle);
  //     })
  //     .then((nameOfEvent) => {
  //       setEvent(nameOfEvent);
  //     });
  // }, []);

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

  const messageCards = messages.map((fetchedMessage, index) => {
    const { username, timestamp, message, replyTo } = fetchedMessage;
    const usernameValue = username.S;
    const timestampValue = timestamp.S;
    const messageValue = message.S;

    return (
      <MessageCard
        key={index}
        username={usernameValue}
        timestamp={timestampValue}
        message={messageValue}
      />
    );
  });

  return (
    <ScrollView>
      {/* <Card>
        <ListItem containerStyle={{ alignItems: 'center' }}>
          <Avatar
            size="large"
            source={{ uri: 'https://source.unsplash.com/random/50x50' }}
          />
          <ListItem.Content>
            <ListItem.Title>BESTIVAL</ListItem.Title>
            <ListItem.Title>Isle Of Wight</ListItem.Title>
            <ListItem.Title>2293 going</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <Card.Divider />
        <Card>
          <Card.Title>Last train buddies</Card.Title>
          <Card.Title>Date: 12/03/23</Card.Title>
          <Card.Title>Author: Me16</Card.Title>
        </Card>
        <Card>
          <Card.Title>Two Spare Tickets</Card.Title>
          <Card.Title>Date: 10/03/23</Card.Title>
          <Card.Title>Author: Cath</Card.Title>
        </Card>
        <Card>
          <Card.Title>Dogs meeting place</Card.Title>
          <Card.Title>Date: 09/03/23</Card.Title>
          <Card.Title>Author: AntRE</Card.Title>
        </Card>
        <Card>
          <Card.Title>Anybody need a tent?</Card.Title>
          <Card.Title>Date: 08/03/23</Card.Title>
          <Card.Title>Author: festivalfan23</Card.Title>
        </Card>
      </Card> */}
      {messageCards}
    </ScrollView>
  );
};

export default MessageBoard;
