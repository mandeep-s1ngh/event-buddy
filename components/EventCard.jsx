//import * as React from "react"; // is it in use?
//import { Badge } from "react-native-elements";
//import styles from "../styles";

import { Text } from "react-native";
import { Card, Badge, Button, Icon } from '@rneui/themed';

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
   
    return ( //refacture to RN
        <Card>  
        <Text style = {{}}>
            {event_title || 'Bestival'} | {event_place || 'Glasgow, TN'}
        </Text>
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
            <Button>
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
           {/* <Card.Image
            source={{
            uri:
            // {event_img_URL_preview ||
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
            // }
            
            }}/> */}
            <Button title="VIEW MORE" />
        </Card>
    );
}

export default EventCard;
