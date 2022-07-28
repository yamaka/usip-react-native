//importaciones
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ComponenteClase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Mi Componente de clase!!!</Text>
      </View>
    );
  }
}

export default ComponenteClase;
