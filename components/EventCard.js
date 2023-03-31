//import * as React from "react"; // is it in use?
//import { Badge, View } from "react-native-elements";
//import styles from "../styles";

import { Text, StyleSheet } from "react-native";
import { Card, Badge, Button, Icon, View } from '@rneui/themed';

function EventCard ({  //sorted by date ascending by default?                              
    event_title,              
    event_place,            
    event_genre,  
    event_date,         
    event_img_URL_preview,   
    event_users_signed,      //from our 'users' DB
    messages_list_length     //from our 'messages' DB
    })  {
   
    return ( 

          // {/* <View>
                
          //   <View style={styles.titleContainer}>
          //     <Text style={styles.title}>{event_title || 'Bestival'}</Text>
          //     <Text style={styles.location}>{event_place || 'Glasgow, TN'}</Text>
          //   </View>
          //   <View style={styles.imageContainer}>
          //     <Card.Image
          //       style={styles.image}
          //       resizeMode="cover"
          //       source={{
          //         uri: event_img_URL_preview 
          //       }}
          //     />
          //   </View>
          //   <View style={styles.genreContainer}>
          //     <Text style={styles.genreLabel}>Event genre: </Text>
          //     <Text style={styles.genre}>{event_genre || ['polka', 'yodeling']}</Text>
          //   </View>
          //   <View style={styles.attendeesContainer}>
          //     <Text style={styles.attendeesLabel}>Buddies going: </Text>
          //     <Badge value={event_users_signed || "37"} />
          //     <Button style={styles.button}>
          //       Join!
          //     </Button>
          //   </View>
          //   <View style={styles.messagesContainer}>
          //     <Text style={styles.messagesLabel}>Talks about event: </Text>
          //     <Badge value={messages_list_length || "78"} />
          //     <Button>
          //       Drop in!
          //     </Button>
          //   </View>
          //   {/* <Button title="VIEW MORE" /> */} 
          //   </View> */}

      <Card style={styles.container}>  
        <Card.Title style={styles.title}>{event_title || 'Bestival'}  </Card.Title>
        <Text> 
        {event_place || 'Glasgow, TN'}
        </Text>
            <Card.Image
            style={{}}
            //resizeMode="cover"
            source={{
            uri: event_img_URL_preview 
            }}/>
        <Text> 
            Genre:&nbsp;
            {event_genre} 
        </Text>
        <Text> 
            Date:&nbsp;
            {event_date} 
        </Text>
        <Text>
            Buddies going:&nbsp;{event_users_signed || "37"}
            {/* <Badge value={event_users_signed || "37"}>
            </Badge> */}
            <Button style={styles.button}>
                Join the event
            </Button>
        </Text>
        <Text style={{}}>
            Talks about event:&nbsp;
            <Badge value={messages_list_length || "78"}>
            </Badge>
            <Button style={{}}>
                Message board
            </Button>
        </Text>
           
            <Button title="VIEW EVENT DETAILS" /> 
        </Card>
        //, backgroundColor: 'red', margin: 50
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: '40%',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
    alignItems: 'left',
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
  button: {
    marginLeft: 10,
    flexDirection: 'row-reverse',
    alignItems: 'left',
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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         marginRight: 10,
//     },
//     // fonts: {
//     //   marginBottom: 8,
//     // },
    
//     button: {
//        // flexDirection: 'row',
//         borderRadius: 1,
//         marginLeft: 10,
//       },
//     image: {
//       width: 70,
//       height: 70,
//       marginRight: 10,
//     },
   
//     });

export default EventCard;
