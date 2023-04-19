import axios from 'axios';

export const getAttendees = (eventName) => {
  eventName = eventName.replaceAll(' ', '_');
  const getAttendeesOfEvent = `https://lyh5o2xp7j2liursvszdmnk5dq0dwadk.lambda-url.us-east-1.on.aws/?eventName=${eventName}`;

  return axios
    .get(getAttendeesOfEvent)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
