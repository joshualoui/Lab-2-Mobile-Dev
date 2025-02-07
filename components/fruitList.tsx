import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from "react";

export function FruitList() {

  const fruits = ["apple", "banana", "mango"];


  return (
    <View style={styles.fruitsListContainer}>
        <Text style={styles.fruitsTitle}>Fruits List:</Text>

            {fruits.map((fruit, index) => 
            <Text style={styles.fruitsText} key={index}>{fruit}</Text>)}
    </View>
  );
}

export default FruitList;

const styles = StyleSheet.create({ 
  fruitsListContainer: {
    padding: 15,
  },
  fruitsText:{
    fontSize: 20,
    color: 'black',
  },
  fruitsTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  }
});