import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Persona = persona => {
  const {nombre, edad} = persona;
  return (
    <View>
      <Text>---------</Text>
      <Text>{`Nombre: ${nombre}`}</Text>
      <Text>{`Edad: ${edad}`}</Text>
      <Text>---------</Text>
    </View>
  );
};

const Verduras = () => {
  const verduras = ['Zanahoria', 'Arbeja', 'Cebolla', 'Nabo', 'Vaina'];
  const juan = {nombre: 'Juan', edad: 25};
  const pedro = {nombre: 'Pedro', edad: 30};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verduras!!!!</Text>
      <View style={{paddingTop: 40}}>
        {/* renderizado iterativo o repetitivo */}
        {verduras.map((verdura, index) => {
          return <Text key={index}>{verdura}</Text>;
        })}
      </View>
      {/* mostrar la persona con menor edad */}

      <View style={{paddingTop: 30}}>
        <Text style={{fontSize: 18}}>Personas:</Text>
        <Persona persona={juan} />
        <Persona persona={pedro} />
        <Text style={{fontSize: 18}}>
          Persona con menor edad entre Pedro y Juan:
        </Text>
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
