import axios from 'axios';

const seatgeekapi = axios.create({baseURL: "https://api.seatgeek.com/2"});

export const getEvents = () => {
  return seatgeekapi
  .get('/events?client_id=MzI2NjYwMjJ8MTY3OTkxMzYyNS43MzI4MTAz&type=concert')
  .then((response) => {
    return response.data.events;
  })
}
console.log(getEvents())