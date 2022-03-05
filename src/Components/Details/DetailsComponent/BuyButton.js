import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BuyButton = ({buttonText}) => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <View style={styles.square}>
            <Text style={styles.txt}>{buttonText}</Text>
            <Text style={styles.txt}>
              ₹{Math.floor(Math.random() * 1000) + 100}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyButton;

const styles = StyleSheet.create({
  square: {
    paddingLeft: 30,
    paddingRight: 30,
    width: 280,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {color: 'white', fontWeight: 'bold'},
});
