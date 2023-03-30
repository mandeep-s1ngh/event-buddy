import { StyleSheet, StatusBar, Platform } from 'react-native';

// Colours: set as variables here for easier changes later
const appBackground = '#f0eae6';
const navBarBackground = '#2b2b2b';
const navBarText = '#fff';
//////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // ------------- App styling ------------- //
  AppView: {
    backgroundColor: appBackground,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // make sure the content doesn't overlay the StatusBar, only needed if using expo-status-bar instead of react-native one
  },
  // ------------- NavBar styling ------------- //
  NavBar: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 10,
  },
  NavBar_View: {
    backgroundColor: navBarBackground,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 15,
  },
  NavBar_Text: {
    color: navBarText,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '33%',
    marginRight: 'auto',
  },
  NavBar_RightButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  // ------------- Menu styling ------------- //
  Menu_View: {
    backgroundColor: navBarBackground,
    position: 'absolute',
    right: 0,
    top: '7.3%',
    zIndex: 5,
    height: '22%',
    width: '50%',
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    paddingTop: 15,
  },
  Menu_Text: {
    color: navBarText,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: '15%',
    marginVertical: 0,
  },
  // ------------- LocationRequest styling ------------- //
  Location_Request: {
    alignItems: 'center',
    paddingTop: 200,
  },

  // Location_TextInfo: {
  //   paddingBottom: 50
  //   },

  // Location_TextInput: {
  //   height: 40,
  //   backgroundColor: 'lightgrey',
  //   fontSize: 20,
  //   },

  // Location_SubmitButton: {
  //   color: 'orange'
  //   }

  // ------------- Landing page styling ------------- //
  LandingPageButtons: {
    // marginTop: 250,
    width: 250,
  },
});

export default styles;
