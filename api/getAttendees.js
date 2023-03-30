import axios from "axios";

export const getAttendees = (eventName) => {
  const getAttendeesOfEvent = `https://lyh5o2xp7j2liursvszdmnk5dq0dwadk.lambda-url.us-east-1.on.aws/?eventName=${eventName}`;

  return axios
    .get(getAttendeesOfEvent)
    .then((response) => {
      console.log(response.data, "<<<<RES");

      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
