import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Axios from 'axios'

import PokemonCard from './PokemonCard'

const Pokedex = ({ navigation }) => {
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
    <ScrollView>
      <Text style={styles.title} >Pokedex</Text>
      <View style={styles.pokedex}>
        {pokemonList.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} navigation={navigation} />
        })}
      </View>
    </ScrollView>
  )
}

export default Pokedex

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    padding: 20,
    borderWidth: 1,
    backgroundColor: '#31BDE2',
    marginBottom: 10
  },
  pokedex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
})