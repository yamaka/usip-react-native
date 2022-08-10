import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ProfileScreen = ({route, navigation}) => {
  // const {nombre, correo} = route.params;
  // debugger;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <View style={{height: 60}} />
      {/* <Text>{`Nombre: ${nombre}`}</Text>
      <Text>{`Correo: ${correo}`}</Text> */}

      <Button
        title="Go to Avatar Screen"
        onPress={() => navigation.navigate('Avatar')}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
