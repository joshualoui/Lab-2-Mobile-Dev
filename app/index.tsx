
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { Link, router, useRouter } from "expo-router";
import FruitList from '../components/fruitList';

export default function HomePage() {

  //define useRouter first
  const router = useRouter();

  //to router.Push as a function
  const routeToLab3 = () => {
    router.push("/lab_3");
  }

  const routeToLab4 = () => {
    router.push("/lab4");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App!</Text>

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("PRESSED!")}>
            <Text style={styles.alertText}>Click me</Text>
        </TouchableOpacity>

        <FruitList />

      <View style={styles.buttonView}>
        <Button title="Lab 3" onPress={routeToLab3}/>

        <Button title="Lab 4" onPress={routeToLab4}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  text: {
    fontSize: 15,
    color: "white",
    padding: 20,
  },
  alertText: {
    fontSize: 15,
    color: "yellow",
    padding: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonView: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    padding: 6,
    borderRadius: 8,
  },
});
