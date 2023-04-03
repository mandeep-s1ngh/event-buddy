import axios from 'axios';

const ticketMasterApi = axios.create({baseURL: "https://app.ticketmaster.com/discovery/v2"});

export const getTicketMasterEvents = (eventName, userLocation) => {
  let path='/events.json?apikey=bP1t2OXaOv6BYhMGG65SCwVnoAGRd3zJ'

  if (eventName) {  
  
    path += `&keyword=${eventName+' festival'}&classificationName=Music`;

  } else {
    path +='/&keyword=festival&classificationName=Music';
  }
 
  return ticketMasterApi
  .get(path)
  .then((response) => {
    return response.data._embedded.events;
  })
  }
  
// https://app.ticketmaster.com/discovery/v2/events.json?keyword=festival&classificationName=Music&apikey=bP1t2OXaOv6BYhMGG65SCwVnoAGRd3zJ
 

// const seatgeekapi = axios.create({baseURL: "https://api.seatgeek.com/2"});

// export const getSeatGeekEvents = () => {
//   return seatgeekapi
//   .get('/events?client_id=MzI2NjYwMjJ8MTY3OTkxMzYyNS43MzI4MTAz&type=concert')
//   .then((response) => {
//     return response.data.events;
//   })
// }
//       //https://api.seatgeek.com/2/events?client_id=MzI2NjYwMjJ8MTY3OTkxMzYyNS43MzI4MTAz&type=concert




