//import { ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { FlatList, View,
        // ScrollView, SafeAreaView , ListItem 
        } from 'react-native'
import { useEffect, useState } from "react";
import { getEvents } from '../api/eventsListapi'
import EventCard from "./EventCard";

export default function EventsList() {

    const [eventsList, setEventsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getEvents()
        .then((events) => {
        //const eventsListUpdated = [...events, eventsList]; setEventsList(eventsListUpdated);
        setEventsList(events);
        setIsLoading(false);
        })
        .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        });  
    }, []) 

    //what we need:
    
    //event short title   
    //event short place
    //event genre(s)      const event_genre = eventsList[0].performers.genres.slice(0,3).map((genre) => genre.slug) ?
    // event picture      event_img_URL_preview={event_img_URL_preview}   //event.performers.image ?
    // users number       event_users_signed={event_users_signed}      //from our 'users' DB
    // messages number    messages_list_length={messages_list_length}  //from our 'messages' DB

    const list = eventsList.map((event)=> {
        return {"location": event.venue.display_location, "key": event.id}
    }); //example with places

    const renderItem = ({ item }) => (
    <View >
      <EventCard event_place={item.location} />
    </View>
  );

    return( 
        <SafeAreaProvider>
        <Text>
            <FlatList data={list} renderItem={renderItem} />;
        </Text>
        </SafeAreaProvider>
    )
}

//all events geekseat:
// - list of locations - 
//eventsList.map((event)=>event.venue.display_location);

//single event geekseat:
//- list of performers - 
//eventsList.map((event)=>event.performers.map((performer)=>performer.name)); 

//const list = eventsList.map((event)=>event.performers.map((performer)=>performer.name)); 
//console.log('list',list)

// - list of postcodes - 
//eventsList.map((event)=>event.venue.postal_code);