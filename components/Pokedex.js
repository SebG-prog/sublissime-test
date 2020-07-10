import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Axios from 'axios'
import PokemonCard from './PokemonCard'



const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([])

  const getPokemonList = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=50').then(res => {
      console.log(res.data)
      setPokemonList(res.data.results)
    })
  }

  useEffect(() => {
    getPokemonList()
  }, [])
  return (
    <View>
      {pokemonList.map((pokemon, index) => {
        return <PokemonCard key={index} pokemon={pokemon}/>
      })}
    </View>
  )
}

export default Pokedex