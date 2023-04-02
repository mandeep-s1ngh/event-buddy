import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';
import { getAddressFromGeolocation } from '../api/getAddressFromGeolocation';

function Menu({ loggedIn, setLoggedIn, user }) {
  const loggedInText = `Logged in as ${user}`;

  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  function testGeocoding() {
    getAddressFromGeolocation('51.4364191', '-2.5883809').then((res) => {
      console.log(res, '<< final');
    });
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
      {loggedIn ? (
        <TouchableHighlight onPress={testGeocoding}>
          <Text style={styles.Menu_Text}>My events</Text>
        </TouchableHighlight>
      ) : null}
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
