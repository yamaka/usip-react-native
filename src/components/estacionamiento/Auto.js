import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//todo componente recive props (propiedades del componente)
//nos sirven para que manden datos al componente
//y hacr alguna logica de renderizado con estos
const Auto = props => {
  const {marca, modelo, color} = props.auto;
  return (
    <View>
      <Text>-------------------------</Text>
      <Text>marca: {marca}</Text>
      <Text>modelo: {modelo}</Text>
      <Text>color: {color}</Text>
    </View>
  );
};

export default Auto;
