// //import * as React from "react"; // is it in use?
import { useState} from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Avatar, Card, Badge, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
// import MessageBoard from "./MessageBoard";

// import { Card, Badge, Button, Icon, View } from '@rneui/themed';
// //import { Badge, View } from "react-native-elements";
// //import styles from "../styles";

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
    <View>

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
    flexDirection: 'column',
    flex: 1,
    borderRadius: 10,
    //fontWeight: 'bold',
    //margin: 10,
    // overflow: 'hidden',
    // flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
    // paddingHorizontal: 10,
    //paddingVertical: 15,
  },
  titleContainer: {
     //flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   marginBottom: 5,
    fontWeight: 'bold',
    // fontSize: 14,
    //marginBottom: 1,
    },
   bodyContainer: {
    //flexDirection: 'row',
    flex: 1,
    //margin: 10,
    borderRadius: 10,
    // overflow: 'hidden',
    // flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
     //   fontSize: 16,
  },
  location: {
    fontSize: 14,
    //   color: 'gray',
   // fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
   // flexDirection: 'row',
    //justifyContent: 'space-between',
   // marginRight: 10,
    
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 5,
     //   height: undefined,
    //   aspectRatio: 1,
    
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'left',
   // width:  'auto',
    //flex: 1,
   // padding: 10,
    //flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
    buddiesContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    fontWeight: 'bold',
    margin: 5,
    justifyContent: 'space-between',
    // fontSize: 14,
   },

  location: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    alignItems: 'left',
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
    alignItems: 'left',
    marginBottom: 5,
  },
  attendeesLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },

  // detailsContainer: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  // },
  detailsButton: {
    margin: 10,
   // flexDirection: 'row-reverse',
   //alignItems: 'left',
  },
  button: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'row-reverse',
    //alignItems: 'left',
   // paddingVertical: 9,
    // paddingHorizontal: 25,
    // borderRadius: 3,
    // elevation: 3,
    // backgroundColor: '#ec8e2f',
    // width: 130
  },
  messagesContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 5,
  },
  messagesLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },

});

export default EventCard;
