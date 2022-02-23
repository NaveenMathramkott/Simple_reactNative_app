import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.img}>{/* <Image /> */}</View>
        <View style={styles.txt}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Golden Eye (2000)
          </Text>
          <Text>imdb:8</Text>
          <Text style={styles.crew}>crew</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 50,
  },
  img: {
    width: 320,
    height: 320,
    backgroundColor: 'yellow',
  },
  txt: {
    paddingTop: 10,
  },
  crew: {
    borderBottomColor: '#E5E3C9',
    borderBottomWidth: 1,
  },
});
