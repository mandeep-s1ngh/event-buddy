import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext } from 'react';

function Menu({ loggedIn, setLoggedIn }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const loggedInText = `Logged in as ${currentUser}`;

  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
    setCurrentUser(loggedIn ? '' : currentUser);
  }

  return (
    <View
      style={
        loggedIn
          ? [styles.Menu_View, styles.Menu_ViewLoggedIn]
          : styles.Menu_View
      }
    >
      {loggedIn ? (
        <Text style={styles.Menu_Text}>{loggedInText}</Text>
      ) : (
        <TouchableHighlight onPress={toggleLoggedIn}>
          <Text style={styles.Menu_Text}>Log in</Text>
        </TouchableHighlight>
      )}
      {loggedIn ? <Text style={styles.Menu_Text}>My events</Text> : null}
      {loggedIn ? <Text style={styles.Menu_Text}>My messages</Text> : null}
      {loggedIn ? <Text style={styles.Menu_Text}>My profile</Text> : null}
      <Text style={styles.Menu_Text}>Settings</Text>
      {loggedIn ? (
        <TouchableHighlight onPress={toggleLoggedIn}>
          <Text style={styles.Menu_Text}>Log out</Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
}

export default Menu;
