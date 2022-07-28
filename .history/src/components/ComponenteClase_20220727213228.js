//importaciones
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ComponenteClase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}> Mi Componente de clase!!!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
  },
});

export default ComponenteClase;
