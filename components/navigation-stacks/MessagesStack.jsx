import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageBoard from '../MessageBoard';
import getCommonScreens from './getCommonScreens';

function MessagesStack({
  eventNameForMessages,
  usernameForProfile,
  setUsernameForProfile,
  currentUser,
}) {
  const Stack = createNativeStackNavigator();
  const commonScreens = getCommonScreens(Stack, null, usernameForProfile);
  return (
    <Stack.Navigator
      initialRouteName="MessageBoard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MessageBoard">
        {(props) => (
          <MessageBoard
            {...props}
            eventNameForMessages={eventNameForMessages}
            setUsernameForProfile={setUsernameForProfile}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default MessagesStack;
