import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import Axios from 'axios'

const PokemonCard = ({ pokemon, navigation }) => {
  const [pokemonDetails, setPokemonDetails] = useState([])

  const getPokemonDetails = () => {
    Axios.get(pokemon.url).then(res => {
      setPokemonDetails(res.data)
    })
  }

  const getPokemon = (pokemonId) => {
    navigation.navigate("More", { pokemonId: pokemonId })
  }
  useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <TouchableHighlight onPress={() => getPokemon(pokemonDetails)} style={styles.cards}>
      <View>
        <Text style={styles.cardTitle}>{pokemon.name}</Text>
        {pokemonDetails.length !== 0 &&
          <Image style={styles.cardImage} source={{ uri: pokemonDetails.sprites.front_default }} />
        }
      </View>
    </TouchableHighlight>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  cards: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 4,
    width: 100,
    height: 100,
    margin: 2
  },
  cardTitle: {
    alignSelf: 'center',
    fontWeight: "bold"
  },
  cardImage: {
    width: 70,
    height: 70
  }
})