import axios from 'axios';

export const getUserProfile = (userName) => {
  const getProfileOfUser = `https://i4plxtujywyfxov6ot4jbkzpxu0ohjwp.lambda-url.us-east-1.on.aws/?username=${userName}`;

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
