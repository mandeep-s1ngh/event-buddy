import { Button } from '@rneui/themed';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';

const LandingPage = (props) => {
  const { eventName, setEventName } = props;
  const [userInput, setUserInput] = useState('');

  const searchEventByName = () => {
    setEventName(userInput);
    navigation.navigate('EventsList');
  };

  const navigation = useNavigation();
  function navigateToEventsList() {
    navigation.navigate('EventsList');
  }

  return (
    <View style={styles.LandingPage_View}>
      <TextInput
        style={styles.LandingPage_Input}
        placeholder="Enter event name..."
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <Button
        style={styles.LandingPage_Button}
        title={'Submit'}
        onPress={searchEventByName}
      />
      <Button
        style={styles.LandingPage_Button}
        title={'See events near you'}
        buttonStyle={{ marginTop: 50 }}
        onPress={navigateToEventsList}
      />
    </View>
  );
};

export default LandingPage;
