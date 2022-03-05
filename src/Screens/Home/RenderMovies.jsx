import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RenderMovies = ({items, title, year, rating, para, image}) => {
  const badge = parseFloat(rating);
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image style={styles.movieImage} source={{uri: image}} />
      <View style={styles.details}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', items)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', width: 200}}>
              {title}
            </Text>
            <Text> ({year})</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={[
            styles.imDb,
            badge >= 9
              ? styles.imdbRate1
              : badge > 8.6
              ? styles.imdbRate2
              : styles.imdbRate3,
          ]}>
          {rating}
        </Text>
        <View style={{width: 250}}>
          <Text style={styles.cast}>{para}</Text>
        </View>
      </View>
    </View>
  );
};

export default RenderMovies;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 150,

    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,

    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },

  movieImage: {
    width: 100,
    height: '100%',
  },
  details: {
    padding: 5,
  },
  cast: {
    fontSize: 13,
    color: '#92A9BD',
    paddingTop: 20,
  },
  imDb: {
    color: 'white',
    width: 30,
    height: 18,
    borderRadius: 10,
    textAlign: 'center',
    margin: 3,
  },
  imdbRate1: {
    backgroundColor: '#65C18C',
  },
  imdbRate2: {
    backgroundColor: '#FFC300',
  },
  imdbRate3: {
    backgroundColor: '#FF1818',
  },
});
