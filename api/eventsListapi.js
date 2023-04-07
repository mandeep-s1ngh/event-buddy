import axios from "axios";

const ticketMasterApi = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2",
});

export const getTicketMasterEvents = (eventName, geohash) => {
  let path = "/events.json?apikey=bP1t2OXaOv6BYhMGG65SCwVnoAGRd3zJ";

  if (eventName) {
    path += `&keyword=${eventName + " festival"}&classificationName=Music`;
  }
  if (geohash) {
    path += `&geoPoint=${geohash}&keyword=festival&classificationName=Music`;
  } else {
    path += "&keyword=festival&classificationName=Music";
  }

  return ticketMasterApi.get(path).then((response) => {
    return response.data._embedded.events;
  });
};
