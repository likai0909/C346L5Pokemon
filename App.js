import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const pokemonData = [
  {
    title: '⚡️ Electric',    color: '#FFDD57',
    data: [
      { name: 'Pikachu', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png' },
      { name: 'Voltorb', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_79-2x.png'},
    ],
  },
  {
    title: '🔥 Fire',    color: '#FA8072',
    data: [
      { name: 'Charmander', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_70-2x.png'},
      { name: 'Ponyta', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_77-2x.png' ,},
    ],
  },
];


const renderPokemon = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.pokemonName}>{item.name}</Text>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

function App() {  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button style={styles.button} title="Add Pokémon"/>
      <SectionList
          sections={pokemonData}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderPokemon}
          renderSectionHeader={({ section }) => (
              <View style={[styles.header, { backgroundColor: section.color }]}>                  <
                Text style={styles.headerText}>{section.title}</Text>
              </View>
          )}
      />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
  },

  header: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderWidth: 1,
  },

  pokemonName: {
    fontSize: 16,
    fontWeight: '500',
  },

  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
  },
});

export default App;
