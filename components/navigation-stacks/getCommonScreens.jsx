import Profile from '../Profile';
import LocationRequest from '../LocationRequest';
import Registration from '../Registration';
import LogIn from '../LogIn';
import Confirm from '../Confirm';

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
    <Stack.Screen key="Registration" name="Registration">
      {(props) => <Registration {...props} />}
    </Stack.Screen>,
    <Stack.Screen key="LogIn" name="LogIn">
      {(props) => <LogIn {...props} />}
    </Stack.Screen>,
    <Stack.Screen key="Confirm" name="Confirm">
      {(props) => <Confirm {...props} />}
    </Stack.Screen>,
  ];
}

export default getCommonScreens;
