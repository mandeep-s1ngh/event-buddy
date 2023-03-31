import { Header, Icon } from '@rneui/themed';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';

function NavBar({ menuShown, setMenuShown }) {
  const navigation = useNavigation();
  function toggleMenu() {
    setMenuShown(!menuShown);
  }

  function closeMenu() {
    setMenuShown(false);
  } // To use with onBlur to auto-close the menu when it loses focus, couldn't get it working on first try though

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.NavBar_View}>
      {/* <TouchableHighlight onPress={navigateToHome}>
        <Icon name="home" color="#fff" />
      </TouchableHighlight> */}

      <TouchableHighlight onPress={navigateToHome}>
        <Text style={styles.NavBar_Text}>Event Buddy</Text>
      </TouchableHighlight>

      <View style={styles.NavBar_RightButtons}>
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
