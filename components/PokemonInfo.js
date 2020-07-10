import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const PokemonInfo = (props) => {
  const pokemon = props.route.params.pokemonId
  return (
    <View style={styles.global}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
        <Image style={styles.pokemonImage} source={{ uri: pokemon.sprites.front_default }} />
      </View>
      <View style={styles.detailsGlobal}>
        <View>
          <Text style={styles.detailsTitle}>Statistics</Text>
          {pokemon.stats.map((stat, index) => (
            <View key={index} style={styles.detailsContent}>
              <Text>{stat.stat.name}</Text>
              <Text style={styles.detailsContentValues}>{stat.base_stat}</Text>
            </View>
          ))}</View>
        <View>
          <Text style={styles.detailsTitle}>Abilities</Text>
          {pokemon.abilities.map((ability, index) => (
            <View key={index} style={styles.detailsContent}>
              <Text>{index + 1}</Text>
              <Text style={styles.detailsContentValues}>{ability.ability.name}</Text>
            </View>
          ))}</View>
      </View>
    </View>
  )
}

export default PokemonInfo

const styles = StyleSheet.create({
  global: {
    padding: 20
  },
  pokemonName: {
    textTransform: 'capitalize',
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold'
  },
  pokemonImage: {
    width: 200,
    height: 200
  },
  detailsGlobal: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  detailsTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: "bold",
    paddingVertical: 20
  },
  detailsContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3
  },
  detailsContentValues: {
    marginLeft: 25
  }
})