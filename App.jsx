/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import Welcome from './src/Screens/Welcome/Welcome';

import RootNavigation from './Navigation';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, [loading]);

  if (!loading) return <Welcome />;
  return <RootNavigation />;
};

export default App;
