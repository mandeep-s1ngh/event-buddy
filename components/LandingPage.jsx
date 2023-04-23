import { useContext, useState } from 'react';
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from '../utils/styles.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MenuShownContext } from '../context/MenuShownContext.js';

const LandingPage = (props) => {
  const { eventName, setEventName } = props;
  const [userInput, setUserInput] = useState('');
  const { menuShown, setMenuShown } = useContext(MenuShownContext);
  const navigation = useNavigation();

  function validateEventName() {
    const pattern = /^[a-zA-Z0-9\s]*$/;
    if (!pattern.test(userInput))
      Alert.alert(
        'Event name contains invalid characters',
        'Please enter a different event name.',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: true }
      );
  }
  function searchEventByName() {
    setEventName(userInput);
    setUserInput('');
    navigation.navigate('Events', { screen: 'EventsList' });
  }
  function clearTextInput() {
    setUserInput('');
  }
  function navigateToLocation() {
    navigation.navigate('Location');
  }

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.LandingPage__View}
      scrollEnabled={true}
    >
      <View style={{ paddingBottom: 30, marginTop: 20 }}>
        <Image
          source={require('../images/Landing_Page_Concert.jpeg')}
          style={styles.LandingPage__Image}
        />
      </View>

      <Text style={styles.LandingPage__Text}>
        Welcome to Event Buddy! For all your festival needs, concert needs and
        everything in between. Let's start with a search for events to start
        finding buddies
      </Text>

      <Text style={styles.LandingPage__Text}>Search events by name:</Text>

      <View>
        <TextInput
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
          style={styles.LandingPage__TextInput}
          placeholder="Coachella, Leeds, Evolution ..."
          onBlur={validateEventName}
          onFocus={() => setMenuShown(false)}
        />
        {userInput.length > 0 && (
          <TouchableOpacity
            style={styles.LandingPage__closeInputButton}
            onPress={clearTextInput}
          >
            <Icon name="close" size={20} />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ paddingTop: 10 }}>
        <TouchableHighlight
          style={styles.LandingPage__Button}
          onPress={searchEventByName}
        >
          <Text style={styles.LandingPage__ButtonText}>Search for events</Text>
        </TouchableHighlight>
      </View>

      <View style={{ paddingTop: 35 }}>
        <TouchableHighlight
          style={styles.LandingPage__Button}
          onPress={navigateToLocation}
        >
          <Text style={styles.LandingPage__ButtonText}>
            ...or see events near you
          </Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LandingPage;
