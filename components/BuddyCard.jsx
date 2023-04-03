import { Avatar, Card, Button, Image, Icon } from '@rneui/themed';
import { View, ScrollView } from 'react-native';
import styles from '../styles.js';

const BuddyCard = ({ username, name, age, gender, interests }) => {
  return (
    <Card>
      <Button title={'Connect'} containerStyle={styles.Connect_Buttons} />
      <Avatar
        size="large"
        source={{ uri: 'https://source.unsplash.com/random' }}
        containerStyle={styles.Avatar_Image}
      />
      <Card.Title>{username}</Card.Title>
      {name ? <Card.Title>{name}</Card.Title> : null}
      {age ? <Card.Title>{age}</Card.Title> : null}
      {gender ? <Card.Title>{gender}</Card.Title> : null}
      {interests ? <Card.Title>{interests}</Card.Title> : null}
    </Card>
  );
};

export default BuddyCard;
