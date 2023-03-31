import axios from 'axios';

export const getMessageBoardMessages = (eventName) => {
  const getMessageBoardMessagesURL = `https://oadfjp5qdirlugb6n5kz4d6rwe0ulkyh.lambda-url.us-east-1.on.aws/?eventName=${eventName}`;

  return axios
    .get(getMessageBoardMessagesURL)
    .then((response) => {
      console.log(response.data, '<<<<RES');

      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
