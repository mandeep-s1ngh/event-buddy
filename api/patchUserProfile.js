import axios from 'axios';
import { getUserProfile } from './getUserProfile';

export const patchUserProfile = async (
  username,
  name,
  age,
  gender,
  interests
) => {
  const patchUserProfileURL =
    'https://vnfl72ter74lxtd43wglopvlju0xqmst.lambda-url.us-east-1.on.aws/';

  const profile = !interests ? {} : await getUserProfile(username);
  const interestsArr = profile.Item.interests.S.split(',').concat(interests);
  const interestsFiltered = interestsArr.filter(
    (interest, index) => interestsArr.indexOf(interest) === index
  );
  interestsFiltered.forEach((interest) => {
    if (interest.startsWith('-')) {
      interestsFiltered.splice(
        interestsFiltered.indexOf(interest.replace('-', '')),
        1
      );
      interestsFiltered.splice(interestsFiltered.indexOf(interest), 1);
    }
  });
  try {
    return axios
      .patch(patchUserProfileURL, {
        username,
        name,
        age,
        gender,
        interests: interestsFiltered.toString(),
      })
      .then((res) => {
        return res.data;
      });
  } catch (err) {
    console.log(err);
    return err;
  }
};
