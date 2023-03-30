import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';

function Menu({ loggedIn, setLoggedIn, user }) {
  const loggedInText = `Logged in as ${user}`;

  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  return (
    <View style={styles.Menu_View}>
      {loggedIn ? (
        <Text style={styles.Menu_Text}>{loggedInText}</Text>
      ) : (
        <TouchableHighlight onPress={toggleLoggedIn}>
          <Text style={styles.Menu_Text}>Log in</Text>
        </TouchableHighlight>
      )}
      {loggedIn ? (
        <TouchableHighlight onPress={toggleLoggedIn}>
          <Text style={styles.Menu_Text}>Log out</Text>
        </TouchableHighlight>
      ) : null}
      <Text style={styles.Menu_Text}>My events</Text>
      <Text style={styles.Menu_Text}>Events near me</Text>
      <Text style={styles.Menu_Text}>My profile</Text>
    </View>
  );
}

export default Menu;
