//primero  importaciones
import React from 'react';
//View es como div, y Text es como p en  html
import {View, Text, StyleSheet} from 'react-native';

//componente funcional
const Main = () => {
  //jsx interfaz
  return (
    <View style={style.container}>
      <Text style={style.title}>Hola diplomado usip!!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
});
//exportar el componente
export default Main;
