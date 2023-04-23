import { useContext, useState } from 'react';
import { View, Text, Alert, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { emailRegex } from '../cognito/regex';
import { cognitoPool } from '../cognito/cognito-pool';
import styles from '../utils/styles';
import { MenuShownContext } from '../context/MenuShownContext';

function Registration() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { menuShown, setMenuShown } = useContext(MenuShownContext);

  function goToLogIn() {
    navigation.navigate('LogIn');
  }

  function registerAccount() {
    if (!email || !username || !password || !confirmPassword) {
      return Alert.alert('Error', 'Please fill out all fields');
    }
    if (!emailRegex.test(email)) {
      return Alert.alert('Error', 'Invalid email address');
    }
    if (password?.length < 6) {
      return Alert.alert('Error', 'Invalid password');
    }
    if (password !== confirmPassword) {
      return Alert.alert('Error', 'Passwords do not match');
    }

    cognitoPool.signUp(
      email,
      password,
      [
        {
          Name: 'preferred_username',
          Value: username,
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
        navigation.navigate('Confirm', { newAccountEmail: email });
      }
    );
  }

  return (
    <View style={styles.Auth__View}>
      <Text style={styles.Auth__header}>{'Create account'}</Text>

      <TextInput
        style={styles.Auth__TextInput}
        value={email}
        placeholder="Enter email..."
        onFocus={() => setMenuShown(false)}
        onChangeText={(emailInput) => {
          setEmail(emailInput);
        }}
      ></TextInput>
      <TextInput
        style={styles.Auth__TextInput}
        value={username}
        placeholder="Enter username..."
        onFocus={() => setMenuShown(false)}
        onChangeText={(usernameInput) => {
          setUsername(usernameInput);
        }}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        style={styles.Auth__TextInput}
        value={password}
        placeholder="Enter password..."
        onFocus={() => setMenuShown(false)}
        onChangeText={(passwordInput) => {
          setPassword(passwordInput);
        }}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        style={styles.Auth__TextInput}
        value={confirmPassword}
        placeholder="Confirm password..."
        onFocus={() => setMenuShown(false)}
        onChangeText={(confirmPasswordInput) => {
          setConfirmPassword(confirmPasswordInput);
        }}
      ></TextInput>

      <TouchableHighlight style={styles.Auth__Button} onPress={registerAccount}>
        <Text style={styles.Auth__ButtonText}>Create Account</Text>
      </TouchableHighlight>
      <Text style={styles.Auth__Text}>Already have an account?</Text>
      <TouchableHighlight
        style={[styles.Auth__Button, styles.Auth__bottomButton]}
        onPress={goToLogIn}
      >
        <Text style={styles.Auth__ButtonText}>Log In</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Registration;
