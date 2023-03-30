import axios from 'axios';

const seatgeekapi = axios.create({baseURL: "https://api.seatgeek.com/2"});

export const getSeatGeekEvents = () => {
  return seatgeekapi
  .get('/events?client_id=MzI2NjYwMjJ8MTY3OTkxMzYyNS43MzI4MTAz&type=concert')
  .then((response) => {
    return response.data.events;
  })
}
      //
      //event.venue.display_location

const ticketMasterApi = axios.create({baseURL: "https://app.ticketmaster.com/discovery/v2"});

export const getTicketMasterEvents = () => {
  return ticketMasterApi
  .get('/events.json?keyword=festival&classificationName=Music&apikey=bP1t2OXaOv6BYhMGG65SCwVnoAGRd3zJ')
  .then((response) => {
    return response.data._embedded.events;
  })
  }

      // const eventName = response.data._embedded.events[0].name;

      // const eventCity = response.data._embedded.events[0]._embedded.venues[0].city.name
      // const eventCountry = response.data._embedded.events[0]._embedded.venues[0].country.name
   
      // const eventImage = response.data._embedded.events[0].images[4].url




