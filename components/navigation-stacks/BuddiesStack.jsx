import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuddyList from '../BuddyList';
import getCommonScreens from './getCommonScreens';

function BuddiesStack({ setUsernameForProfile, usernameForProfile }) {
  const Stack = createNativeStackNavigator();
  const commonScreens = getCommonScreens(Stack, null, usernameForProfile);
  return (
    <Stack.Navigator
      initialRouteName="BuddyList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BuddyList">
        {(props) => (
          <BuddyList
            {...props}
            setUsernameForProfile={setUsernameForProfile}
            usernameForProfile={usernameForProfile}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default BuddiesStack;
