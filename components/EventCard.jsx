// //import * as React from "react"; // is it in use?
// import MessageBoard from "./MessageBoard";
// import { Card, Badge, Button, Icon, View } from '@rneui/themed';
//import { Badge, View } from "react-native-elements";
//import styles from "../styles";
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
}) {
  const navigation = useNavigation();

  const goToBuddyList = () => {
    setEventNameForBuddies(event_title);
    navigation.navigate('Buddies');
  };

  const goToMessageBoard = () => {
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
    <Card>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.date}>&nbsp;{event_date}</Text>
          <Text style={styles.title}>{event_title}</Text>
          <Text style={styles.location}>{event_place}</Text>
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Card.Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: event_img_URL_preview }}
            />
          </View>

          {/* <View style={styles.detailsContainer}> */}
          {/* <View style={styles.buddiesContainer}>
          <Text style={styles.genreLabel}>Starts:&nbsp;</Text>
          <Text style={styles.genre}>{event_date}</Text> 
        </View> */}

          <View style={styles.textContainer}>
            <Text style={styles.buddiesContainer}>
              Event genre: {event_genre}
            </Text>
            {/* <Text style={styles.genre}>{event_genre}</Text>  */}

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                Buddies going: {buddiesDisplay}{' '}
              </Text>
              {/* <Text style={styles.genre}>{event_buddies}</Text>  */}
              <Button
                style={styles.button}
                onPress={updateBuddies}
                title={!joined ? 'Join the event' : 'Not in the mood'}
              ></Button>
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                Talks about event: {event_talks}
              </Text>
              {/* <Text style={styles.genre}>{event_talks}</Text> */}
              <Button
                style={styles.button}
                onPress={goToMessageBoard}
                title={'Message board'}
              ></Button>
              {/* <TouchableHighlight  style={styles.button} onPress={() => {setCurrentUserTags(`${currentUserTags} #${NewUserTag} `)}}>
                  <Text >Message board</Text>
                </TouchableHighlight> */}
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
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 80,
  },
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
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
  },
  textContainer: {
    //backgroundColor: 'red',
    flexDirection: 'column',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  genreContainer: {
    //flexDirection: 'row',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buddiesContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  genreLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  button: {
    //marginLeft: 10,
    //justifyContent: 'center',
  },
});

export default EventCard;
