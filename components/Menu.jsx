import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../utils/styles';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext, useRef } from 'react';
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
  // function handleOutsideClick() {
  //   setMenuShown(false);
  // }

  // const wrapperRef = useRef(null);
  // useDetectOutsideTouch(wrapperRef, handleOutsideClick);

  return (
    <View
      style={
        currentUser
          ? [styles.Menu__View, styles['Menu__View--loggedIn']]
          : styles.Menu__View
      }
    >
      {currentUser ? (
        <Text style={styles.Menu__Text}>{loggedInText}</Text>
      ) : (
        <>
          <TouchableHighlight onPress={goToLogIn}>
            <Text style={styles.Menu__Text}>Log in</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={goToRegistration}>
            <Text style={styles.Menu__Text}>Create account</Text>
          </TouchableHighlight>
        </>
      )}
      {currentUser ? <Text style={styles.Menu__Text}>My events</Text> : null}
      {currentUser ? <Text style={styles.Menu__Text}>My messages</Text> : null}
      {currentUser ? <Text style={styles.Menu__Text}>My profile</Text> : null}
      <Text style={styles.Menu__Text}>Settings</Text>
      {currentUser ? (
        <TouchableHighlight onPress={logOut}>
          <Text style={styles.Menu__Text}>Log out</Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
}

export default Menu;
