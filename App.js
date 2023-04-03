import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon, ThemeProvider } from "@rneui/themed";
import { useState } from "react";
import { StatusBar } from "react-native";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "./theme.js";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import HomeStack from "./components/navigation-stacks/HomeStack.jsx";
import BuddiesStack from "./components/navigation-stacks/BuddiesStack.jsx";
import EventsStack from "./components/navigation-stacks/EventsStack.jsx";
import MessagesStack from "./components/navigation-stacks/MessagesStack.jsx";

export default function App() {
  const [userLocation, setUserLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventNameForBuddies, setEventNameForBuddies] = useState("");
  const [eventNameForMessages, setEventNameForMessages] = useState("");
  const [menuShown, setMenuShown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("Theo");

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar />
          <NavBar menuShown={menuShown} setMenuShown={setMenuShown} />

          {menuShown ? (
            <Menu loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
          ) : null}

          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Home"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            >
              {(props) => (
                <HomeStack
                  {...props}
                  setEventName={setEventName}
                  setUserLocation={setUserLocation}
                />
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Buddies"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="face" color={color} size={size} />
                ),
              }}
            >
              {(props) => (
                <BuddiesStack
                  {...props}
                  eventNameForBuddies={eventNameForBuddies}
                />
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Events"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="event" color={color} size={size} />
                ),
              }}
            >
              {(props) => (
                <EventsStack
                  {...props}
                  eventName={eventName}
                  userLocation={userLocation}
                  setEventNameForBuddies={setEventNameForBuddies}
                  setEventNameForMessages={setEventNameForMessages}
                />
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Messages"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="email" color={color} size={size} />
                ),
              }}
            >
              {(props) => (
                <MessagesStack
                  {...props}
                  //exampleProp={exampleVariable}
                  eventNameForMessages={eventNameForMessages}
                />
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// Set StatusBar colour - done through a direct prop, not style: <StatusBar backgroundColor="#2403fc" />
