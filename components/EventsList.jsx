//import { ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, Card, Badge, Button} from '@rneui/themed';
import { FlatList, View, StyleSheet
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
    //console.log(eventsList[0]);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getEvents()
        .then((events) => {
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


    ticketmaster_list = eventsList.map((event)=> { 
        let location = event._embedded.venues[0].city.name;
        if(event._embedded.venues[0].state) {
            location += ', ' + event._embedded.venues[0].state.name;
        } else {
            location += ', ' + event._embedded.venues[0].country.name;
        }
        let genre = '';
        if(event.classifications[0].genre.name !== 'Undefined') {
            genre += event.classifications[0].genre.name;
            if(event.classifications[1] && event.classifications[1].genre.name !== 'Undefined') 
                genre += ', ' + event.classifications[1].genre.name;
        } else {
            genre += 'Various'; //'Other'?
        }
        return {
            "title": event.name, 
            "location": location,
            "genre": genre,
            "date": '01.01.01',
            "img": event.images[3].url,
            "key": event.id
        };
    });

    const events_list = ticketmaster_list;

    const renderItem = ({ item }) => (
//       <EventCard
//       event_title={item.title} 
//       event_place={item.location}
//       event_genre={item.genre}
//       event_date={item.date}
//       event_img_URL_preview={item.img}
//        >
//    </EventCard>
<Card style={styles.container}>  
            <Card.Title>{item.title || 'Bestival'} | {item.location || 'Glasgow, TN'}</Card.Title>
            <Card.Image
            style={styles.image}
            resizeMode="cover"
            source={{
            uri: item.img 
            }}/>
        <Text> 
            Genre:&nbsp;
            {item.genre} 
        </Text>
        <Text> 
            Date:&nbsp;
            {item.date} 
        </Text>
        <Text>
            Buddies going:&nbsp;{
            //event_users_signed || 
            "37"}
            {/* <Badge value={event_users_signed || "37"}>
            </Badge> */}
            <Button style={styles.button}>
                Join the event
            </Button>
        </Text>
        <Text>
            Talks about event:&nbsp;
            <Badge value={
                //messages_list_length || 
                "78"}>
            </Badge>
            <Button>
                Message board
            </Button>
        </Text>
           
            <Button title="VIEW EVENT DETAILS" /> 
        </Card>
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
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
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  attendeesLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  button: {
    marginLeft: 10,
  },
  messagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  messagesLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});