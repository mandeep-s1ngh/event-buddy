import { Avatar, Card, Button, Image, Icon } from '@rneui/themed';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';

const MessageCard = ({ username, timestamp, message }) => {
  const navigation = useNavigation();

  function goToProfile() {
    setUsernameForProfile(username);
    navigation.navigate('Profile');
  }

  return (
    <Card
      containerStyle={styles.BuddyCard}
      titleStyle={styles.BuddyCard_Username}
    >
      <Button title={'Connect'} containerStyle={styles.BuddyCard_Button} />
      <Button
        title={'View Profile'}
        onPress={goToProfile}
        containerStyle={[
          styles.BuddyCard_Button,
          styles.BuddyCard_ProfileButton,
        ]}
      />
      <Card.Title>{username}</Card.Title>
      <Text style={styles.BuddyCard_CategoryText}>
        {new Date(+timestamp).toDateString()}
      </Text>
      <Text style={styles.BuddyCard_Text}>{message}</Text>
    </Card>
  );
};

export default MessageCard;
