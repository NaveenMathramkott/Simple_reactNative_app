import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Content from './Content';

const Home = () => {
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

  return <Content movies={movies} />;
};

export default Home;
