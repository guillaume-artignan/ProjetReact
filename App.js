import React, { Component} from 'react';
import { Text, View,Image, Button, TextInput,StyleSheet, ScrollView, ImageBackground } from 'react-native';

import mytweets from './constants/tweets'

const styles = StyleSheet.create({
  app : {
    backgroundColor : "lightgray"
  },
  banner : {
    paddingTop: 20,
    borderBottomColor : "black",
    
    borderBottomWidth : 1,
    textAlign : "center"
    
  },
  titre : {
    fontSize:12,
    textAlign : "center"
  },
  text : {
    lineHeight:18,
    width : "75%",
    textAlign : "center",
    textAlignVertical:"center"
  },
  container: {
    
    borderBottomWidth : 1,
    padding : "5%"
    
  },
  item : {
    borderColor : 'black',
    borderWidth : 1,
    height : 40,
    backgroundColor : "white",
    marginBottom : 5,
    flexDirection :"row",
    borderRadius : 10,
    
  },
  jeux : {
    padding : "5%"
  },
  jeu : {
    borderColor : 'black',
    borderWidth : 1,
    flex : 1,
    flexDirection : "row",
    marginBottom : 10,
    backgroundColor : "white",
    borderRadius : 10
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  image : {
    width : "25%",
    height : "100%"
    

  }
});

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.banner}>
        <Text style={styles.titre}>Cherche en Famille</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image source={{ uri: 'asset:/game2.png' }} style={styles.image}></Image>
          <Text style={styles.text}>Créer un jeu</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.image}></View>
          <Text style={styles.text}>Rejoindre un jeu comme créateur</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.image}></View>
          <Text style={styles.text}>Rejoindre un jeu comme animateur</Text>
        </View>
      </View>
      <ScrollView style={styles.jeux}>
        <View style={styles.jeu}>
          <View style={styles.image}></View>
          <View>
            <Text>Randonnées</Text>
            <Text>ID : 1XDN48V</Text>
            <Text>Mdp : 1224</Text>
          </View>
        </View>
        <View style={styles.jeu}>
          <View style={styles.image}></View>
          <View>
            <Text>Randonnées</Text>
            <Text>ID : 1XDN48V</Text>
            <Text>Mdp : 1224</Text>
          </View>
        </View>
        <View style={styles.jeu}>
          <View style={styles.image}></View>
          <View>
            <Text>Randonnées</Text>
            <Text>ID : 1XDN48V</Text>
            <Text>Mdp : 1224</Text>
          </View>
        </View>
        <View style={styles.jeu}>
          <View style={styles.image}></View>
          <View>
            <Text>Randonnées</Text>
            <Text>ID : 1XDN48V</Text>
            <Text>Mdp : 1224</Text>
          </View>
        </View>
        <View style={styles.jeu}>
          <View style={styles.image}></View>
          <View>
            <Text>Randonnées</Text>
            <Text>ID : 1XDN48V</Text>
            <Text>Mdp : 1224</Text>
          </View>
        </View>
        <View style={styles.jeu}>
          <View style={styles.image}></View>
          <View>
            <Text>Randonnées</Text>
            <Text>ID : 1XDN48V</Text>
            <Text>Mdp : 1224</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


