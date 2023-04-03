import { View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getTicketMasterEvents } from '../api/eventsListapi';
import EventCard from './EventCard';

export default function EventsList({ 
  eventName,
  userLocation,
  setEventNameForBuddies, 
  setEventNameForMessages
 }) {
  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [source, setSource] = useState({ api: getTicketMasterEvents });
  const getEvents = source.api;

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getEvents(eventName, userLocation)
      .then((events) => {
        setEventsList(events);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(err);
      });
  }, []);
  console.log ('isLoading ->', isLoading);
  console.log ('isError ->', isError)
  console.log ('error ->', errorMessage)

    ticketmaster_list = eventsList.map((event) => {
      let location = event._embedded.venues[0].city.name;
      if (event._embedded.venues[0].state) {
        
        location += ', ' + event._embedded.venues[0].state.name;
      } else {
        location += ', ' + event._embedded.venues[0].country.name;
      }
      let genre = '';
      if (event.classifications[0].genre.name !== 'Undefined') {
        genre += event.classifications[0].genre.name;
        if (
          event.classifications[1] &&
          event.classifications[1].genre.name !== 'Undefined'
        )
          genre += ', ' + event.classifications[1].genre.name;
      } else {
        genre += 'Various';
      }
      let buddies = Math.floor(Math.random() * 18 + 3);
      let talks = Math.floor(Math.random() * 9 + 1);
      return {
        title: event.name,
        location: location,
        genre: genre,
        date: event.dates.start.localDate,
        img: event.images[3].url,
        buddies: buddies,
        talks: talks,
        key: event.id,
      };
    });

    const filtered_ticket_options = ticketmaster_list.filter(event => !event.title.includes('Ticket'))
    
    const uniqueNames = new Set();
    const events_list = filtered_ticket_options.filter(event => {
      if (uniqueNames.has(event.title)) {
        return false;
      } else {
        uniqueNames.add(event.title);
        return true;
      }
    });

  return (
    <ScrollView>
      <View>
        {events_list.map((event) => {
          return (
            <View key={event.key}>
              <EventCard
                event_title={event.title}
                event_place={event.location}
                event_date={event.date}
                event_genre={event.genre}
                event_img_URL_preview={event.img}
                event_buddies={event.buddies}
                event_talks={event.talks}
                setEventNameForBuddies = { setEventNameForBuddies }
                setEventNameForMessages = {setEventNameForMessages}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
