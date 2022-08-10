import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
const Comp1 = () => {
  useEffect(() => {
    alert('componentDidmount 1');

    return () => {
      alert('se desmonta el componente 1');
    };
  });
  return <Text>Componente 1!!!</Text>;
};

const Comp2 = () => {
  useEffect(() => {
    alert('componentDidmount 2');

    return () => {
      alert('se desmonta el componente 2');
    };
  });
  return <Text>Componente 2!!!</Text>;
};

//useEffect para los ciclos de vida del componente
const CiclosVida = () => {
  const [count, setCount] = useState(0);
  const [showComp1, setShowComp1] = useState(true);
  // componentDidmount
  // peticiones al inicio del componente
  //   useEffect(() => {
  //     setTimeout(() => {
  //       alert('componentDidmount');
  //     }, 2000);
  //     return () => {
  //       alert('desmonta el componente');
  //     };
  //   });
  //componentDipupdate
  //escuchar los cambios del estado
  useEffect(() => {
    if (count === 6) {
      setCount(0);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      {/* <Text>CiclosVida</Text>
      <Text>Contador:</Text>
      <Text>{count}</Text>
      <Button title="contar" onPress={() => setCount(count + 1)} /> */}
      {showComp1 ? <Comp1 /> : <Comp2 />}
      <Button
        title="cambiar componente"
        onPress={() => setShowComp1(!showComp1)}
      />
    </View>
  );
};

export default CiclosVida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
