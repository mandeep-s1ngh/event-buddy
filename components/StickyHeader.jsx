import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function StickyHeader  ({eventName}){
 

    return (
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          {{eventName} ? `SEE ALL ${eventName.toUpperCase()} EVENTS` : `SEE ALL EVENTS`}
        </Text>
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
    backgroundColor: 'red'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    flex: 1
  }
});