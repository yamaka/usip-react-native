import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Verduras = () => {
  const verduras = ['Zanahoria', 'Arbeja', 'Cebolla', 'Nabo'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verduras!!!!</Text>
      <View style={{paddingTop: 20}}>
        <Text>{verduras[0]}</Text>
        <Text>{verduras[1]}</Text>
        <Text>{verduras[2]}</Text>
        <Text>{verduras[3]}</Text>
      </View>
    </View>
  );
};

export default Verduras;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
  },
});
