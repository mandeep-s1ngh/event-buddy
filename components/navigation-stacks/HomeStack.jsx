import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../LandingPage';
import getCommonScreens from './getCommonScreens';

function HomeStack({ setEventName, setUserLocation }) {
  const Stack = createNativeStackNavigator();
  const commonScreens = getCommonScreens(Stack, setUserLocation);

  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LandingPage">
        {(props) => (
          <LandingPage
            {...props}
            setEventName={setEventName}
            setUserLocation={setUserLocation}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default HomeStack;
