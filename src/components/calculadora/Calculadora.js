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

const Calculadora = () => {
  // los estados nos sirven para repintar cada vez que lo necesitemos ya sea por evento
  //o por algun otro handler
  const [display, setDisplay] = useState('');
  const [numeroA, setNumeroA] = useState('');
  const [numeroB, setNumeroB] = useState('');
  const [operacion, setOperacion] = useState('+');

  const definirNumero = numeroNuevo => {
    console.log('definirNumero');
    if (numeroA === '') {
      setNumeroA(numeroA + numeroNuevo);
      setDisplay(numeroA + numeroNuevo);
    } else {
      setNumeroB(numeroB + numeroNuevo);
      setDisplay(display + numeroNuevo);
    }
  };

  const definirOperacion = operacion => {
    setOperacion(operacion);
    setDisplay(numeroA + operacion);
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
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(1)}>
              <Text style={{color: 'white', fontSize: 24}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(2)}>
              <Text style={{color: 'white', fontSize: 24}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(3)}>
              <Text style={{color: 'white', fontSize: 24}}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(4)}>
              <Text style={{color: 'white', fontSize: 24}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(5)}>
              <Text style={{color: 'white', fontSize: 24}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(6)}>
              <Text style={{color: 'white', fontSize: 24}}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(7)}>
              <Text style={{color: 'white', fontSize: 24}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(8)}>
              <Text style={{color: 'white', fontSize: 24}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(9)}>
              <Text style={{color: 'white', fontSize: 24}}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => limpiar()}>
              <Text style={{color: 'white', fontSize: 24}}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => definirNumero(0)}>
              <Text style={{color: 'white', fontSize: 24}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonNumerico}
              onPress={() => calcular()}>
              <Text style={{color: 'white', fontSize: 24}}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* de las operaciones  */}
        <View>
          <TouchableOpacity
            style={styles.botonNumerico}
            onPress={() => definirOperacion('+')}>
            <Text style={{color: 'white', fontSize: 24}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botonNumerico}
            onPress={() => definirOperacion('-')}>
            <Text style={{color: 'white', fontSize: 24}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botonNumerico}
            onPress={() => definirOperacion('*')}>
            <Text style={{color: 'white', fontSize: 24}}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botonNumerico}
            onPress={() => definirOperacion('/')}>
            <Text style={{color: 'white', fontSize: 24}}>/</Text>
          </TouchableOpacity>
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
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  containerBotones: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botonNumerico: {
    height: 80,
    width: 60,
    color: 'blue',
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
});
//1. hacer el numero del display este a la izqueirda, intercambiar los botones numericos, por los botones de operacion
//2. tarea hacer que funcione la calculadora para mas de 1 digito
