import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NavHeader = ({title, backTo, navigation}) => {
  const [like, setLike] = useState(false);

  return (
    <View style={styles.headerSec}>
      <View style={styles.backButton}>
        <MaterialCommunityIcons
          style={{fontSize: 30}}
          name="keyboard-backspace"
          onPress={() => navigation.navigate(backTo)}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.iconView}>
        <MaterialCommunityIcons
          style={like ? styles.iconLike : styles.iconUnLike}
          name="heart"
          onPress={() => setLike(!like)}
        />
        <MaterialCommunityIcons style={styles.icon1} name="dots-vertical" />
      </View>
    </View>
  );
};

export default NavHeader;
const styles = StyleSheet.create({
  headerSec: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  backButton: {
    marginBottom: 30,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 17,
  },
  iconView: {flexDirection: 'row', marginBottom: 30, marginTop: 5},
  iconLike: {fontSize: 30, color: '#FA4EAB', paddingRight: 20},
  iconUnLike: {fontSize: 30, color: 'white', paddingRight: 20},
  icon1: {fontSize: 30, color: 'black'},
});
