import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuddyList from '../BuddyList';
import getCommonScreens from './getCommonScreens';

const Stack = createNativeStackNavigator();
const commonScreens = getCommonScreens(Stack);

function BuddiesStack() {
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
            // exampleProp={exampleVariable}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default BuddiesStack;
