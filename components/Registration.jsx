import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Button,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { emailRegex } from '../cognito/regex';
import { cognitoPool } from '../cognito/cognito-pool';

function Registration() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function onPressLogin() {
    navigation.goBack();
  }

  const onPressRegister = () => {
    console.log(email, '<<< email before test');
    if (!email || !password || !confirmPassword) {
      return Alert.alert('Error', 'Please fill out all fields');
    }

    if (!emailRegex.test(email)) {
      console.log('test failed');
      return Alert.alert('Error', 'Invalid email address');
    }

    if (password?.length < 6) {
      return Alert.alert('Error', 'Invalid password');
    }

    cognitoPool.signUp(
      email,
      password,
      [
        {
          Name: 'preferred_username' /* required */,
          Value: 'Carces',
        },
      ],
      null,
      (err, data) => {
        if (err) {
          console.log(err, '<<< err from signup');
          switch (err.name) {
            case 'InvalidParameterException':
              return Alert.alert('Error', 'Invalid email address');
            case 'InvalidPasswordException':
              return Alert.alert('Error', 'Invalid password');
            case 'UsernameExistsException':
              return Alert.alert(
                'Error',
                'An account with this email address already exists'
              );
            default:
              return Alert.alert('Error', 'Something went wrong');
          }
        }

        // Alert.alert("Success", Auth.ConfirmEmail, [
        //   { text: 'OK', onPress: () => navigation.navigate('login') },
        // ]);
      }
    );
  };

  // -------------------- FIELDS -------------------- //
  const fields = {
    email: {
      autoCapitalize: 'none',
      onChange: (e) => setEmail(e.nativeEvent.text),
      placeholder: 'enter email...',
      placeholderTextColor: 'grey',
      value: email,
    },
    password: {
      autoCapitalize: 'none',
      onChange: (e) => setPassword(e.nativeEvent.text),
      placeholder: 'enter password...',
      secureTextEntry: true,
      placeholderTextColor: 'grey',
      value: password,
    },
    confirmPassword: {
      autoCapitalize: 'none',
      onChange: (e) => setConfirmPassword(e.nativeEvent.text),
      placeholder: 'confirm password...',
      placeholderTextColor: 'grey',
      secureTextEntry: true,
      value: confirmPassword,
    },
  };

  // // -------------------- STYLES -------------------- //
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
      backgroundColor: 'white',
    },
    logoContainer: {
      position: 'absolute',
      width: '100%',
      alignItems: 'center',
      top: 20,
    },
    logo: {
      height: 60,
      aspectRatio: 1,
    },
    loginContainer: {
      position: 'absolute',
      top: 20,
      right: 0,
    },
    title: {
      width: '100%',
    },
  });

  // -------------------- RENDER -------------------- //
  return (
    <View style={styles.container}>
      <View style={{ height: 32 }} />

      {/* Title */}
      <Text style={styles.title}>{'Create account'}</Text>
      <View style={{ height: 32 }} />

      {/* Email */}
      <TextInput style={styles.input} {...fields.email}></TextInput>
      <View style={{ height: 12 }} />

      {/* Password */}
      <TextInput style={styles.input} {...fields.password}></TextInput>
      <View style={{ height: 12 }} />

      {/* Confirm password */}
      <TextInput style={styles.input} {...fields.confirmPassword}></TextInput>
      <View style={{ height: 32 }} />

      {/* Register button */}
      <Button onPress={onPressRegister} title="Register">
        Register
      </Button>

      {/* Create account button */}
      <View style={styles.loginContainer}>
        <Button onPress={onPressLogin} title="Log in">
          Log in
        </Button>
      </View>
    </View>
  );
}

export default Registration;
