import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.wel}>
      <Text style={{color: 'white', fontSize: 30}}>Movies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wel: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00B4D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
