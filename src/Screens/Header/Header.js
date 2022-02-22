import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const listTab = [
  {
    name: 'Latest',
  },
  {
    name: 'IMDB',
  },
  {
    name: 'Top 10',
  },
];

const Header = () => {
  const [status, setStatus] = useState('Grid');

  const setStatusFilter = name => {
    setStatus(name);
  };
  return (
    <View>
      <StatusBar backgroundColor="#00B4D8" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Movies</Text>
        </View>
        <View style={styles.listTab}>
          {listTab.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => setStatusFilter(item.name)}
              style={[styles.btnTab, status === item.name && styles.activeTab]}>
              <Text style={styles.tabText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    color: '#ffff',
    fontSize: 25,
    textAlign: 'center',
    height: 40,
  },
  header: {
    backgroundColor: '#00B4D8',
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tabText: {
    color: 'gray',
    fontSize: 15,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00B4D8',
    borderBottomLeftRadius: 50,
    borderBottomEndRadius: 50,
  },
});
