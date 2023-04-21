import axios from 'axios';

export const getConversations = (username) => {
  const getConversationsURL = `https://us5aluv3ord2xdg5l7k4wpbezm0oqluf.lambda-url.us-east-1.on.aws/?username=${username}`;

  return axios
    .get(getConversationsURL)
    .then((response) => {
      return response.data.Items;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
