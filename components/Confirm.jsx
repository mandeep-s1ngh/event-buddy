import { useState } from 'react';
import { View, Text, Alert, TextInput, TouchableHighlight } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { cognitoPool } from '../cognito/cognito-pool';
import { CognitoUser } from 'amazon-cognito-identity-js';
import styles from '../styles';

function Confirm({ route }) {
  const navigation = useNavigation();
  const [confirmationCode, setConfirmationCode] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const { newAccountEmail } = route.params;

  function goToLogIn() {
    navigation.navigate('LogIn');
  }

  function confirmEmail() {
    if (!email || !confirmationCode) {
      return Alert.alert('Error', 'Please fill out all fields');
    }

    const confirmationParams = {
      Username: newAccountEmail,
      ConfirmationCode: confirmationCode,
    };
    const cognitoUser = new CognitoUser({
      Username: confirmationParams.Username,
      Pool: cognitoPool,
    });

    cognitoUser.confirmRegistration(
      confirmationParams.ConfirmationCode,
      true,
      function (err, result) {
        if (err) {
          console.log(err);
          return Alert.alert('Error', 'Something went wrong');
        }
        console.log(result);
        setConfirmed(true);
      }
    );
  }

  return (
    <View style={styles.Auth_View}>
      {confirmed ? (
        <>
          <Text style={styles.Auth_Header}>{'Email address confirmed'}</Text>
          <TouchableHighlight style={styles.Auth_Button} onPress={goToLogIn}>
            <Text style={styles.Auth_ButtonText}>Log in</Text>
          </TouchableHighlight>
        </>
      ) : (
        <>
          <Text style={styles.Auth_Header}>
            {'Enter the confirmation code sent to ' + newAccountEmail}
          </Text>
          <TextInput
            style={styles.Auth_Input}
            value={confirmationCode}
            placeholder="Enter confirmation code..."
            onFocus={() => setMenuShown(false)}
            onChangeText={(confirmationCodeInput) => {
              setConfirmationCode(confirmationCodeInput);
            }}
          ></TextInput>
          <TouchableHighlight style={styles.Auth_Button} onPress={confirmEmail}>
            <Text style={styles.Auth_ButtonText}>Confirm</Text>
          </TouchableHighlight>
        </>
      )}
    </View>
  );
}

export default Confirm;
