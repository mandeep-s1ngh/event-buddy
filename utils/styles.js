import { StyleSheet } from 'react-native';

const appBackground = '#f0eae6';
const navBarBackground = '#8a766f';
const navBarText = '#fff';
const cardBackground = '#f7e0c9';
const cardBackgroundGrey = '#e0ddda';
const ButtonBackground = '#ec8e2f';
const ButtonBackgroundDark = '#8a766f';
const TextInputBackground = '#f7e0c9';

const styles = StyleSheet.create({
  ///////////// General styling //////////////
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

  ///////////// NavBar //////////////
  NavBar: {
    height: 10,
  },
  NavBar__View: {
    backgroundColor: navBarBackground,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 15,
  },
  NavBar__Text: {
    color: navBarText,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '10%',
  },
  NavBar__rightButtons: {
    flexDirection: 'row',
    gap: 15,
  },

  ///////////// Menu //////////////
  Menu__View: {
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
  'Menu__View--loggedIn': {
    // height: '27%',
  },
  Menu__Text: {
    color: navBarText,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: '10%',
    marginVertical: 0,
  },

  ///////////// LocationRequest //////////////
  LocationRequest: {
    alignItems: 'center',
    paddingTop: 100,
  },
  LocationRequest__Text: {
    fontSize: 15,
    paddingBottom: 15,
    width: 250,
  },
  LocationRequest__TextInput: {
    height: 30,
    backgroundColor: TextInputBackground,
    fontSize: 12,
    paddingLeft: 10,
    width: 250,
  },
  LocationRequest__Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackground,
    width: 250,
  },
  LocationRequest__ButtonText: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  LocationRequest__closeInputButton: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 228,
  },

  ///////////// LandingPage //////////////
  LandingPage__View: {
    alignItems: 'center',
  },
  LandingPage__Image: {
    height: 200,
    width: 370,
    marginTop: 20,
  },
  LandingPage__Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackground,
    width: 250,
  },
  LandingPage__ButtonText: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  LandingPage__Text: {
    fontSize: 15,
    paddingBottom: 15,
    width: 250,
    alignContent: 'center',
  },
  LandingPage__TextInput: {
    height: 35,
    backgroundColor: TextInputBackground,
    fontSize: 13,
    paddingLeft: 10,
    width: 250,
  },
  LandingPage__closeInputButton: {
    position: 'absolute',
    marginTop: 8,
    marginLeft: 228,
  },

  ///////////// Profile //////////////
  Profile__View: {
    textAlignVertical: 'center',
    alignContent: 'center',
    flex: 0.8,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
  },
  Profile__Image: {
    height: 150,
    width: 300,
    borderRadius: 8,
  },
  Profile__username: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  Profile__TextInput: {
    height: 30,
    backgroundColor: TextInputBackground,
    fontSize: 12,
    paddingLeft: 10,
    width: 300,
  },
  Profile__Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackground,
    width: 300,
  },
  Profile__ButtonText: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  Profile__currentUserInterests: {
    paddingTop: 20,
  },
  Profile__addToUserInterests: {
    paddingBottom: 5,
  },
  Profile__closeInputButton: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 277,
  },
  Profile__interestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackgroundDark,
    width: 100,
  },
  Profile__interestButtonText: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
  },

  ///////////// BuddyList //////////////
  BuddyList__Text: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  ///////////// BuddyCard //////////////
  BuddyCard: {
    minHeight: 175,
    backgroundColor: cardBackground,
  },
  BuddyCard__Button: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginLeft: 30,
  },
  'BuddyCard__Button--buddyAdded': {
    backgroundColor: 'pink',
    color: 'pink',
  },
  BuddyCard__profileButton: {
    top: 70,
    right: -2,
  },
  BuddyCard__username: {
    fontWeight: 'bold',
  },
  BuddyCard__TextView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginHorizontal: '12%',
  },
  BuddyCard__categoryText: {
    fontWeight: 'bold',
    marginLeft: '25%',
  },
  BuddyCard__Text: {
    marginLeft: 5,
  },
  BuddyCard__interests: {
    position: 'absolute',
    top: '60%',
    left: '25%',
    maxWidth: 150,
  },
  BuddyCard__Image: {
    position: 'absolute',
    top: '28%',
    left: 10,
    borderColor: '#aba9a9',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },

  ///////////// MessageBoard //////////////
  MessageBoard__TextInput: {
    height: 30,
    backgroundColor: TextInputBackground,
    fontSize: 12,
    paddingLeft: 10,
    width: 250,
  },
  MessageBoard__Button: {
    justifyContent: 'center',
    paddingVertical: 4,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackground,
    width: 250,
  },
  MessageBoard__closeInputButton: {
    position: 'absolute',
    marginTop: 14,
    marginLeft: 250,
  },

  ///////////// MessageCard //////////////
  MessageCard__reply: {
    backgroundColor: '#dbd7d7',
  },
  MessageCard__replyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackgroundDark,
    width: 60,
    fontSize: 6,
  },
  'MessageCard__replyButton--zeroReplies': {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackgroundDark,
    width: 110,
    fontSize: 6,
  },
  MessageCard__ButtonText: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  MessageCard__date: {
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 4,
    paddingBottom: 8,
  },
  MessageCard__username: {
    paddingLeft: 4,
    fontWeight: 'bold',
  },
  MessageCard: {
    minHeight: 175,
    backgroundColor: TextInputBackground,
  },
  MessageCard__Text: {
    fontSize: 15,
    marginLeft: 5,
    width: 180,
  },
  MessageCard__reply: {
    minHeight: 175,
    backgroundColor: '#dde1e4',
  },
  MessageCard__replyFromText: {
    fontSize: 13,
    marginLeft: 0,
  },

  ///////////// Auth (LogIn, Registration, Confirm) //////////////
  Auth__View: {
    alignItems: 'center',
  },
  Auth__header: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
  },
  Auth__Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: ButtonBackground,
    width: 250,
    marginTop: 50,
    marginBottom: 25,
  },
  Auth__bottomButton: {
    marginTop: 5,
  },
  Auth__ButtonText: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
  Auth__TextInput: {
    height: 35,
    backgroundColor: TextInputBackground,
    fontSize: 13,
    paddingLeft: 10,
    width: 250,
    margin: 5,
  },

  ///////////// EventsList //////////////
  EventsList: {
    height: '100%',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 80,
  },
  EventsList__listView: {
    height: '90%',
    flex: 3,
    position: 'relative',
    top: 48,
    marginBottom: 48,
  },

  ///////////// StickyHeader //////////////
  minheight: 50,
  flex: 2,

  ///////////// MessagesOverview //////////////
  MessagesOverview: {},
  MessagesOverview__header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
  },
  MessagesOverview__conversationCard: {
    position: 'relative',
    margin: 10,
    marginHorizontal: 20,
    padding: 20,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: cardBackground,
  },
  MessagesOverview__TextInfoBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  'MessagesOverview__conversationCard--read': {
    backgroundColor: cardBackgroundGrey,
  },
  MessagesOverview__conversationCardUsername: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  MessagesOverview__conversationCardTime: {
    fontStyle: 'italic',
    fontSize: 10,
  },
  MessagesOverview__conversationCardMessage: {
    paddingRight: '10%',
  },
  MessagesOverview__unreadIndicator: {
    backgroundColor: ButtonBackground,
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 1.5,
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: '50%',
    right: '7.5%',
  },
  MessagesOverview__conversationCardButton: {
    position: 'absolute',
    right: '2%',
    top: '15%',
    backgroundColor: ButtonBackgroundDark,
    padding: 6,
    paddingTop: 2,
    paddingBottom: 3,
    borderRadius: 10,
  },
  MessagesOverview__conversationCardButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  MessagesOverview__noConversations: {
    margin: 20,
  },
  MessagesOverview__noConversationsChoices: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 40,
  },
  MessagesOverview__noConversationsText: {
    textAlign: 'center',
    fontSize: 20,
  },
  MessagesOverview__Button: {
    width: 150,
  },

  ///////////// Chat //////////////
  Chat__newMessageView: {
    backgroundColor: cardBackground,
    margin: 20,
    borderRadius: 10,
    position: 'relative',
  },
  Chat__stickyHeader: {
    backgroundColor: cardBackgroundGrey,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Chat__header: {
    marginRight: '30%',
  },
  Chat__backIcon: {
    marginRight: '20%',
  },
  Chat__otherUserMessageCard: {
    backgroundColor: cardBackgroundGrey,
    width: '80%',
  },
  Chat__currentUserMessageCard: {
    width: '80%',
    alignSelf: 'flex-end',
  },
  Chat__TextInput: {
    padding: 10,
    paddingRight: '25%',
  },
  Chat__Button: {
    backgroundColor: ButtonBackground,
    height: 35,
    width: 35,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginRight: '1.5%',
    position: 'absolute',
    right: 0,
    top: '12%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Chat__ButtonText: {
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   paddingTop: '10%',
  // },
  Chat__unreadIndicator: {
    backgroundColor: ButtonBackground,
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: '50%',
    right: '7.5%',
  },
});

export default styles;
