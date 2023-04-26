import { Avatar, Card, Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../utils/styles.js';
import { addBuddy } from '../api/addBuddy.js';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

const BuddyCard = ({
  username,
  name,
  age,
  gender,
  interests,
  setUsernameForProfile,
  isAttendeeList,
  buddies,
  setNewlyAddedBuddy,
}) => {
  const [buddyAdded, setBuddyAdded] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const navigation = useNavigation();

  function goToProfile() {
    setUsernameForProfile(username);
    navigation.navigate('Profile');
  }
  function connectWithBuddy() {
    if (!currentUser) return navigation.navigate('LogIn');
    setBuddyAdded(true);
    const buddyToAdd = { Item: { username: { S: username } } };
    if (name) buddyToAdd.Item.name = { S: name };
    if (age) buddyToAdd.Item.age = { N: age };
    if (gender) buddyToAdd.Item.gender = { S: gender };
    if (interests) buddyToAdd.Item.interests = { S: interests };
    if (buddies) buddyToAdd.Item.buddies = { S: buddies };
    setNewlyAddedBuddy(buddyToAdd);
    addBuddy(currentUser.username, username);
  }

  function goToChat(buddyUsername) {
    navigation.navigate('Messages', {
      screen: 'Chat',
      params: { buddyUsername },
    });
  }

  return (
    <Card
      containerStyle={styles.BuddyCard}
      titleStyle={styles.BuddyCard__username}
    >
      <Button
        onPress={
          !isAttendeeList ? () => goToChat(username, []) : connectWithBuddy
        }
        color="#ec8e2f"
        title={
          !isAttendeeList ? 'Message' : buddyAdded ? 'Connected' : 'Connect'
        }
        containerStyle={
          buddyAdded
            ? [
                styles.BuddyCard__Button,
                styles['BuddyCard__Button--buddyAdded'],
              ]
            : styles.BuddyCard__Button
        }
      />
      <Button
        color="#ec8e2f"
        title={'View Profile'}
        onPress={goToProfile}
        containerStyle={[
          styles.BuddyCard__Button,
          styles.BuddyCard__profileButton,
        ]}
      />
      <Avatar
        size="large"
        source={{ uri: 'https://source.unsplash.com/random  ' }}
        containerStyle={styles.BuddyCard__Image}
      />
      <Card.Title>{username}</Card.Title>
      {name ? (
        <View style={styles.BuddyCard__TextView}>
          <Text style={styles.BuddyCard__categoryText}>Name:</Text>
          <Text style={styles.BuddyCard__Text}>{name}</Text>
        </View>
      ) : null}
      {age ? (
        <View style={styles.BuddyCard__TextView}>
          <Text style={styles.BuddyCard__categoryText}>Age:</Text>
          <Text style={styles.BuddyCard__Text}>{age}</Text>
        </View>
      ) : null}
      {gender ? (
        <View style={styles.BuddyCard__TextView}>
          <Text style={styles.BuddyCard__categoryText}>Gender:</Text>
          <Text style={styles.BuddyCard__Text}>{gender}</Text>
        </View>
      ) : null}
      {interests ? (
        <View style={styles.BuddyCard__TextView}>
          <Text style={styles.BuddyCard__categoryText}>Interests:{'\n'}</Text>
          <Text style={styles.BuddyCard__interests}>{interests}</Text>
        </View>
      ) : null}
    </Card>
  );
};

export default BuddyCard;
