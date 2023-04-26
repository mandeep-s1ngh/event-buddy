import axios from 'axios';

export const postMessageToChatHistory = (
  uuid,
  username,
  recipient,
  timestamp,
  message
) => {
  const postMessageToChatHistoryURL =
    'https://spozav6h6x4a35j5w7atekcsx40yeeow.lambda-url.us-east-1.on.aws/';

  return axios
    .post(postMessageToChatHistoryURL, {
      uuid,
      username,
      recipient,
      timestamp,
      message,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
