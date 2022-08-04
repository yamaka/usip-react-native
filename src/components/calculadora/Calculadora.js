//flebox
//botones
//props
//estados
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Boton from './Boton';

const Calculadora = () => {
  // los estados nos sirven para repintar cada vez que lo necesitemos ya sea por evento
  //o por algun otro handler
  const [display, setDisplay] = useState('');
  const [numeroA, setNumeroA] = useState('');
  const [numeroB, setNumeroB] = useState('');
  const [operacion, setOperacion] = useState('');

  const definirNumero = numeroNuevo => {
    if (operacion === '') {
      setNumeroA(numeroA + numeroNuevo);
      setDisplay(numeroA + numeroNuevo);
    } else {
      setNumeroB(numeroB + numeroNuevo);
      setDisplay(display + numeroNuevo);
    }
  };

  const definirOperacion = operacion => {
    setOperacion(operacion);
    setDisplay(display + operacion);
  };

  const calcular = () => {
    switch (operacion) {
      case '+':
        setDisplay(parseInt(numeroA) + parseInt(numeroB));
        break;
      case '-':
        setDisplay(parseInt(numeroA) - parseInt(numeroB));
        break;
      case '*':
        setDisplay(parseInt(numeroA) * parseInt(numeroB));
        break;
      case '/':
        setDisplay(parseInt(numeroA) / parseInt(numeroB));
        break;
    }
  };

  const limpiar = () => {
    setNumeroA('');
    setNumeroB('');
    setDisplay('');
    setOperacion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora</Text>
      {/* display */}
      <View style={styles.input}>
        <Text style={{fontSize: 24}}>{display}</Text>
      </View>
      {/* display */}
      <View style={styles.containerBotones}>
        {/* contenedor  de los botones numericos*/}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Boton text={1} onPress={() => definirNumero(1)} />
            <Boton text={2} onPress={() => definirNumero(2)} />
            <Boton text={3} onPress={() => definirNumero(3)} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Boton text={4} onPress={() => definirNumero(4)} />
            <Boton text={5} onPress={() => definirNumero(5)} />
            <Boton text={6} onPress={() => definirNumero(6)} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Boton text={7} onPress={() => definirNumero(7)} />
            <Boton text={8} onPress={() => definirNumero(8)} />
            <Boton text={9} onPress={() => definirNumero(9)} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Boton text={'AC'} onPress={() => limpiar()} />
            <Boton text={0} onPress={() => definirNumero(0)} />
            <Boton text={'='} onPress={() => calcular()} />
          </View>
        </View>
        {/* de las operaciones  */}
        <View>
          <Boton text={'+'} onPress={() => definirOperacion('+')} />
          <Boton text={'-'} onPress={() => definirOperacion('-')} />
          <Boton text={'*'} onPress={() => definirOperacion('*')} />
          <Boton text={'/'} onPress={() => definirOperacion('/')} />
        </View>
      </View>
    </View>
  );
};

export default Calculadora;

//flexbox
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    margin: 2,
    fontSize: 24,
  },
  input: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  containerBotones: {
    marginTop: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
});
//1. hacer el numero del display este a la izqueirda, intercambiar los botones numericos, por los botones de operacion
//2. tarea hacer que funcione la calculadora para mas de 1 digito
