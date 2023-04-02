import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import BuddyCard from './BuddyCard';
import { getAttendees } from '../api/getAttendees';
import { getUserProfile } from '../api/getUserProfile';
import styles from '../styles';

const BuddyList = ({ eventNameForBuddies }) => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getAttendees(eventNameForBuddies)
      .then((result) => {
        if (!result) return Promise.resolve(false);
        const usernames = result.Items;
        return Promise.all(
          usernames.map(({ username }) => getUserProfile(username.S))
        );
      })
      .then((userProfiles) => {
        setAttendees(userProfiles);
      });
  }, [eventNameForBuddies]);

  if (!attendees) return <ActivityIndicator />;

  const buddyCards = attendees.map((attendee, index) => {
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
      />
    );
  });

  return (
    <ScrollView>
      <Text style={styles.BuddyList_Text}>
        {attendees.length} people attending {eventNameForBuddies}:
      </Text>
      {buddyCards}
    </ScrollView>
  );
};

export default BuddyList;
