import { Icon } from '@rneui/themed';
import {
  TextInput,
  View,
  Image,
  Text,
  Alert,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from '../utils/styles.js';
import { useState, useEffect, useContext } from 'react';
import { getUserProfile } from '../api/getUserProfile.js';
import { patchUserProfile } from '../api/patchUserProfile.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import { MenuShownContext } from '../context/MenuShownContext.js';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ usernameForProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { menuShown, setMenuShown } = useContext(MenuShownContext);
  usernameToDisplay = usernameForProfile || currentUser.username;
  const navigation = useNavigation();
  const [newUserTag, setNewUserTag] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserAge, setCurrentUserAge] = useState('');
  const [currentUserGender, setCurrentUserGender] = useState('');
  const [currentUserInterests, setCurrentUserInterests] = useState('');
  const [isCurrentUserProfile, setIsCurrentUserProfile] = useState(
    !currentUser ? false : usernameForProfile === currentUser.username
  );
  const [isLoading, setIsLoading] = useState(false);

  function clearTextInput() {
    setNewUserTag('');
  }
  function addInterest() {
    const updatedInterests = [...currentUserInterests];
    updatedInterests.push(newUserTag);
    setCurrentUserInterests(updatedInterests);
    setNewUserTag('');
    patchUserProfile(usernameToDisplay, null, null, null, [newUserTag]);
  }
  function removeInterest(interest) {
    const updatedInterests = [...currentUserInterests];
    updatedInterests.splice(updatedInterests.indexOf(interest), 1);
    setCurrentUserInterests(updatedInterests);
    patchUserProfile(usernameToDisplay, null, null, null, [`-${interest}`]);
  }

  if (!usernameForProfile && isCurrentUserProfile)
    usernameForProfile = currentUser.username;

  useEffect(() => {
    setIsLoading(true);
    if (!currentUser && !usernameForProfile)
      return navigation.navigate('LogIn');
    getUserProfile(usernameToDisplay).then((fetchedProfile) => {
      const {
        Item: { name, age, gender, interests },
      } = fetchedProfile;
      const nameValue = name ? name.S : null;
      const ageValue = age ? age.N : null;
      const genderValue = gender ? gender.S : null;
      const interestsValue = interests ? interests.S.split(',') : null;
      if (name) setCurrentUserName(nameValue);
      if (age) setCurrentUserAge(ageValue);
      if (gender) setCurrentUserGender(genderValue);
      if (interests) setCurrentUserInterests(interestsValue);
      setIsLoading(false);
    });
  }, [currentUser, usernameToDisplay]);

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;

  const interestsButtons = !currentUserInterests
    ? null
    : isCurrentUserProfile
    ? currentUserInterests.join(', ')
    : currentUserInterests.map((interest, index) => {
        return (
          <View
            key={index}
            style={{ paddingTop: 5, paddingBottom: 5, paddingRight: 5 }}
          >
            <TouchableHighlight
              style={styles.Profile__interestButton}
              onPress={() => removeInterest(interest)}
            >
              <Text style={styles.Profile__interestButtonText}>{interest}</Text>
            </TouchableHighlight>
          </View>
        );
      });

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.LandingPage__View}
      scrollEnabled={true}
    >
      <View style={styles.Profile__View}>
        {isCurrentUserProfile ? (
          <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 20 }}>
            Filling out your profile helps you match with more buddies. Get
            started now!
          </Text>
        ) : null}
        <Image
          source={{ uri: 'https://source.unsplash.com/random' }}
          style={styles.Profile__Image}
        />
        <Text style={styles.Profile__username}>{usernameToDisplay}</Text>

        {currentUserAge ? <Text>Age: {currentUserAge} </Text> : null}
        {currentUserName ? <Text>Name: {currentUserName} </Text> : null}
        {currentUserGender ? <Text>Gender: {currentUserGender}</Text> : null}
        <Text style={styles.Profile__currentUserInterests}>
          Interests: {'\n'} {interestsButtons || 'none'}
        </Text>
        {isCurrentUserProfile ? (
          <>
            <Text style={styles.Profile__addToUserInterests}>
              Add to your interests (press on interest to remove):
            </Text>
            <View>
              <TextInput
                value={newUserTag}
                onFocus={() => setMenuShown(false)}
                onChangeText={(newUserTag) => {
                  setNewUserTag(newUserTag);
                }}
                style={styles.Profile__TextInput}
                placeholder="Type here ... e.g. food-lover, hip-hop, Spanish  "
              />
              {newUserTag.length > 0 && (
                <TouchableOpacity
                  style={styles.Profile__closeInputButton}
                  onPress={clearTextInput}
                >
                  <Icon name="close" size={20} />
                </TouchableOpacity>
              )}
            </View>

            <View style={{ paddingTop: 10 }}>
              <TouchableHighlight
                style={styles.Profile__Button}
                onPress={addInterest}
              >
                <Text style={styles.Profile__ButtonText}>Add interest</Text>
              </TouchableHighlight>
            </View>
          </>
        ) : null}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
