import axios from 'axios';

export const setUserAttending = (username, eventName) => {
  eventName = eventName.replaceAll(' ', '_');
  const createEventTableIfNotExistsURL =
    'https://qfwyzgbbjjus6dccn5g3hc7kwu0kcxom.lambda-url.us-east-1.on.aws/';
  const postUserToEventURL =
    'https://smtx4zcyud5hb3vecd7jbumnz40sxynl.lambda-url.us-east-1.on.aws/';

  return axios
    .post(createEventTableIfNotExistsURL, { eventName })
    .then((response) => {
      return response.data.endsWith('already exists.')
        ? Promise.resolve()
        : new Promise((resolve) => setTimeout(resolve, 10000));
    })
    .then(() => {
      return axios.post(postUserToEventURL, { username, eventName });
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
