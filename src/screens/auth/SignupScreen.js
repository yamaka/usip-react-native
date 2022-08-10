import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const SignupScreen = ({navigation}) => {
  const [signupForm, setSignupForm] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const [isValidForm, setIsValidForm] = useState(true);
  const handleTextChange = (value, formKey) => {
    setSignupForm({...signupForm, [formKey]: value});
  };
  const validateForm = () => {
    const {email, username, password, passwordConfirm} = signupForm;
    if (
      email &&
      username &&
      password &&
      passwordConfirm &&
      password === passwordConfirm
    ) {
      return true;
    }
    return false;
  };
  const registrar = () => {
    const {email, username, password, passwordConfirm} = signupForm;
    if (!validateForm()) {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);
    const params = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post('http://192.168.0.7:8082/api/auth/signup', params)
      .then(response => {
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('service signup error', error.message ?? error);
        alert('ups hubo un error contactarse con los administradores');
      });
  };
  const {email, username, password, passwordConfirm} = signupForm;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Regítrate</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={value => handleTextChange(value, 'email')}
        placeholder="Correo"
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={value => handleTextChange(value, 'username')}
        placeholder="Usuario"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={value => handleTextChange(value, 'password')}
        placeholder="Contrasena"
      />
      <TextInput
        style={styles.input}
        value={passwordConfirm}
        onChangeText={value => handleTextChange(value, 'passwordConfirm')}
        placeholder="Confirmar Contrasena"
      />
      {!isValidForm && (
        <Text style={{color: 'red'}}>
          {' '}
          El formulario esta incompleto o las contrasenas no coinciden.
        </Text>
      )}

      <View style={{marginVertical: 30, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#0000EE'}}>Atrás</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => registrar()}>
        <Text style={styles.textButton}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    height: 50,
    margin: 12,
    fontSize: 16,
  },
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
  },
});
