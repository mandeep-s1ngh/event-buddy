import { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { postMessageToChatHistory } from '../api/postMessageToChatHistory';
import styles from '../styles.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import { MenuShownContext } from '../context/MenuShownContext.js';
import { useNavigation } from '@react-navigation/native';

// const Chat = ({ setUsernameForProfile, conversation }) => {
const Chat = ({ setUsernameForProfile }) => {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!currentUser) return navigation.navigate('LogIn');
    setIsLoading(true);
    getChatHistory(conversation)
      .then((result) => {
        if (result !== 'none')
          setMessages(
            result.Items.sort((a, b) => b.timestamp.S - a.timestamp.S)
          );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentUser, eventNameForMessages]);

  if (isLoading || !messages)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  return <View style={styles.Chat_View}></View>;
};

export default Chat;
