import axios from 'axios';

export const patchChatMessagesRead = (uuids) => {
  const patchChatMessagesReadURL =
    'https://aurtqlckmfftdq4u3bqcd7gvca0ydqfu.lambda-url.us-east-1.on.aws/';

  if (!uuids) return;

  return axios
    .patch(patchChatMessagesReadURL, {
      uuids,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log('patchChatMessagesRead: ', err);
      return err;
    });
};
