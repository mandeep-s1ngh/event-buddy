import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import styles from '../utils/styles';
import { MenuShownContext } from '../context/MenuShownContext';
import { useContext } from 'react';

function NavBar() {
  const navigation = useNavigation();
  const { menuShown, setMenuShown } = useContext(MenuShownContext);

  function toggleMenu() {
    setMenuShown(!menuShown);
  }
  function navigateToHome() {
    navigation.navigate('Home');
  }
  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.NavBar__View}>
      <Image
        source={require('../images/two_white_icons.png')}
        style={{ width: 30, height: 30, marginLeft: '20%' }}
      />
      <TouchableHighlight onPress={navigateToHome}>
        <Text style={styles.NavBar__Text}>Event Buddy</Text>
      </TouchableHighlight>

      <View style={styles.NavBar__rightButtons}>
        <TouchableHighlight onPress={navigateToProfile}>
          <Icon name="account-circle" color="#fff" />
        </TouchableHighlight>
        <TouchableHighlight onPress={toggleMenu}>
          <Icon name="menu" color="#fff" />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default NavBar;
