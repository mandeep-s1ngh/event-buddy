import Profile from '../Profile';
import LocationRequest from '../LocationRequest';

function getCommonScreens(Stack, setUserLocation, usernameForProfile) {
  return [
    <Stack.Screen key="Profile" name="Profile">
      {(props) => (
        <Profile {...props} usernameForProfile={usernameForProfile} />
      )}
    </Stack.Screen>,
    <Stack.Screen key="Location" name="Location">
      {(props) => (
        <LocationRequest {...props} setUserLocation={setUserLocation} />
      )}
    </Stack.Screen>,
  ];
}

export default getCommonScreens;
