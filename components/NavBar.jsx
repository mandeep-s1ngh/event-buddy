import { Header, Icon } from '@rneui/themed';
import { Text, View } from 'react-native';
import styles from '../styles';

function NavBar() {
  return (
    <View style={styles.NavBar_View}>
      <Icon name="home" color="#fff" />
      <Text style={styles.NavBar_Text}>Event Buddy</Text>
      <View style={styles.NavBar_RightButtons}>
        <Icon name="account-circle" color="#fff" />
        <Icon name="menu" color="#fff" />
      </View>
    </View>
  );
}

export default NavBar;
