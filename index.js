/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './Main';
import {name as appName} from './app.json';
import Verduras from './src/components/verduras/Verduras';
import Estacionamiento from './src/components/estacionamiento/Estacionamiento';
import Calculadora from './src/components/calculadora/Calculadora';

AppRegistry.registerComponent(appName, () => Calculadora);
