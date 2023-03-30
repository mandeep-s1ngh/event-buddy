// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Amplify, API, Auth } from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';

import Ionicons from '@expo/vector-icons/Ionicons';
import theme from './theme.js';
import styles from './styles.js';

import LocationRequest from './components/LocationRequest';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function App() {
  const [userLocation, setUserLocation] = useState('');
  const [eventName, setEventName] = useState('');

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const { signOut } = useAuthenticator();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <NavBar />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#c9c9c9',
              },
              headerTitleAlign: 'center',
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
                <LandingPage {...props} setEventName={setEventName} />
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
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// N.B to set style add this attribute: style={styles.xxxx}

// Set StatusBar colour - done through a direct prop, not style: <StatusBar backgroundColor="#2403fc" />
