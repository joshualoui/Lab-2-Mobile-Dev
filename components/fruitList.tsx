import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from "react";

export function FruitList() {

  const fruits = ["apple", "banana", "mango"];


  return (
    <View>
        <Text>Fruits List:</Text>

            {fruits.map((fruit, index) => 
            <Text key={index}>{fruit}</Text>)}
    </View>
  );
}

export default FruitList;