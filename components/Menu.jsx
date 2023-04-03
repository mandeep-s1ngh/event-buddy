import { Text, TouchableHighlight, View } from 'react-native';
import { patchUserProfile } from '../api/patchUserProfile';
import styles from '../styles';

function Menu({ loggedIn, setLoggedIn, user }) {
  const loggedInText = `Logged in as ${user}`;

  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  function testPatchProfile() {
    patchUserProfile('Carces', null, null, null, [
      'climbing',
      'swimming',
      'hip-hop',
      '-cooking',
    ]).then((res) => console.log(res, '<< final res'));
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
      {loggedIn ? (
        <TouchableHighlight onPress={testPatchProfile}>
          <Text style={styles.Menu_Text}>My profile</Text>
        </TouchableHighlight>
      ) : null}
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
