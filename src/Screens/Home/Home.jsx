import React from 'react';
import Content from './Content';
import Header from '../../Components/Header/Header';
import BottomNav from '../../Components/BottomNav/BottomNav';
import {StyleSheet, SafeAreaView, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainWin}>
      <Header navigation={navigation} />
      <Content />

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
