import axios from 'axios';

export const setUserAttending = (username, eventName) => {
  return axios
  .post('https://vbcyvhsmzok2mogdbsghdcajxq0zsrnw.lambda-url.us-east-1.on.aws/', {username, eventName})
  .then((response) => {

    return response.data;
  })
}
