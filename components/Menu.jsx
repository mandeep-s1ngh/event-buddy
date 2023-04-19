import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

function Menu() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigation = useNavigation();
  const loggedInText = !currentUser
    ? ''
    : `Logged in as ${currentUser.username}`;

  function goToLogIn() {
    navigation.navigate('LogIn');
  }

  function goToRegistration() {
    navigation.navigate('Registration');
  }

  function logOut() {
    setCurrentUser(null);
  }

  return (
    <View
      style={
        currentUser
          ? [styles.Menu_View, styles.Menu_ViewLoggedIn]
          : styles.Menu_View
      }
    >
      {currentUser ? (
        <Text style={styles.Menu_Text}>{loggedInText}</Text>
      ) : (
        <>
          <TouchableHighlight onPress={goToLogIn}>
            <Text style={styles.Menu_Text}>Log in</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={goToRegistration}>
            <Text style={styles.Menu_Text}>Create account</Text>
          </TouchableHighlight>
        </>
      )}
      {currentUser ? <Text style={styles.Menu_Text}>My events</Text> : null}
      {currentUser ? <Text style={styles.Menu_Text}>My messages</Text> : null}
      {currentUser ? <Text style={styles.Menu_Text}>My profile</Text> : null}
      <Text style={styles.Menu_Text}>Settings</Text>
      {currentUser ? (
        <TouchableHighlight onPress={logOut}>
          <Text style={styles.Menu_Text}>Log out</Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
}

export default Menu;
