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
    marginLeft: '45%', //use 33% when there is a left navbar icon e.g. home
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
    top: 55,
    zIndex: 5,
    height: '10%',
    width: '50%',
    maxWidth: 150,
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    paddingTop: 15,
  },
  Menu_ViewLoggedIn: {
    height: '25%',
  },
  Menu_Text: {
    color: navBarText,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: '10%',
    marginVertical: 0,
  },
  // ------------- LocationRequest styling ------------- //
  Location_Request: {
    alignItems: 'center',
    paddingTop: 100,
  },

  Location_TextInfo: {
    paddingBottom: 15,
  },

  Location_TextInput: {
    height: 30,
    backgroundColor: '#f7e0c9',
    fontSize: 12,
    paddingLeft: 10,
    width: 300,
  },

  Location_Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    // paddingHorizontal: 25,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 130,
  },

  // ------------- Landing page styling ------------- //
  LandingPage_View: {
    marginTop: '25%',
    marginLeft: '19%',
    width: 250,
    flex: 1,
    alignContent: 'center',
  },
  LandingPage_Button: {
    // marginTop: 250,
    width: 250,
    flex: 1,
    alignContent: 'center',
  },
  LandingPage_Input: {
    textAlign: 'center',
  },
  // ------------- Profile styling ------------- //
  Profile_View: {
    // textAlign: 'center',
    // color: '#000000',
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    flex: 0.8,
    justifyContent: 'space-between',
    // backgroundColor: '#b4d1db',
    padding: 20,
    margin: 10,
  },
  Profile_Image: {
    // resizeMode: 'cover',
    height: 150,
    width: 300,
    borderRadius: 8,
  },
  Profile_username: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  Profile_TextInput: {
    height: 30,
    backgroundColor: '#f7e0c9',
    fontSize: 12,
    paddingLeft: 10,
    width: 300,
  },
  Profile_Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    // paddingHorizontal: 25,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 130,
  },
  Profile_ButtonsText: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
  },
  // Profile_Buttons_Click: {
  //   alignItems: 'center',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10,
  // },

  // ------------- BuddyList styling ------------- //
  BuddyList_Text: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ------------- BuddyCard styling ------------- //

  BuddyCard: {
    minHeight: 175,
  },

  BuddyCard_Button: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginLeft: 30,
  },

  BuddyCard_ProfileButton: {
    top: 70,
    right: -2,
  },

  BuddyCard_Username: {
    fontWeight: 'bold',
  },

  BuddyCard_TextView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginHorizontal: '5%',
  },

  BuddyCard_CategoryText: {
    fontWeight: 'bold',
    marginLeft: '25%',
  },

  BuddyCard_Text: {
    marginLeft: 10,
  },

  BuddyCard_Interests: {
    position: 'absolute',
    top: '60%',
    left: '25%',
  },

  BuddyCard_Image: {
    position: 'absolute',
    top: '28%',
    left: 10,
    borderColor: '#aba9a9',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default styles;
