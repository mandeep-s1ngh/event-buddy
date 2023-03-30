//import * as React from "react"; // is it in use?
//import { Badge, View } from "react-native-elements";
//import styles from "../styles";

import { Text, StyleSheet } from "react-native";
import { Card, Badge, Button, Icon, View } from '@rneui/themed';

function EventCard ({        //EventPreviewCard ? 
                             // /api.seatgeek.com/2/events - sorted by date ascending by default?
    event_title,              //event.performers.name
    event_place,             //event.venue.city || event.venue.display_location
    event_genre,             //event.performers.genres.slice(0,3).map((genre) => genre.slug)
    event_img_URL_preview,   //event.performers.image
    event_users_signed,      //from our 'users' DB
    messages_list_length     //from our 'messages' DB
    //event_type,              //event.type - always 'concert' - not needed ?
    })  {
   
    return (
    
        <Card style={styles.container}>  
            <Card.Title>{event_title || 'Bestival'} | {event_place || 'Glasgow, TN'}</Card.Title>
            <Card.Image
            style={styles.image}
            resizeMode="cover"
            source={{
            uri: event_img_URL_preview 
            }}/>
        <Text> 
            event genre:&nbsp;
            {event_genre || ['polka', 'yodeling']} 
            {/* | {event_type || 'rave'} | attending:&nbsp; */}
            {/* <Badge value={event_popularity || "5457"}></Badge> */}
        </Text>
        <Text>
            buddies going:&nbsp;
            <Badge value={event_users_signed || "37"}>
            </Badge>
            <Button style={styles.button}>
                Join!
            </Button>
        </Text>
        <Text>
            talks about event:&nbsp;
            <Badge value={messages_list_length || "78"}>
            </Badge>
            <Button>
                Drop in!
            </Button>
        </Text>
           
            {/* <Button title="VIEW MORE" /> */} 
        </Card>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginRight: 10,
    },
    // fonts: {
    //   marginBottom: 8,
    // },
    
    button: {
       // flexDirection: 'row',
        borderRadius: 1,
        marginLeft: 10,
      },
    image: {
      width: 70,
      height: 70,
      marginRight: 10,
    },
   
    });

export default EventCard;
