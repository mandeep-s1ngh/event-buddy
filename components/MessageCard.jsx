import { Avatar, Card, Button, Image, Icon } from '@rneui/themed';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';

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
  isReply,
}) => {
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

  return (
    <Card
      containerStyle={
        isReply
          ? [styles.BuddyCard, styles.MessageCard_Reply]
          : styles.BuddyCard
      }
      titleStyle={styles.BuddyCard_Username}
    >
      <Button
        color="#ec8e2f"
        title={'Connect'}
        containerStyle={styles.BuddyCard_Button}
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
      <Card.Title>{isReply ? `Reply from ${username}` : username}</Card.Title>
      <Text style={styles.BuddyCard_CategoryText}>
        {new Date(+timestamp).toDateString()}
      </Text>
      <Text style={styles.BuddyCard_Text}>{message}</Text>
      {replyCount ? (
        <TouchableHighlight onPress={goToMessageThread}>
          <Text style={styles.BuddyCard_Text}>
            {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
          </Text>
        </TouchableHighlight>
      ) : null}
    </Card>
  );
};

export default MessageCard;
