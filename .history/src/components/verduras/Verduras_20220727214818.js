import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Verduras = () => {
  return (
    <View style={styles.container}>
      <Text>Verduras!!!!</Text>
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
