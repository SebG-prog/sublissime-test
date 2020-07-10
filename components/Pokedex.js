import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Axios from 'axios'
import PokemonCard from './PokemonCard'



const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([])

  const getPokemonList = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=50').then(res => {
      setPokemonList(res.data.results)
    })
  }

  useEffect(() => {
    getPokemonList()
  }, [])
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 20, padding: 20, textDecorationLine:'underline'}}>Pokedex</Text>
      <View style={{
        flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'center'
      }}>
        {pokemonList.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />
        })}
      </View>
    </View>
  )
}

export default Pokedex