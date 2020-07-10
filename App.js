import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Pokedex from './components/Pokedex';
import Sac from './components/Sac';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pokedex" component={Pokedex} />
        <Tab.Screen name="Sac" component={Sac} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App
