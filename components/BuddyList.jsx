import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import BuddyCard from './BuddyCard';
import { getAttendees } from '../api/getAttendees';
import { getUserProfile } from '../api/getUserProfile';
import styles from '../styles';

const BuddyList = ({ eventNameForBuddies, setUsernameForProfile }) => {
  const [buddies, setBuddies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
      getUserProfile('Carces')
        .then((result) => {
          if (!result) return Promise.resolve(false);
          const usernames = result.Item.buddies
            ? result.Item.buddies.S.split(',')
            : [];
          return Promise.all(
            usernames.map((username) => getUserProfile(username))
          );
        })
        .then((userProfiles) => {
          setBuddies(userProfiles);
          setIsLoading(false);
        });
    }
  }, [eventNameForBuddies]);

  if (isLoading) return <ActivityIndicator />;

  const buddyCards = buddies.map((attendee, index) => {
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
      />
    );
  });

  return (
    <ScrollView style={styles.BuddyList}>
      <Text style={styles.BuddyList_Text}>
        {eventNameForBuddies
          ? `${buddies.length} people attending ${eventNameForBuddies}:`
          : 'Your connected buddies:'}
      </Text>
      {buddyCards}
    </ScrollView>
  );
};

export default BuddyList;
