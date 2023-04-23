import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useEffect, useState } from 'react';
import Geohash from 'latlon-geohash';
import styles from '../utils/styles';
import { getTicketMasterEvents } from '../api/eventsListapi';
import EventCard from './EventCard';
import StickyHeader from './StickyHeader';

export default function EventsList({
  eventName,
  setEventName,
  userLocation,
  setEventNameForBuddies,
  setEventNameForMessages,
  setMenuShown,
}) {
  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [found, setFound] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidLocation, setInvalidLocation] = useState(false);
  const [source, setSource] = useState({ api: getTicketMasterEvents });
  const getEvents = source.api;

  let geohash = '';
  if (
    userLocation &&
    userLocation.geolocation.latitude &&
    userLocation.geolocation.longitude
  ) {
    const precision = 5;

    geohash = Geohash.encode(
      userLocation.geolocation.latitude,
      userLocation.geolocation.longitude,
      precision
    );
  } else if (userLocation && !invalidLocation) {
    setInvalidLocation(true);
    setIsLoading(false);
    setFound(false);
  }

  useEffect(() => {
    if (!invalidLocation) {
      setIsLoading(true);
      setIsError(false);
      getEvents(eventName, geohash)
        .then((events) => {
          setEventsList(events);
          setIsLoading(false);
          if (events.length) setFound(true);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(err);
        });
    }
  }, [eventName, userLocation]);

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

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
    let buddies = Math.floor(
      event.name === 'Tortuga Music Festival'
        ? 2
        : event.name === 'Kaleidoscope Festival 2023'
        ? 0
        : Math.random() * 18 + 3
    );
    let talks = Math.floor(
      event.name === 'Tortuga Music Festival'
        ? 2
        : event.name === 'Kaleidoscope Festival 2023'
        ? 0
        : Math.random() * 9 + 1
    );
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
    const titleWords = curr.title.split(' ');
    const firstTwoWords = titleWords.slice(0, 2).join(' ');
    const isDuplicate = acc.some((item) => {
      const itemTitleWords = item.title.split(' ');
      const itemFirstTwoWords = itemTitleWords.slice(0, 2).join(' ');
      return itemFirstTwoWords === firstTwoWords;
    });

    if (
      !isDuplicate &&
      !(
        titleWords[0] === 'Leeds' &&
        eventName !== 'Leeds' &&
        geohash !== 'gcwfhcebd'
      )
    ) {
      acc.push(curr);
    }

    return acc;
  }, []);

  const filtered_events_list = tooManyLeedses.filter(
    (event) =>
      !event.title.includes('Ticket' || 'ticket' || 'payment' || 'Payment')
  );

  return (
    <SafeAreaProvider>
      <View style={styles.EventsList}>
        <StickyHeader
          style={styles.StickyHeader}
          eventName={eventName}
          found={found}
          setEventName={setEventName}
        />
        <View style={styles.EventsList__listView}>
          <ScrollView onScroll={() => setMenuShown(false)}>
            <View onStartShouldSetResponder={() => true}>
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
                      setEventNameForMessages={setEventNameForMessages}
                      setEventNameForBuddies={setEventNameForBuddies}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
