import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Content from './Content';
import Header from './Header/Header';
import BottomNav from './BottomNav/BottomNav';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Details from '../../Components/Details/Details';

const Home = ({navigation}) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    return await axios
      .get('https://imdb-api.com/en/API/Top250Movies/k_7sj58w4n')
      .then(res => {
        setMovies(res.data.items);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.mainWin}>
      <Header navigation={navigation} />
      <Content movies={movies} />

      <View style={styles.bottom}>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    borderTopColor: '#D3DEDC',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
  mainWin: {
    flex: 1,
  },
});
export default Home;
