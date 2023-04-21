import { useContext, useState } from 'react';
import { View, Text, Alert, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { cognitoPool } from '../cognito/cognito-pool';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import styles from '../styles';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { MenuShownContext } from '../context/MenuShownContext';

function LogIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);

  function goToRegistration() {
    navigation.navigate('Registration');
  }

  function logInAsUser() {
    if (!email || !password) {
      return Alert.alert('Error', 'Please fill out all fields');
    }

    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: email,
      Pool: cognitoPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const resultUserData = result.idToken.payload;
        // console.log('Authentication successful:', result);
        setCurrentUser({
          email: resultUserData.email,
          username: resultUserData.preferred_username,
          cognitoUsername: resultUserData['cognito:username'],
        });
        navigation.goBack();
      },
      onFailure: (err) => {
        console.log('Authentication failed:', err);
        return Alert.alert('Error', 'Authentication failed:' + err);
      },
    });
  }

  return (
    <View style={styles.Auth_View}>
      <Text style={styles.Auth_Header}>{'Log in'}</Text>

      <TextInput
        style={styles.Auth_Input}
        value={email}
        placeholder="Enter email..."
        onFocus={() => setMenuShown(false)}
        onChangeText={(emailInput) => {
          setEmail(emailInput);
        }}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        style={styles.Auth_Input}
        value={password}
        placeholder="Enter password..."
        onFocus={() => setMenuShown(false)}
        onChangeText={(passwordInput) => {
          setPassword(passwordInput);
        }}
      ></TextInput>

      <TouchableHighlight style={styles.Auth_Button} onPress={logInAsUser}>
        <Text style={styles.Auth_ButtonText}>Log in</Text>
      </TouchableHighlight>
      <Text style={styles.Auth_Text}>Don't have an account?</Text>
      <TouchableHighlight
        style={[styles.Auth_Button, styles.Auth_BottomButton]}
        onPress={goToRegistration}
      >
        <Text style={styles.Auth_ButtonText}>Create Account</Text>
      </TouchableHighlight>
    </View>
  );
}

export default LogIn;
