import Profile from '../Profile';
import LocationRequest from '../LocationRequest';

function getCommonScreens(Stack, setUserLocation) {
  return [
    <Stack.Screen key="Profile" name="Profile">
      {(props) => <Profile {...props} />}
    </Stack.Screen>,
    <Stack.Screen key="Location" name="Location">
      {(props) => (
        <LocationRequest {...props} setUserLocation={setUserLocation} />
      )}
    </Stack.Screen>,
  ];
}

export default getCommonScreens;
