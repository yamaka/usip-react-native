/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Main from './Main';
// import Verduras from './src/components/verduras/Verduras';
// import Estacionamiento from './src/components/estacionamiento/Estacionamiento';
import Calculadora from './src/components/calculadora/Calculadora';

AppRegistry.registerComponent(appName, () => Calculadora);
