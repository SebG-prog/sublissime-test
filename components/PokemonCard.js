import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import Axios from 'axios'

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState([])

  const getPokemonDetails = () => {
    Axios.get(pokemon.url).then(res => {
      setPokemonDetails(res.data)
    })
  }

  useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <View style={{borderColor:'black', borderWidth: 1, borderRadius: 4,alignItems: 'center',
    justifyContent: 'space-evenly', padding: 4, width: 100, height: 100, margin: 2}}>
      <Text style={{fontWeight: "bold"}}>{pokemon.name}</Text>
      {pokemonDetails.length !== 0 && <Image style={{width: 70,height: 70}} source={pokemonDetails.sprites.front_default} /> }
    </View>
  )
}

export default PokemonCard