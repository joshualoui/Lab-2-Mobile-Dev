
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { Link, router, useRouter } from "expo-router";
import FruitList from '../components/fruitList';

import CountUp from "../components/increment";
import Increment from "../components/increment";
import Lab3 from "./lab3";

export default function HomePage() {

  //define useRouter first
  const router = useRouter();

  //to router.Push as a function
  const routeToLab3 = () => {
    router.push("/lab_3");
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to my App!</Text>

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("PRESSED!")}>
            <Text style={styles.alertText}>Click me</Text>
        </TouchableOpacity>

        <FruitList />

        <Button title="Lab 3" onPress={routeToLab3}/>

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
    fontSize: 50,
    fontWeight: "bold",
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
});
