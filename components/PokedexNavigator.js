import React from 'react'
import Pokedex from './Pokedex'
import PokemonInfo from './PokemonInfo'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PokedexNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="More" component={PokemonInfo} />
    </Stack.Navigator>
  );
}

export default PokedexNavigator
