import { StyleSheet } from 'react-native';

const appBackground = '#f0eae6';
const navBarBackground = '#8a766f';
const navBarText = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ActivityIndicator: {
    position: 'relative',
    top: '50%',
  },

  AppView: {
    backgroundColor: appBackground,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  NavBar: {
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
    marginRight: '10%',
  },
  NavBar_RightButtons: {
    flexDirection: 'row',
    gap: 15,
  },

  Menu_View: {
    backgroundColor: navBarBackground,
    position: 'absolute',
    right: 0,
    top: 55,
    zIndex: 5,
    // height: '10%',
    // width: '50%',
    // maxWidth: 150,
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 15,
  },
  Menu_ViewLoggedIn: {
    // height: '27%',
  },
  Menu_Text: {
    color: navBarText,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: '10%',
    marginVertical: 0,
  },

  Location_Request: {
    alignItems: 'center',
    paddingTop: 100,
  },
  Location_TextInfo: {
    fontSize: 15,
    paddingBottom: 15,
    width: 250,
  },
  Location_TextInput: {
    height: 30,
    backgroundColor: '#f7e0c9',
    fontSize: 12,
    paddingLeft: 10,
    width: 250,
  },
  Location_Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 250,
  },

  Location_Buttons_Text: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  Location_CloseButton: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 228,
  },

  LandingPage_View: {
    alignItems: 'center',
  },
  LandingPage_Image: {
    height: 200,
    width: 370,
    marginTop: 20,
  },
  LandingPage_Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 250,
  },
  Landing_Page_Buttons_Text: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  LandingPage_TextInfo: {
    fontSize: 15,
    paddingBottom: 15,
    width: 250,
    alignContent: 'center',
  },
  LandingPage_TextInput: {
    height: 35,
    backgroundColor: '#f7e0c9',
    fontSize: 13,
    paddingLeft: 10,
    width: 250,
  },
  LandingPage_CloseButton: {
    position: 'absolute',
    marginTop: 8,
    marginLeft: 228,
  },

  Profile_View: {
    textAlignVertical: 'center',
    alignContent: 'center',
    flex: 0.8,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
  },
  Profile_Image: {
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
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 300,
  },
  Profile_Buttons_Text: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  Profile_CurrentUserInterests: {
    paddingTop: 20,
  },
  Profile_AddToUserInterests: {
    paddingBottom: 5,
  },
  Profile_CloseButton: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 277,
  },
  Profile_Each_Interest_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#8a766f',
    width: 100,
  },
  Profile_Each_Interest_button_Text: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
  },
  Profile_Each_Interest_button_X: {
    position: 'relative',
    alignItems: 'center',
    paddingVertical: 5,
    width: 12,
    position: 'absolute',
    right: 10,
  },
  Profile_Each_Interest_button_Text_X: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'black',
  },

  BuddyList_Text: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  BuddyCard: {
    minHeight: 175,
    backgroundColor: '#f7e0c9',
  },

  BuddyCard_Button: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginLeft: 30,
  },

  BuddyCard_ButtonAdded: {
    backgroundColor: 'pink',
    color: 'pink',
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
    marginHorizontal: '12%',
  },

  BuddyCard_CategoryText: {
    fontWeight: 'bold',
    marginLeft: '25%',
  },

  BuddyCard_Text: {
    marginLeft: 5,
  },

  BuddyCard_Interests: {
    position: 'absolute',
    top: '60%',
    left: '25%',
    maxWidth: 150,
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

  MessageCard_Reply: {
    backgroundColor: '#dbd7d7',
  },
  MessageBoard_TextInput: {
    height: 30,
    backgroundColor: '#f7e0c9',
    fontSize: 12,
    paddingLeft: 10,
    width: 250,
  },
  MessageBoard_Buttons: {
    justifyContent: 'center',
    paddingVertical: 4,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 250,
  },
  MessageBoard_CloseButton: {
    position: 'absolute',
    marginTop: 14,
    marginLeft: 250,
  },
  Message_Card_Reply_Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#8a766f',
    width: 60,
    fontSize: 6,
  },
  Message_Card_Buttons_Text: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  Message_Card_Reply_Button_Zero_Replies: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#8a766f',
    width: 110,
    fontSize: 6,
  },
  Message_Card_Date: {
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 4,
    paddingBottom: 8,
  },
  Message_Card_Username: {
    paddingLeft: 4,
    fontWeight: 'bold',
  },
  MessageCard: {
    minHeight: 175,
    backgroundColor: '#f7e0c9',
  },
  MessageCard_Text: {
    fontSize: 15,
    marginLeft: 5,
    width: 180,
  },
  Message_Card_Reply_Box: {
    minHeight: 175,
    backgroundColor: '#dde1e4',
  },
  Message_Card_Reply_From: {
    fontSize: 13,
    marginLeft: 0,
  },

  allMessagesThread: {
    alignItems: 'left',
    textAlign: 'left',
    alignContent: 'center',
  },
  Auth_View: {
    alignItems: 'center',
  },
  Auth_Header: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
  },
  Auth_Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
    width: 250,
    marginTop: 50,
    marginBottom: 25,
  },
  Auth_BottomButton: {
    marginTop: 5,
  },
  Auth_ButtonText: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  Auth_Input: {
    height: 35,
    backgroundColor: '#f7e0c9',
    fontSize: 13,
    paddingLeft: 10,
    width: 250,
    margin: 5,
  },
});

export default styles;
