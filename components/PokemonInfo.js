import React from 'react'
import { Text, View, Image } from 'react-native'

const PokemonInfo = (props) => {
  const pokemon = props.route.params.pokemonId
  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Image style={{ width: 70, height: 70 }} source={{ uri: pokemon.sprites.front_default }} />
    </View>
  )
}

export default PokemonInfo