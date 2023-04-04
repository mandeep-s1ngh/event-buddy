import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsList from '../EventsList';
import getCommonScreens from './getCommonScreens';
import MessageBoard from '../MessageBoard';

function EventsStack({
  eventName,
  userLocation,
  setEventNameForBuddies,
  eventNameForMessages,
  setEventNameForMessages,
  usernameForProfile,
  setUsernameForProfile,
  currentUser,
}) {
  const Stack = createNativeStackNavigator();
  const commonScreens = getCommonScreens(Stack, null, usernameForProfile);
  return (
    <Stack.Navigator
      initialRouteName="EventsList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EventsList">
        {(props) => (
          <EventsList
            {...props}
            eventName={eventName}
            userLocation={userLocation}
            setEventNameForBuddies={setEventNameForBuddies}
            setEventNameForMessages={setEventNameForMessages}
          />
        )}
      </Stack.Screen>
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

export default EventsStack;
