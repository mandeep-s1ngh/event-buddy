import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../Chat';
import MessagesOverview from '../MessagesOverview';
import getCommonScreens from './getCommonScreens';
import { useState } from 'react';

function MessagesStack({ setUsernameForProfile, usernameForProfile }) {
  const Stack = createNativeStackNavigator();
  const commonScreens = getCommonScreens(Stack, null, usernameForProfile);
  const [chatMessages, setChatMessages] = useState([]);

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
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Chat">
        {(props) => (
          <Chat
            {...props}
            setUsernameForProfile={setUsernameForProfile}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default MessagesStack;
