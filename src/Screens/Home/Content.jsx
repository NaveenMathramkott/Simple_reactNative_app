import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RenderMovies from './RenderMovies';

const Content = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
    console.log('haii iam native');
  }, []);

  const loadingMore = () => {
    if (movies.length > 9) {
      setLoading(false);
    }
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <RenderMovies
            items={item}
            title={item.title}
            year={item.year}
            rating={item.imDbRating}
            para={item.crew}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadingMore}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default Content;
