import { ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { SafeAreaView , FlatList, View, ScrollView} from 'react-native'
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
      //const eventsListUpdated = [...events];
        //eventsList, ...events];
      setEventsList(events);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      setIsError(true);
    });  
  }, []) 

    console.log(eventsList);

  return(
    <ListItem>
    <Text>
        {eventsList.map((event) => {
            return (
                <EventCard
                event_name={event.short_title}
                event_place={event.venue.display_location}
                />
            )
        })} 
    </Text>
    </ListItem>
  )

   //what we need:
    //event short title
    //event short place
    //const event_genre = eventsList[0].performers.genres.slice(0,3).map((genre) => genre.slug) ?
    // event_img_URL_preview={event_img_URL_preview}   //event.performers.image ?
    // event_users_signed={event_users_signed}      //from our 'users' DB
    // messages_list_length={messages_list_length}  //from our 'messages' DB


  //all events:
  // - list of locations - 
  //eventsList.map((event)=>event.venue.display_location);


  //single event:
  //- list of performers - 
  //eventsList.map((event)=>event.performers.map((performer)=>performer.name)); 

    //const list = eventsList.map((event)=>event.performers.map((performer)=>performer.name)); 
    //console.log('31,',list)

//-------------------ONE------------------------------
// return (
//     <ListItem>
//         <Text>
//         {eventsList.map((event) => {
//             //console.log(event);
//             const performer = event.performers[0];
//             const genres = performer.genres;
//             const genre = genres[0];                //need recursive function looking for deeply nested things
//             //.slug;
//             //console.log('67,performer:', performer);
//             //console.log('68,genres:', genres);
//             //console.log('genres:', event.performers[0].genres); WTF
//             return (
//                 <EventCard 
//                 event_name={event.short_title}
//                 event_place={event.venue.display_location}
//                // event_genre={performer.genres}
//                 />
//             )
//         })
//         } 
//     </Text>
//     </ListItem>
//     )

//-------------------------------TWO------------------------------
// const list = eventsList.map((event)=>event.venue.display_location);
// return(
// <SafeAreaProvider>
//     <FlatList 
//         data={list} 
//         renderItem={(place)=> {
//             console.log(list);
//             console.log(place);     //WTF
//             console.log(place.index);
//             console.log(place.item);
//             <Text>Hello</Text>
//             // <EventCard 
//             // //event_place={place.item} 
//             // />
//             }
//         } 
//         keyExtractor={(place) => place.index} 
//     />
//     </SafeAreaProvider>
// )

//----------------------THREE---------------------------
//const list = eventsList.map((event)=>event.venue.display_location);
// return (
// <View>
//       <ScrollView>
//         <View>
//           {list.map((place) => {
//             return (
//               <View>
//                 <Text key={place.index}>{place.index}</Text>
//               </View>
//             );
//           })}
//         </View>
//       </ScrollView>
// </View>
//  )
//-------------------------LAST ONE--------------------
// return(
//     <SafeAreaProvider>
//         <FlatList 
//             data={list} 
//             keyExtractor={(place) => place.index} 
//             renderItem={(place)=> {
//                 console.log('list:', list);
//                 console.log('place:',place);     //WTF
//                 // console.log(place.index);
//                 console.log(place.item);

//                 <Text>Hello {place.item = [ place.item ]}</Text>
//                 // <EventCard 
//                 // //event_place={place.item} 
//                 // />
//                 }
//             } 
            
//         />
//         </SafeAreaProvider>
//     )


}


// - list of postcodes - 
  //eventsList.map((event)=>event.venue.postal_code);