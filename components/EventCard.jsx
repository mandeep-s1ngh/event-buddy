// //import * as React from "react"; // is it in use?
// import MessageBoard from "./MessageBoard";
// import { Card, Badge, Button, Icon, View } from '@rneui/themed';
// //import { Badge, View } from "react-native-elements";
// //import styles from "../styles";
import { useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";


function EventCard({
  //sorted by date ascending by default?
  event_title,
  event_place,
  event_genre,
  event_date,
  event_img_URL_preview,
  event_buddies, //from our 'users' DB
  event_talks, //from our 'messages' DB
}) {
  const navigation = useNavigation();

  const goToMessageBoard = () => {
    navigation.navigate("MessageBoard");
  };

  const [buddiesDisplay, setBuddiesDisplay] = useState(event_buddies);
  const [joined, setJoined] = useState(0);
  
  const updateBuddies = () =>{
    setBuddiesDisplay((number) => {
    if (!joined) {setJoined(1); return number + 1;}
      else {setJoined(0); return number - 1;}})
  }     

  return (
    <Card>
    <View style={styles.mainContainer}>

     <View style={styles.titleContainer}>
      <Text style={styles.title}>&nbsp;{event_date}  |  {event_place}</Text>
      <Text style={styles.location}>{event_title}</Text>
     </View>

    <View style={styles.bodyContainer}>
      <View style={styles.imageContainer}>
        <Card.Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: event_img_URL_preview }}
        />
      </View>

      <View style={styles.detailsContainer}>
        {/* <View style={styles.buddiesContainer}>
          <Text style={styles.genreLabel}>Starts:&nbsp;</Text>
          <Text style={styles.genre}>{event_date}</Text> 
        </View> */}

        <View style={styles.textContainer}>
          <Text style={styles.genreLabel}>Event genre: {event_genre}</Text>
          {/* <Text style={styles.genre}>{event_genre}</Text>  */}
        </View>
    
        <View style={styles.buddiesContainer}>
          <Text style={styles.genreLabel}>Buddies going: {buddiesDisplay}</Text>
          {/* <Text style={styles.genre}>{event_buddies}</Text>  */}
          <Button style={styles.button} onPress={updateBuddies} title={(!joined) ? 'Join the event' : 'Not in the mood'}></Button>
        </View>      

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                Talks about event: {event_talks}
              </Text>
              {/* <Text style={styles.genre}>{event_talks}</Text> */}
              <Button style={styles.button} onPress={goToMessageBoard}>
                Message board
              </Button>
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
// to highlight changes: //, {{backgroundColor: 'red', margin: 50}}
// position: "absolute" ?

const styles = StyleSheet.create({

  mainContainer: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 10,
  },
  titleContainer: {
    fontWeight: 'bold',
    },
   bodyContainer: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
    marginBottom: 10,
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
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
    buddiesContainer: {
    flexDirection: 'row',
    fontWeight: 'bold',
    margin: 5,
    justifyContent: 'space-between',
   },

  location: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    //alignItems: 'left',
    marginBottom: 5,
  },
  genreLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  genre: {
    fontSize: 16,
  },
  attendeesContainer: {
    flexDirection: 'row-reverse',
    marginBottom: 5,
  },
  attendeesLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailsButton: {
    margin: 10,
  },
  button: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  messagesContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  messagesLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },

});

export default EventCard;
