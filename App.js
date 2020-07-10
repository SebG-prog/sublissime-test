import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pokedex from './components/Pokedex';
import Sac from './components/Sac';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <Pokedex />
      <Sac />
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
