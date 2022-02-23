import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';

const Content = ({movies, navigation}) => {
  const renderMovies = ({item}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.movieImage} source={{uri: item.image}} />
        <View style={styles.details}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
            <Text> ({item.year})</Text>
          </View>
          <Text style={styles.imdb}>{item.imDbRating}</Text>
          <View style={{width: 250}}>
            <Text style={styles.cast}>{item.crew}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={renderMovies}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Content;

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
  imdb: {
    backgroundColor: '#00B4D8',
    color: 'white',
    width: 30,
    borderRadius: 20,
    textAlign: 'center',
    margin: 3,
  },
});
