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
    
        <Card style={styles.container}>  
            <Card.Title>{event_title || 'Bestival'} | {event_place || 'Glasgow, TN'}</Card.Title>
            <Card.Image
            style={styles.image}
            resizeMode="cover"
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
        <Text>
            Talks about event:&nbsp;
            <Badge value={messages_list_length || "78"}>
            </Badge>
            <Button>
                Message board
            </Button>
        </Text>
           
            <Button title="VIEW EVENT DETAILS" /> 
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
