import { View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Geohash from 'latlon-geohash';

import { getTicketMasterEvents } from '../api/eventsListapi';
import EventCard from './EventCard';

export default function EventsList({
  eventName,
  userLocation,
  setEventNameForBuddies,
  setEventNameForMessages,
}) {
  let geohash = '';
  if (userLocation) {
    const precision = 9;
    // precision is maximum X axis error index:
    // 4   ± 20 km - not true! gives Leeds for 'London'
    // 5   ± 2.4 km - still gives Leeds
    // 9 - still Leeds, 10 - nothing

    geohash = Geohash.encode(
      userLocation.geolocation.latitude,
      userLocation.geolocation.longitude,
      precision
    );
    // console.log(geohash);
  }

  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [source, setSource] = useState({ api: getTicketMasterEvents });
  const getEvents = source.api;

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getEvents(eventName, geohash) //crushes the app, geohash does not exist at start - but so is with userLocation and eventName
      //getEvents(eventName, userLocation)
      .then((events) => {
        setEventsList(events);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(err);
      });
  }, [eventName, userLocation]); //not updating with changes ?
  // console.log ('isLoading ->', isLoading);
  // console.log ('isError ->', isError)
  // console.log ('error ->', errorMessage)

  ticketmaster_list = eventsList.map((event) => {
    let location = event._embedded.venues[0].city.name;
    if (event._embedded.venues[0].state) {
      location += ', ' + event._embedded.venues[0].state.name;
    } else {
      location += ', ' + event._embedded.venues[0].country.name;
    }
    let genre = '';
    if (
      event.classifications[0].genre &&
      event.classifications[0].genre.name !== 'Undefined'
    ) {
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

  const tooManyLeedses = ticketmaster_list.reduce((acc, curr) => {
    //removes Festivals with first two words matching
    const titleWords = curr.title.split(' ');
    const firstTwoWords = titleWords.slice(0, 2).join(' ');
    const isDuplicate = acc.some((item) => {
      const itemTitleWords = item.title.split(' ');
      const itemFirstTwoWords = itemTitleWords.slice(0, 2).join(' ');
      return itemFirstTwoWords === firstTwoWords;
    });

    if (!isDuplicate) {
      acc.push(curr);
    }

    return acc;
  }, []);

  const filtered_events_list = tooManyLeedses.filter(
    (event) => !event.title.includes('Ticket' || 'ticket')
  );
  if (isLoading) return (<View><Text>Is loading...</Text></View>);
  else
  return (
    <ScrollView>
      <View>
        {filtered_events_list.map((event) => {
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
                setEventNameForBuddies={setEventNameForBuddies}
                setEventNameForMessages={setEventNameForMessages}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
