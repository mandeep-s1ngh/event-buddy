import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../Chat';
import MessagesOverview from '../MessagesOverview';
import getCommonScreens from './getCommonScreens';

function MessagesStack({ setUsernameForProfile, usernameForProfile }) {
  const Stack = createNativeStackNavigator();
  const commonScreens = getCommonScreens(Stack, null, usernameForProfile);
  return (
    <Stack.Navigator
      initialRouteName="MessagesOverview"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MessagesOverview">
        {(props) => (
          <MessagesOverview
            {...props}
            setUsernameForProfile={setUsernameForProfile}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Chat">
        {(props) => (
          <Chat {...props} setUsernameForProfile={setUsernameForProfile} />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default MessagesStack;
