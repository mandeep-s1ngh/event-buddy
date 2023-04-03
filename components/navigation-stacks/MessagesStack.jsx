import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageBoard from "../MessageBoard";
import getCommonScreens from "./getCommonScreens";

const Stack = createNativeStackNavigator();
const commonScreens = getCommonScreens(Stack);

function MessagesStack({ eventNameForMessages }) {
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
            //exampleProp={exampleVariable}
            eventNameForMessages={eventNameForMessages}
          />
        )}
      </Stack.Screen>
      {commonScreens}
    </Stack.Navigator>
  );
}

export default MessagesStack;
