import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageBoard from '../MessageBoard';
import getCommonScreens from './getCommonScreens';

const Stack = createNativeStackNavigator();
const commonScreens = getCommonScreens(Stack);

function MessagesStack() {
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
            //exampleProp={exampleVariable}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default MessagesStack;
