import axios from 'axios';

export const getAddressFromGeolocation = (latitude, longitude) => {
  const reverseGeocodingURL = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

  return axios
    .get(reverseGeocodingURL)
    .then((response) => {
      return {
        address: response.data.display_name,
        addressDetails: response.data.address,
      };
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
