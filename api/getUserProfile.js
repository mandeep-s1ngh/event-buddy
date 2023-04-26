import axios from 'axios';

export const getUserProfile = (username) => {
  const getProfileOfUser = `https://i4plxtujywyfxov6ot4jbkzpxu0ohjwp.lambda-url.us-east-1.on.aws/?username=${username}`;

  return axios
    .get(getProfileOfUser)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
