import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const CursosScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cursos Screen</Text>
      <Button
        title="Go to Curso"
        onPress={() =>
          navigation.navigate('DetalleCurso', {
            nombre: 'pablo',
            correo: 'pablin@gamil.com',
          })
        }
      />
    </View>
  );
};

export default CursosScreen;

const styles = StyleSheet.create({});
