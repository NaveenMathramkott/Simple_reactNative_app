import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContentCard = ({cardImage, cardTitle, cardSubTitle, cardPara}) => {
  return (
    <View>
      <View style={styles.contentImg}>
        <Image style={{width: 300, height: 300}} source={{uri: cardImage}} />
      </View>
      <View style={{paddingTop: 10}}>
        <Text style={styles.cardTit}>{cardTitle}</Text>
        <View style={styles.subImgView}>
          <Image style={styles.subImg} source={{uri: cardImage}} />

          <Text style={{paddingLeft: 8, color: 'gray'}}>{cardSubTitle}</Text>
        </View>

        <Text
          style={{
            paddingTop: 20,
            color: 'gray',
          }}>
          {cardPara}
        </Text>
        <View
          style={{borderWidth: 0.3, borderColor: '#CCD1E4', marginTop: 30}}
        />
      </View>
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  contentImg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 5,
    borderColor: '#D1D1D1',
  },
  cardTit: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  subImgView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  subImg: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
});
