//importaciones
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import stylesGeneric from '../styles/global';

//clase que extiende de react component
class ComponenteClase extends Component {
  //contructor
  constructor(props) {
    super(props);
  }
  //render para pintar la interfaz
  render() {
    return (
      <View style={style.container}>
        <Text style={stylesGeneric.title}> Mi Componente de clase!!!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'blue',
  },
});

//exportacion de nuestro componente
export default ComponenteClase;
