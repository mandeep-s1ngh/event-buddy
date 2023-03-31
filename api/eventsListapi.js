import axios from 'axios';

const seatgeekapi = axios.create({baseURL: "https://api.seatgeek.com/2"});

export const getSeatGeekEvents = () => {
  return seatgeekapi
  .get('/events?client_id=MzI2NjYwMjJ8MTY3OTkxMzYyNS43MzI4MTAz&type=concert')
  .then((response) => {
    return response.data.events;
  })
}
      //https://api.seatgeek.com/2/events?client_id=MzI2NjYwMjJ8MTY3OTkxMzYyNS43MzI4MTAz&type=concert

const ticketMasterApi = axios.create({baseURL: "https://app.ticketmaster.com/discovery/v2"});

export const getTicketMasterEvents = () => {
  return ticketMasterApi
  .get('/events.json?keyword=festival&classificationName=Music&apikey=bP1t2OXaOv6BYhMGG65SCwVnoAGRd3zJ')
  .then((response) => {
    return response.data._embedded.events;
  })
  }
      // https://app.ticketmaster.com/discovery/v2/events.json?keyword=festival&classificationName=Music&apikey=bP1t2OXaOv6BYhMGG65SCwVnoAGRd3zJ
 




