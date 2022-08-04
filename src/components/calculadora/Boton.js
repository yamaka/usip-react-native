import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Boton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.botonNumerico} onPress={onPress}>
      <Text style={{color: 'white', fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  botonNumerico: {
    height: 80,
    width: 60,
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
});
