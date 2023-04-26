import { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { setUserAttending } from '../api/setUserAttending';

function EventCard({
  event_title,
  event_place,
  event_genre,
  event_date,
  event_img_URL_preview,
  event_buddies,
  event_talks,
  setEventNameForBuddies,
  setEventNameForMessages,
}) {
  const [buddiesDisplay, setBuddiesDisplay] = useState(event_buddies);
  const [joined, setJoined] = useState(0);
  const { currentUser } = useContext(CurrentUserContext);
  const navigation = useNavigation();

  function goToBuddyList() {
    setEventNameForBuddies(event_title);
    navigation.navigate('BuddyList');
  }
  function goToMessageBoard() {
    setEventNameForMessages(event_title);
    navigation.navigate('MessageBoard');
  }
  function updateBuddies() {
    if (!currentUser) return navigation.navigate('LogIn');
    setBuddiesDisplay((number) => {
      if (!joined) {
        setJoined(1);
        return number + 1;
      } else {
        setJoined(0);
        return number - 1;
      }
    });
    setUserAttending(currentUser.username, event_title);
  }

  return (
    <Card containerStyle={{ backgroundColor: '#f7e0c9' }}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{event_title}</Text>
          <Text style={styles.location}>{event_place}</Text>
          <Text style={styles.date}>&nbsp;{event_date}</Text>
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Card.Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: event_img_URL_preview }}
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>Genre: {event_genre}</Text>
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                {event_talks} Message board threads
              </Text>
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                {buddiesDisplay} people going
              </Text>
              <View style={styles.buddiesContainer}>
                <Button
                  onPress={updateBuddies}
                  color="#ec8e2f"
                  title={!joined ? 'Join the event' : 'Joined'}
                ></Button>
              </View>
              <View style={styles.buddiesContainer}>
                <Button
                  style={styles.button}
                  onPress={goToMessageBoard}
                  title={'Message board'}
                  color="#ec8e2f"
                ></Button>
              </View>
              <View style={styles.buddiesContainer}>
                <Button
                  onPress={goToBuddyList}
                  title={"See who's going"}
                  color="#ec8e2f"
                ></Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 80,
    fontSize: 18,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 80,
  },
  date: {
    textAlign: 'center',
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  location: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
  },
  bodyContainer: {},
  imageContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 11,
  },
  textContainer: {
    fontSize: 18,
  },
  genreContainer: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buddiesContainer: {
    margin: 5,
    justifyContent: 'space-between',
  },
  genreLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  button: {},
  Event_Card_Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 110,
  },

  Event_Card_Buttons_Text: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EventCard;
