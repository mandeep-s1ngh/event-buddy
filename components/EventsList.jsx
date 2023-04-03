import { View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getTicketMasterEvents } from '../api/eventsListapi';
import EventCard from './EventCard';

export default function EventsList({ setEventNameForBuddies }) {
  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [source, setSource] = useState({ api: getTicketMasterEvents });
  const getEvents = source.api;

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
  }, []);

  //what we need fo preview card:

  //event short title
  //event short place
  //event genre(s)
  // event picture
  // event date
  // users number       //from our 'users' DB or generated
  // messages number    //from our 'messages' DB generated

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
      date: event.dates.start.localDate || '01.01.01', // add date!
      img: event.images[3].url,
      buddies: buddies,
      talks: talks,
      key: event.id,
    };
  });

  const events_list = ticketmaster_list;

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
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
