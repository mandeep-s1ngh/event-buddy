import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsList from '../EventsList';
import getCommonScreens from './getCommonScreens';

function EventsStack({
  eventName,
  userLocation,
  setEventNameForBuddies,
  setEventNameForMessages,
  usernameForProfile,
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
      {commonScreens}
    </Stack.Navigator>
  );
}

export default EventsStack;
