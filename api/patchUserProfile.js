import axios from 'axios';

export const patchUserProfile = (username, name, age, gender, interests) => {
  const patchUserProfileURL =
    'https://vnfl72ter74lxtd43wglopvlju0xqmst.lambda-url.us-east-1.on.aws/';

  const interestsString = !interests ? null : interests.toString();

  return axios
    .post(patchUserProfileURL, {
      username,
      name,
      age,
      gender,
      interests: interestsString,
    })
    .then((response) => {
      console.log(response.data, '<<<<RES');

      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
