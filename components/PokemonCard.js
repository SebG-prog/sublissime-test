import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import Axios from 'axios'

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Pokedex" component={Pokedex} />
//       <Stack.Screen name="Sac" component={Sac} />
//     </Stack.Navigator>
//   );
// }

const PokemonCard = ({ pokemon, navigation }) => {
  console.log('card', navigation)
  const [pokemonDetails, setPokemonDetails] = useState([])

  const getPokemonDetails = () => {
    Axios.get(pokemon.url).then(res => {
      setPokemonDetails(res.data)
    })
  }

  const getPokemon = (pokemonId) => {
    console.log(pokemonId)
    navigation.navigate("More", {pokemonId: pokemonId})
  }
  useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <TouchableHighlight onPress={() => getPokemon(pokemonDetails)} style={{
      borderColor: 'black', borderWidth: 1, borderRadius: 4, alignItems: 'center',
      justifyContent: 'space-evenly', padding: 4, width: 100, height: 100, margin: 2
    }}>
      <View>
        <Text style={{ fontWeight: "bold" }}>{pokemon.name}</Text>
        {pokemonDetails.length !== 0 && 
          <Image style={{ width: 70, height: 70 }} source={{ uri: pokemonDetails.sprites.front_default }} />
        }
      </View>
    </TouchableHighlight>
  )
}

export default PokemonCard