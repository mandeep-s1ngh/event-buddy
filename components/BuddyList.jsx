import { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import BuddyCard from './BuddyCard';
import { getAttendees } from '../api/getAttendees';
import { getUserProfile } from '../api/getUserProfile';
import styles from '../utils/styles';
import { CurrentUserContext } from '../context/CurrentUserContext';

const BuddyList = ({
  eventNameForBuddies,
  setUsernameForProfile,
  newlyAddedBuddy,
  setNewlyAddedBuddy,
  navigation,
}) => {
  const [buddies, setBuddies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  // useEffect(() => {
  //   const forceLogIn = navigation.addListener('focus', () => {
  //     if (!currentUser) navigation.navigate('LogIn');
  //   });
  //   return forceLogIn;
  // }, [navigation]);

  useEffect(() => {
    if (!currentUser && !eventNameForBuddies)
      return navigation.navigate('LogIn');
    if (eventNameForBuddies) {
      setIsLoading(true);
      getAttendees(eventNameForBuddies)
        .then((result) => {
          if (!result) return Promise.resolve(false);
          const usernames = result.Items;
          return Promise.all(
            usernames.map(({ username }) => getUserProfile(username.S))
          );
        })
        .then((userProfiles) => {
          setBuddies(userProfiles);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      getUserProfile(currentUser.username)
        .then((result) => {
          if (!result || !result.Item.buddies.S) return Promise.resolve(false);
          const usernames = result.Item.buddies
            ? result.Item.buddies.S.split(',')
            : [];
          return Promise.all(
            usernames.map((username) => getUserProfile(username))
          );
        })
        .then((userProfiles) => {
          if (userProfiles)
            setBuddies(
              newlyAddedBuddy
                ? [newlyAddedBuddy, ...userProfiles]
                : userProfiles
            );
          setIsLoading(false);
        });
    }
  }, [currentUser, eventNameForBuddies, newlyAddedBuddy]);

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  let buddyCards = [];
  if (buddies.length) {
    buddyCards = buddies.map((attendee, index) => {
      const {
        Item: { username, name, age, gender, interests },
      } = attendee;
      const nameValue = name ? name.S : null;
      const ageValue = age ? age.N : null;
      const genderValue = gender ? gender.S : null;
      const interestsValue = interests ? interests.S : null;
      return (
        <BuddyCard
          key={index}
          username={username.S}
          name={nameValue}
          age={ageValue}
          gender={genderValue}
          interests={interestsValue}
          setUsernameForProfile={setUsernameForProfile}
          isAttendeeList={!!eventNameForBuddies}
          buddies={attendee.buddies ? attendee.buddies.S : null}
          setNewlyAddedBuddy={setNewlyAddedBuddy}
        />
      );
    });
  }

  return (
    <ScrollView style={styles.BuddyList}>
      <Text style={styles.BuddyList__Text}>
        {eventNameForBuddies && !buddies.length
          ? `No one has joined ${eventNameForBuddies} yet.`
          : eventNameForBuddies
          ? `${buddies.length} people attending ${eventNameForBuddies}:`
          : !buddies.length
          ? 'No buddies added yet.\nBrowse events to find new buddies to connect with'
          : 'Your connected buddies:'}
      </Text>
      {buddyCards}
    </ScrollView>
  );
};

export default BuddyList;
