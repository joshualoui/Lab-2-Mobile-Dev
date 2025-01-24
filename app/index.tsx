import { Button, StyleSheet, Text, View } from "react-native";
import FruitsList from "../components/fruits";

  export default function App() {
    return (
      <View style={styles.container}>
        <Text>Our fruits list below</Text>
        <FruitsList />
      </View>


    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
