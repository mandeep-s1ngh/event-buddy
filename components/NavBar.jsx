import { Header, Icon } from '@rneui/themed';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TouchableHighlight, View, Image } from 'react-native';
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

    <Image
        source={require('./two_white_icons.png')}
        style={{width: 30, height: 30, marginLeft: '20%'}}
      />
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
