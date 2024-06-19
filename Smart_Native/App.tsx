import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { RotasStack } from './src/rotas/RotasStack'


export default function App() {

  return (
    <View style={styles.conteiner}>
      <StatusBar barStyle='light-content' />
      <RotasStack />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1
  }
});

