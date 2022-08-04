import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
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
