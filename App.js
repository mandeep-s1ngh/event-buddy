import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, ThemeProvider } from '@rneui/themed';
import theme from './theme.js';
//import styles from './styles.js'
//import { makeStyles } from '@rneui/themed';

import { StatusBar } from 'react-native';
// import { View, Text, StatusBar } from "react-native";
//import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavBar from './components/NavBar';
import Menu from './components/Menu';
import LandingPage from './components/LandingPage';
import LocationRequest from './components/LocationRequest';
import BuddyList from './components/BuddyCard.jsx';
import EventsList from './components/EventsList';

import { useState } from 'react';
// import { useEffect, useState } from "react";
import Profile from './components/Profile';

export default function App() {
  const [userLocation, setUserLocation] = useState('');
  const [eventName, setEventName] = useState('');
  const [menuShown, setMenuShown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('Theo');

  const Stack = createNativeStackNavigator();
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
              headerStyle: {
                backgroundColor: '#c9c9c9',
              },
              headerTitleAlign: 'center',
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
                <LandingPage
                  {...props}
                  setEventName={setEventName}
                  setUserLocation={setUserLocation}
                />
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Location"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="location-pin" color={color} size={size} />
                ),
              }}
            >
              {(props) => (
                <LocationRequest
                  userLocation={userLocation}
                  setUserLocation={setUserLocation}
                />
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Buddy List"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="face" color={color} size={size} />
                ),
              }}
            >
              {() => <BuddyList />}
            </Tab.Screen>

            <Tab.Screen
              name="EventsList"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="festival" color={color} size={size} />
                ),
              }}
            >
              {() => <EventsList />}
            </Tab.Screen>
            <Tab.Screen
              name="Profile"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="account-circle" color={color} size={size} />
                ),
              }}
            >
              {(props) => <Profile {...props} setEventName={setEventName} />}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// N.B to set style add this attribute: style={styles.xxxx}

// Set StatusBar colour - done through a direct prop, not style: <StatusBar backgroundColor="#2403fc" />
