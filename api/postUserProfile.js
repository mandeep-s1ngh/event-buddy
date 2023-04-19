import axios from 'axios';

export const postUserProfile = (username, name, age, gender, interests) => {
  const postUserProfileURL =
    'https://nxufe32o2vmfqobfm7loolewaa0vpfnb.lambda-url.us-east-1.on.aws/';

  const interestsString = !interests ? null : interests.toString();

  return axios
    .post(postUserProfileURL, {
      username,
      name,
      age,
      gender,
      interests: interestsString,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
