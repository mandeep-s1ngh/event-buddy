import { Icon } from '@rneui/themed';
import { useContext, useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuShownContext } from '../context/MenuShownContext.js';

import NavBar from './NavBar';
import Menu from './Menu';
import HomeStack from './navigation-stacks/HomeStack.jsx';
import BuddiesStack from './navigation-stacks/BuddiesStack.jsx';
import MessagesStack from './navigation-stacks/MessagesStack.jsx';
import EventsStack from './navigation-stacks/EventsStack.jsx';

function Main() {
  const [userLocation, setUserLocation] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventNameForBuddies, setEventNameForBuddies] = useState('');
  const [eventNameForMessages, setEventNameForMessages] = useState('');
  const [usernameForProfile, setUsernameForProfile] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [buddyAddedToggle, setBuddyAddedToggle] = useState('a');
  const [newlyAddedBuddy, setNewlyAddedBuddy] = useState(null);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);

  const Tab = createBottomTabNavigator();

  function hideMenu() {
    setMenuShown(false);
  }

  return (
    <TouchableWithoutFeedback onPress={hideMenu}>
      <View style={{ flex: 1 }}>
        <NavBar />
        {menuShown ? (
          <Menu
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setMenuShown={setMenuShown}
          />
        ) : null}

        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#ec8e2f',
          }}
          screenListeners={{
            tabPress: () => {
              hideMenu();
            },
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
                usernameForProfile={usernameForProfile}
                setUsernameForProfile={setUsernameForProfile}
                buddyAddedToggle={buddyAddedToggle}
                newlyAddedBuddy={newlyAddedBuddy}
              />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Messages"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="chat" color={color} size={size} />
              ),
            }}
          >
            {(props) => (
              <MessagesStack
                {...props}
                usernameForProfile={usernameForProfile}
                setUsernameForProfile={setUsernameForProfile}
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
                setEventName={setEventName}
                userLocation={userLocation}
                usernameForProfile={usernameForProfile}
                setUsernameForProfile={setUsernameForProfile}
                eventNameForBuddies={eventNameForBuddies}
                setEventNameForBuddies={setEventNameForBuddies}
                eventNameForMessages={eventNameForMessages}
                setEventNameForMessages={setEventNameForMessages}
                currentUser={currentUser}
                setBuddyAddedToggle={setBuddyAddedToggle}
                setNewlyAddedBuddy={setNewlyAddedBuddy}
                setMenuShown={setMenuShown}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Main;
