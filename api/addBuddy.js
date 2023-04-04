import axios from 'axios';
import { getUserProfile } from './getUserProfile';

export const addBuddy = async (username, buddyUsername) => {
  const addBuddyURL =
    'https://dd26edmwxyfjk7gnobxxppp4fi0twnkr.lambda-url.us-east-1.on.aws/';

  const profile = !buddyUsername ? {} : await getUserProfile(username);
  const buddiesArr = profile.Item.buddies
    ? profile.Item.buddies.S.split(',')
    : [];
  buddiesArr.push(buddyUsername);
  const buddiesFiltered = buddiesArr.filter(
    (buddy, index) => buddiesArr.indexOf(buddy) === index
  );
  try {
    return axios
      .patch(addBuddyURL, {
        username,
        buddyUsernames: buddiesFiltered.toString(),
      })
      .then((res) => {
        return res.data;
      });
  } catch (err) {
    console.log(err);
    return err;
  }
};
