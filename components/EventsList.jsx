//import { ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { FlatList, View,
        // ScrollView, SafeAreaView , ListItem 
        } from 'react-native'
import { useEffect, useState } from "react";
import { 
        //getEvents, 
        getSeatGeekEvents, getTicketMasterEvents } from '../api/eventsListapi'
import EventCard from "./EventCard";

export default function EventsList() {

    const [eventsList, setEventsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const getEvents = 
                        //getSeatGeekEvents;
                        getTicketMasterEvents;

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

    console.log (eventsList);

    //what we need:
    
    //event short title   
    //event short place
    //event genre(s)      const event_genre = eventsList[0].performers.genres.slice(0,3).map((genre) => genre.slug) ?
    // event picture      event_img_URL_preview={event_img_URL_preview}   //event.performers.image ?
    // users number       event_users_signed={event_users_signed}      //from our 'users' DB
    // messages number    messages_list_length={messages_list_length}  //from our 'messages' DB
    
    
    // const seatgeek_list = eventsList.map((event)=> {
    //     return {
    //         "title": event.short_title, 
    //         "location": event.venue.display_location, 
    //         "genre": "hello", 
    //         "img": "https://cdn-icons-png.flaticon.com/512/3844/3844724.png",
    //         "key": event.id}
    // });

    const ticketmaster_list = eventsList.map((event)=> { 
    return {
        "title": event.short_title, 
        "location": event.venue.display_location, 
        "genre": "hello", 
        "img": "https://cdn-icons-png.flaticon.com/512/3844/3844724.png",
        "key": event.id}
    });

    const events_list = 
        //seatgeek_list;
        ticketmaster_list;

    const renderItem = ({ item }) => (
    <View >
      <EventCard
      event_title={item.title} 
      event_place={item.location}
      event_genre={item.genre}
       />
    </View>
  );

    return( 
        <SafeAreaProvider>
        <Text>
            <FlatList data={events_list} renderItem={renderItem} />;
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