import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
//react-navigation-libraries
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
//screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AvatarScreen from './src/screens/AvatarScreen';
import CursosScreen from './src/screens/CursosScreen';
import DetalleCursoScreen from './src/screens/DetalleCursoScreen';
import CarritoScreen from './src/screens/CarritoScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
//icons
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CursosStack = createNativeStackNavigator();
const CursosStackNavigator = () => {
  return (
    <CursosStack.Navigator>
      <CursosStack.Screen name="Cursos" component={CursosScreen} />
      <CursosStack.Screen name="DetalleCurso" component={DetalleCursoScreen} />
    </CursosStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cursos"
        options={{
          tabBarLabel: 'CURSOS',
          tabBarIcon: ({color, size}) => (
            <MaterialComunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={CursosStackNavigator}
      />
      <Tab.Screen
        name="Carrito"
        options={{
          tabBarLabel: 'CARRITO',
          tabBarIcon: ({color, size}) => (
            <MaterialComunityIcons name="cart" color={color} size={size} />
          ),
        }}
        component={CarritoScreen}
      />
      <Tab.Screen
        name="Usuario"
        options={{
          tabBarLabel: 'PERFIL',
          tabBarIcon: ({color, size}) => (
            <MaterialComunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerLabel: 'Cursos',
          drawerIcon: props => <MaterialComunityIcons name="home" {...props} />,
        }}
      />
      <Drawer.Screen
        name="Carrito"
        component={CarritoScreen}
        options={{
          drawerLabel: 'Cursos',
          drawerIcon: props => <MaterialComunityIcons name="cart" {...props} />,
        }}
      />
      <Drawer.Screen
        name="Usuario"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Usuario',
          drawerIcon: props => (
            <MaterialComunityIcons name="account" {...props} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();
const AuthSctackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <AuthSctackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
