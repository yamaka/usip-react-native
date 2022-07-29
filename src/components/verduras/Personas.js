import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Persona = props => {
  console.log('persona', props.persona);
  const {nombre, edad} = props.persona;
  return (
    <View>
      <Text>---------</Text>
      <Text>{`Nombre: ${nombre}`}</Text>
      <Text>{`Edad: ${edad}`}</Text>
    </View>
  );
};

const Personas = () => {
  const juan = {nombre: 'Juan', edad: 25};
  const pedro = {nombre: 'Pedro', edad: 30};
  return (
    <View>
      <Text>Personas</Text>
      {/* renderizado condicional */}
      {/* mostrar la persona con menor edad */}

      <View style={{paddingTop: 30}}>
        <Text style={{fontSize: 18}}>Personas:</Text>
        <Persona persona={juan} />
        <Persona persona={pedro} />
        <Text style={{fontSize: 18}}>
          Mostrar La Persona con menor edad entre Pedro y Juan:
        </Text>
        {/* forma con ternaria */}
        {/* {juan.edad < pedro.edad ? (
          <Persona persona={juan} />
        ) : (
          <Persona persona={pedro} />
        )} */}
        {/* forma condcional directa */}
        {pedro.edad < juan.edad && <Persona persona={pedro} />}
        {pedro.edad > juan.edad && <Persona persona={juan} />}
      </View>
    </View>
  );
};

export default Personas;

const styles = StyleSheet.create({});
