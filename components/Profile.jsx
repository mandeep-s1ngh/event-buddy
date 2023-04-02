import { Button } from '@rneui/themed';
import {
  TextInput,
  View,
  Image,
  Text,
  Pressable,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles.js';
import { useState } from 'react';

const Profile = () => {
  const [NewUserTag, setNewUserTag] = useState('');
  const [currentUserTags, setCurrentUserTags] = useState('');

  return (
    <View style={styles.Profile_View}>
      <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 20 }}>
        Filling out your profile helps you match with more buddies. Get started
        now!
      </Text>
      <Image
        source={require('./michael-jackson.jpg')}
        style={styles.Profile_Image}
      />
      <Text style={styles.Profile_username}>MJackson58</Text>

      <Text>Age: 50 </Text>
      <Text>Name: Michael Jackson </Text>
      <Text>Gender: Male</Text>
      <Text style={{ paddingTop: 20 }}>
        {' '}
        #non-smoker #festivals #concerts #night-owl {currentUserTags}
      </Text>
      <Text style={{ paddingTop: 25, paddingBottom: 5 }}>
        Add to your tags:{' '}
      </Text>
      <TextInput
        value={NewUserTag}
        onChangeText={(NewUserTag) => {
          setNewUserTag(NewUserTag);
        }}
        style={styles.Profile_TextInput}
        placeholder="Type here ... e.g. food-lover, travellor, Spanish  "
      />

      <View style={{ paddingTop: 10 }}>
        <TouchableHighlight
          style={styles.Profile_Buttons}
          onPress={() => {
            setCurrentUserTags(`${currentUserTags} #${NewUserTag} `);
          }}
        >
          <Text style={styles.Profile_ButtonsText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Profile;

/*
<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, borderRadius: 1, }}>
          <Button color="#ec8e2f" title="Submit" borderRadius="1" inClick={() => {setCurrentUserTags(currentUserTags + NewUserTag)}}/>
        </View>
*/
