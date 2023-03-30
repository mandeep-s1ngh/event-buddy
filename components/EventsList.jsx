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

    const [source, setSource] = useState ({"api": getTicketMasterEvents})
    const getEvents = source.api ;                           
                      
    // var seatgeek_list = [];      //refactor with States as well if we want to switch between APIs
    // var ticketmaster_list = [];

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

    //what we need fo preview card:
    
    //event short title   
    //event short place
    //event genre(s)      
    // event picture      
    // users number       //from our 'users' DB
    // messages number    //from our 'messages' DB

    
    // seatgeek_list = eventsList.map((event)=> {
    //     return {
    //         "title": event.short_title, 
    //         "location": event.venue.display_location, 
    //         "genre": "seatgeek" || eventsList[0].performers.genres.slice(0,3).map((genre) => genre.slug), //?
    //         "img": "https://cdn-icons-png.flaticon.com/512/3844/3844724.png", //fix img display
    //         "key": event.id}
    // });

    const ticketmaster_list = eventsList.map((event)=> { 
    return {
        "title": event.name, 
        "location": event._embedded.venues[0].city.name 
        //+ ', ' + event._embedded.venues[0].state.name //how to concatenate?
        ,
        "genre": event.classifications[0].genre.name, //get rid of 'Undefined'
        "img": event.images[0].url, //placeholder if undefined?
        "key": event.id}
    });

    const events_list = ticketmaster_list;

    const renderItem = ({ item }) => (
    <View >
      <EventCard
      event_title={item.title} 
      event_place={item.location}
      event_genre={item.genre}
      event_img_URL_preview={item.img}
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