import React, { useState, useEffect } from 'react'
import { View, Text, Image} from 'react-native'
import Axios from 'axios'

const PokemonCard = ({pokemon}) => {
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
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  )
}

export default PokemonCard