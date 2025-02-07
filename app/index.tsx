import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FruitList from "../components/fruitList";

import CountUp from "../components/increment";
import Increment from "../components/increment";
import Lab3 from "./lab3";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my App!</Text>

      {/* <TouchableOpacity style={styles.button} onPress={() => Alert.alert("PRESSED!")}>
            <Text style={styles.alertText}>Click me</Text>
        </TouchableOpacity>

        <FruitList /> */}

      <Lab3 />
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
