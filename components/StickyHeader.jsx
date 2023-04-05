import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';

function StickyHeader  ({eventName, setEventName, found, isError}){

  const navigation = useNavigation();
  const goToLanding = () => {
    //setEventName('');
    navigation.navigate("Home");
  };

    return (
      <View style={styles.header}>
         <TouchableHighlight
          style={styles.LandingPage_Buttons}
          onPress={goToLanding}
        >
        <Text style={styles.paragraph}>
          {
          !found ?
          `SORRY THERE'S NO EVENTS FOR '${eventName.toUpperCase()}' FOUND PLEASE TRY ANOTHER SEARCH ` 
          : eventName ?
          `SHOWING ALL EVENTS FOR '${eventName.toUpperCase()}'` 
          : `SHOWING ALL EVENTS` 
          }
        </Text></TouchableHighlight>
      </View>
    );
}
export default StickyHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    position: 'absolute',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#ec8e2f'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    flex: 1
  },
  LandingPage_Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#ec8e2f',
   width: '100%',
  },
  Landing_Page_Buttons_Text: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
});