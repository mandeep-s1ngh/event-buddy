import { Avatar, Card, Button, Image, Icon } from '@rneui/themed';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';

const BuddyCard = ({
  username,
  name,
  age,
  gender,
  interests,
  setUsernameForProfile,
}) => {
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
      <Button color="#ec8e2f" title={'Connect'} containerStyle={styles.BuddyCard_Button} />
      <Button
        color="#ec8e2f"
        title={'View Profile'}
        onPress={goToProfile}
        containerStyle={[
          styles.BuddyCard_Button,
          styles.BuddyCard_ProfileButton,
        ]}
      />
      <Avatar
        size="large"
        source={{ uri: 'https://source.unsplash.com/random  ' }}
        containerStyle={styles.BuddyCard_Image}
      />
      <Card.Title>{username}</Card.Title>
      {name ? (
        <View style={styles.BuddyCard_TextView}>
          <Text style={styles.BuddyCard_CategoryText}>Name:</Text>
          <Text style={styles.BuddyCard_Text}>{name}</Text>
        </View>
      ) : null}
      {age ? (
        <View style={styles.BuddyCard_TextView}>
          <Text style={styles.BuddyCard_CategoryText}>Age:</Text>
          <Text style={styles.BuddyCard_Text}>{age}</Text>
        </View>
      ) : null}
      {gender ? (
        <View style={styles.BuddyCard_TextView}>
          <Text style={styles.BuddyCard_CategoryText}>Gender:</Text>
          <Text style={styles.BuddyCard_Text}>{gender}</Text>
        </View>
      ) : null}
      {interests ? (
        <View style={styles.BuddyCard_TextView}>
          <Text style={styles.BuddyCard_CategoryText}>Interests:{'\n'}</Text>
          <Text style={styles.BuddyCard_Interests}>{interests}</Text>
        </View>
      ) : null}
    </Card>
  );
};

export default BuddyCard;
