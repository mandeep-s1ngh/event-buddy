import axios from 'axios';

export const getGeolocationFromAddress = (address) => {
  const geocodingURL = `https://geocode.maps.co/search?q=${address}`;

  return axios
    .get(geocodingURL)
    .then((response) => {
      if (!response.data[0]) return false;
      return {
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
      };
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
