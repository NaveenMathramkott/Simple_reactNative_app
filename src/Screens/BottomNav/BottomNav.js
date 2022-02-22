import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    name: 'home-outline',
    text: 'Home',
  },
  {
    name: 'calendar',
    text: 'Calendar',
  },
  {
    name: 'newspaper',
    text: 'Grids',
  },
  {
    name: 'vector-square',
    text: 'Pages',
  },
  {
    name: 'dots-horizontal',
    text: 'Components',
  },
];

const BottomNav = () => {
  const [status, setStatus] = useState('Grids');

  const setStatusButton = text => {
    setStatus(text);
  };

  return (
    <View style={styles.mainView}>
      {data.map((items, id) => (
        <TouchableOpacity
          key={id}
          activeOpacity={1}
          onPress={() => setStatusButton(items.text)}
          style={[styles.buttonPad]}>
          <MaterialCommunityIcons
            name={items.name}
            style={[
              styles.iconsBtn,
              status === items.text && styles.activeNavButton,
            ]}
          />
          <Text style={styles.text}>{items.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonPad: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  text: {
    fontSize: 12,
    width: 70,
    textAlign: 'center',
  },
  activeNavButton: {
    color: '#00B4D8',
  },
  iconsBtn: {
    color: 'gray',
    fontSize: 27,
  },
});

export default BottomNav;
