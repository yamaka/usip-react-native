import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Verduras = () => {
  const verduras = ['Zanahoria', 'Arbeja', 'Cebolla', 'Nabo', 'Vaina'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verduras!!!!</Text>
      <View style={{paddingTop: 40}}>
        {/* renderizado iterativo o repetitivo */}
        {verduras.map((verdura, index) => {
          return <Text key={index}>{verdura}</Text>;
        })}
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
