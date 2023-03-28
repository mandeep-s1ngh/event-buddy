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
  AppView: {
    backgroundColor: appBackground,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // make sure the content doesn't overlay the StatusBar, only needed if using expo-status-bar instead of react-native one
  },
  NavBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavBar_View: {
    backgroundColor: navBarBackground,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: 15,
  },
  NavBar_Text: {
    color: navBarText,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '25%',
    marginRight: 'auto',
  },
  NavBar_RightButtons: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default styles;
