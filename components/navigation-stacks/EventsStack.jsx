import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsList from '../EventsList';
import getCommonScreens from './getCommonScreens';
import MessageBoard from '../MessageBoard';
import BuddyList from '../BuddyList';

function EventsStack({
  eventName,
  userLocation,
  eventNameForBuddies,
  setEventNameForBuddies,
  eventNameForMessages,
  setEventNameForMessages,
  usernameForProfile,
  setUsernameForProfile,
  setBuddyAddedToggle,
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
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="BuddyList">
        {(props) => (
          <BuddyList
            {...props}
            eventNameForBuddies={eventNameForBuddies}
            setUsernameForProfile={setUsernameForProfile}
            usernameForProfile={usernameForProfile}
            setBuddyAddedToggle={setBuddyAddedToggle}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default EventsStack;
