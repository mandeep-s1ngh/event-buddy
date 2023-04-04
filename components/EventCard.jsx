// //import * as React from "react"; // is it in use?
// import MessageBoard from "./MessageBoard";
// import { Card, Badge, Button, Icon, View } from '@rneui/themed';
//import { Badge, View } from "react-native-elements";
//import styles from "../styles";
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { Card, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

function EventCard({
  //sorted by date ascending by default?
  event_title,
  event_place,
  event_genre,
  event_date,
  event_img_URL_preview,
  event_buddies, //from our 'users' DB
  event_talks, //from our 'messages' DB
  setEventNameForBuddies,
  setEventNameForMessages,
}) {
  const navigation = useNavigation();

  const goToBuddyList = () => {
    setEventNameForBuddies(event_title);
    navigation.navigate('Buddies');
  };

  const goToMessageBoard = () => {
    setEventNameForMessages(event_title);
    navigation.navigate('MessageBoard');
  };

  const [buddiesDisplay, setBuddiesDisplay] = useState(event_buddies);
  const [joined, setJoined] = useState(0);

  const updateBuddies = () => {
    setBuddiesDisplay((number) => {
      if (!joined) {
        setJoined(1);
        return number + 1;
      } else {
        setJoined(0);
        return number - 1;
      }
    });
  };

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
              {/* <Text style={styles.genre}>{event_genre}</Text>  */}
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>{event_talks} talks</Text>
              {/* <Text style={styles.genre}>{event_talks}</Text> */}

              {/* <TouchableHighlight  style={styles.button} onPress={() => {setCurrentUserTags(`${currentUserTags} #${NewUserTag} `)}}>
                  <Text >Message board</Text>
                </TouchableHighlight> */}
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                {buddiesDisplay} buddies going
              </Text>
              <View style={styles.buddiesContainer}>
                <Button
                  // style={styles.button}
                  onPress={updateBuddies}
                  color="#ec8e2f"
                  title={!joined ? 'Join the event' : 'Not in the mood'}
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
                {/* <Text style={styles.genreLabel}>
              {' '}
              </Text> */}

                <Button
                  onPress={goToBuddyList}
                  title={'See who is going'}
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
// to highlight changes: //, {{backgroundColor: 'red',}}
// position: "absolute" ?

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
    // fontWeight: 'bold',
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
  bodyContainer: {
    //flex: 1,
    //borderRadius: 80,
    //justifyContent: 'space-between',
  },
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
    //backgroundColor: 'red',
    // flexDirection: 'column',
    // marginTop: 5,
    // justifyContent: 'space-between',
  },
  genreContainer: {
    // flexDirection: 'row',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buddiesContainer: {
    // flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
    // fontWeight: 'bold',
  },
  genreLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  button: {
    //marginLeft: 10,
    //justifyContent: 'center',
  },
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
