import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Rating = ({image, rating, title, subTitle}) => {
  return (
    <View>
      <View style={styles.main}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.imgTag} source={{uri: image}} />
          <View style={styles.tit}>
            <Text>{title}</Text>
            <Text style={styles.subTit}>{subTitle}</Text>
          </View>
        </View>
        <Text style={styles.rate}>{rating}⭐️</Text>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgTag: {width: 40, height: 40, borderRadius: 20},
  tit: {
    paddingLeft: 10,
    width: 240,
    height: 50,
  },
  subTit: {fontWeight: 'bold', color: 'black'},
  rate: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
});
