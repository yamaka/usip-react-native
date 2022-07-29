//hacemos las importaciones necesarias para crear nuesrto componente
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//importamos el componente Auto
import Auto from './Auto';

//creamos la funcion o componente con el nombre del archivo
const Estacionamiento = () => {
  const autos = [
    {marca: 'audi', modelo: 2002, color: 'negro'},
    {marca: 'nissan', modelo: 1995, color: 'negro'},
    {marca: 'toyota', modelo: 2020, color: 'rojo'},
    {marca: 'ford', modelo: 2022, color: 'azul'},
  ];
  const autoMenorA = anio => {
    console.log('autoMenorA');
    console.log(anio);
    const autosMenores = [];
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].modelo < anio) {
        autosMenores.push(autos[i]);
      }
    }
    console.log(autosMenores);
    return (
      <View>
        {autosMenores.map(auto => (
          <Auto auto={auto} />
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estacionamiento</Text>
      <Text>Autos:</Text>
      {autos.map(item => (
        <Auto auto={item} />
      ))}
      <Text>Autos Menores al año 2000:</Text>
      {autoMenorA(2022)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Estacionamiento;

//1. crear un componente de biblioteca con titulo Biblioteca
//2. crear un componente libro que tiene las siguientes propiedades
//{titulo: "La Odisea", autor:"Homer", anioPublicacion: 1864 }
//3. crear un array de libros dentro del componente Biblioteca
//y mostrar con map estos libros, ejemplo array [{titulo: "La Odisea", autor:"Homer", anioPublicacion: 1864 }, {titulo: "La Iliada", autor:"dante", anioPublicacion: 1890 }]
//4. mostrar los libros del autor x
