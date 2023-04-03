import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuddyList from '../BuddyList';
import getCommonScreens from './getCommonScreens';

const Stack = createNativeStackNavigator();
const commonScreens = getCommonScreens(Stack);

function BuddiesStack({ eventNameForBuddies }) {
  return (
    <Stack.Navigator
      initialRouteName="BuddyList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BuddyList">
        {(props) => (
          <BuddyList {...props} eventNameForBuddies={eventNameForBuddies} />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default BuddiesStack;
