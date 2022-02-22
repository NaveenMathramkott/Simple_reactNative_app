/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import Header from './src/Screens/Header/Header';
import Home from './src/Screens/Home/Home';
import BottomNav from './src/Screens/BottomNav/BottomNav';
import {StyleSheet, View} from 'react-native';
import Welcome from './src/Screens/Welcome/Welcome';

import {SafeAreaView} from 'react-native';
// import Details from './src/Screens/Details/Details';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, [loading]);

  if (!loading) return <Welcome />;
  return (
    <SafeAreaView style={styles.mainWin}>
      <Header />
      <Home />
      <View style={styles.bottom}>
        <BottomNav />
      </View>
      {/* <Details /> */}
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
    // color: 'red',
    flex: 1,
  },
});
export default App;
