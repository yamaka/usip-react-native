/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

console.log('ecmascript!!');
//variables

//var mivariable = "Elena";
//var mivariable = "Carla";
let mivariable = 'Elena';
mivariable = 'Carla';
console.log(mivariable);

//constantes
const pi = 3.1416;
console.log(pi);

const nombre = 'Juan';
const apellido = 'Perez';
//impirmir el saludo
console.log('Hola mi nombre es: ' + nombre + ' y mi apellido es : ' + apellido);
//template literals
console.log(`Hola mi nombre es: ${nombre} y mi apellido es: ${apellido}`);

//arrow funcitons(funciones flecha)
function hola() {
  console.log('Hola USIP');
}
hola();
//funciones flecha
const holaFlecha = () => {
  console.log('Hola soy una funciona flecha');
};
//cuando es una solo linea no es neceario las llaves
const holaFlecha2 = () => console.log('hola soy la flecha 2');
holaFlecha();
holaFlecha2();
//spread operators (operador de propagacion) en Arrays y Objectos
const pares = [2, 4, 6];
const impares = [1, 3, 5];
//unir pares e impares [2,4,6,1,3,5]
const union = [];
for (let i = 0; i < pares.length + impares.length; i++) {
  if (i < 3) {
    union.push(pares[i]);
  } else {
    union.push(impares[i - 3]);
  }
}
console.log(union);
//spread operator en arrays
const union2 = [...pares, ...impares];
console.log(union2);
//spread operator en objetos
const usuario = {
  email: 'pablo@gmail.com',
  userName: 'pablin',
  cursos: [
    {
      nombreCurso: 'React Native',
      docente: 'Ruddy C',
      Horario: '20:00 - 22:00',
    },
    {
      nombreCurso: 'Android',
      docente: 'Ruddy C',
      Horario: '18:00 - 20:00',
    },
  ],
};
const persona = {
  ci: '2662345LP',
  edad: 25,
  nombre: 'Pablo',
  apellido: 'Escobar',
};

const usuarioPersona = {
  ...usuario,
  ...persona,
};

console.log(usuarioPersona);

//destructuring destructuracion de objetos
//imprimir el usuario, email y su primer curso y el docente
console.log(
  usuario.userName,
  usuario.email,
  usuario.cursos[0].nombreCurso,
  usuario.cursos[0].docente,
);
const {userName, email, cursos} = usuario;
const {nombreCurso, docente} = cursos[0];
console.log(userName, email, nombreCurso, docente);

//clases
class Automovil {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  imprimir() {
    console.log(this.marca, this.modelo, this.color);
  }
}

const auto1 = new Automovil('toyota', 2020, 'rojo');
auto1.imprimir();

//async await
//simulando una llamado al servidor
const traerUsuario = async () => {
  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(usuarioPersona), 5000);
  });

  const usuarioTraido = await miPromesa;
  console.log(usuarioTraido);
};
//trayendo usuario del servidor
console.log('trayendo usuario del servidor');
traerUsuario();

//tarea opcional
//1. crear una clase con sus propiedades y metodos y crear una instancia de esta para imprimir sus propiedades
//2. se tiene el siguieente array [5,6,2,8] ordenar ascendentemete haciendo uso de las funciones flechas
//se tiene el siguieente array [5,6,2,8] ordenar descendentemente haciendo uso de las funciones flechas

//sugerencias para el segundo ejercicio crear una funcion de ordenamiento
//hacer uso de for o map metodos burbuja etc.
//const ordenar = () => {
// logica de ordenamiento
//   return ...
//}
//ordenar([5,6,2,8])
//[2,5,6,8]
//[8,6,5,2]

//solucion practica
//1.
class Celular {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  mostarCelular() {
    console.log(` Ceular de marca : ${this.marca} y modelo ${this.modelo}`);
  }
}

const celular1 = new Celular('Samsung', 'Galaxy S20');
celular1.mostarCelular();
//2.
//usando for
//burbuja
const ordenar = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[i]) {
        const aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        //[ array[j], array[j + 1]] = [ array[j+1], arra[j]]
      }
    }
  }
  return array;
};

const arrayDesordenado = [5, 6, 2, 8];
console.log(`array desordenado ${arrayDesordenado}`);
console.log(`array ordenado ${ordenar(arrayDesordenado)}`);

//usando map
//burbuja
const ordernarMap = array => {
  const arrayOrdenadoFinal = [];
  const ordenado = array.map((elemento, index) => {
    for (let index = 0; index < array.length - 1; index++) {
      const element = array[index];
      if (elemento2 > elemento) {
        arrayOrdenadoFinal.push(elemento2);
        arrayOrdenadoFinal.push(elemento);
        return elemento;
      }
    }
  });
  return arrayOrdenadoFinal;
};
console.log(`ordernarMap: ${ordernarMap(arrayDesordenado)}`);
