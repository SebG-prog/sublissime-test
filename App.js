import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pokedex from './components/Pokedex';
import Sac from './components/Sac';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokedex"
        tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          activeTintColor: '#EE4542',
        }}>
        <Tab.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            tabBarLabel: 'Pokedex',
            tabBarIcon: () => {
              const icon = require('./assets/smartphone.png')
              return <Image source={icon} style={{ height: 25, width: 25 }} />
            }
          }} />
        <Tab.Screen
          name="Sac"
          component={Sac}
          options={{
            tabBarLabel: 'Sac',
            tabBarIcon: () => {
              const icon = require('./assets/backpack.png')
              return <Image source={icon} style={{ height: 25, width: 25 }} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App
