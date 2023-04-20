import { Card, Button } from '@rneui/themed';
import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

const MessageCard = ({
  index,
  username,
  timestamp,
  message,
  replyCount,
  setThreadToView,
  setUsernameForProfile,
  setIsInvalidSubmit,
  setInputShown,
  setNewlyAddedBuddy,
  isReply,
}) => {
  const [buddyAdded, setBuddyAdded] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const navigation = useNavigation();

  function goToProfile() {
    setUsernameForProfile(username);
    navigation.navigate('Profile');
  }
  function goToMessageThread() {
    setThreadToView({ timestamp, index });
    setIsInvalidSubmit(false);
    setInputShown(false);
  }
  function connectWithBuddy() {
    if (!currentUser) return navigation.navigate('LogIn');
    setBuddyAdded(true);
    const buddyToAdd = { Item: { username: { S: username } } };
    // if (name) buddyToAdd.Item.name = { S: name };
    // if (age) buddyToAdd.Item.age = { N: age };
    // if (gender) buddyToAdd.Item.gender = { S: gender };
    // if (interests) buddyToAdd.Item.interests = { S: interests };
    // if (buddies) buddyToAdd.Item.buddies = { S: buddies };
    setNewlyAddedBuddy(buddyToAdd);
    addBuddy(currentUser.username, username);
  }

  return (
    <Card
      containerStyle={
        isReply
          ? [styles.Message_Card_Reply_Box, styles.Message_Card_Reply_Box]
          : styles.MessageCard
      }
    >
      <Button
        color="#ec8e2f"
        title={buddyAdded ? 'Connected' : 'Connect'}
        onPress={connectWithBuddy}
        containerStyle={
          buddyAdded
            ? [styles.BuddyCard_Button, styles.BuddyCard_ButtonAdded]
            : styles.BuddyCard_Button
        }
      />
      <Button
        color="#ec8e2f"
        title={'View Profile'}
        onPress={goToProfile}
        containerStyle={[
          styles.BuddyCard_Button,
          styles.BuddyCard_ProfileButton,
        ]}
      />
      <Card.Title style={styles.Message_Card_Reply_From}>
        {isReply ? `Reply from ${username}` : username}
      </Card.Title>
      <Text style={styles.MessageCard_Text}>{message}</Text>
      <Text style={styles.Message_Card_Date}>
        {new Date(+timestamp).toDateString()}
      </Text>

      {replyCount ? (
        <View style={{ paddingLeft: 4 }}>
          <TouchableHighlight
            style={styles.Message_Card_Reply_Button}
            onPress={goToMessageThread}
          >
            <Text style={styles.Message_Card_Buttons_Text}>
              {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
            </Text>
          </TouchableHighlight>
        </View>
      ) : !isReply ? (
        <TouchableHighlight
          style={styles.Message_Card_Reply_Button_Zero_Replies}
          onPress={goToMessageThread}
        >
          <Text style={styles.Message_Card_Buttons_Text}>
            {replyCount === 0 ? 'Be first to reply!' : null}
          </Text>
        </TouchableHighlight>
      ) : null}
    </Card>
  );
};

export default MessageCard;
