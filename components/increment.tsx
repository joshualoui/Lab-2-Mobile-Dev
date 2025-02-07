import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

type CountUpProps = {
  value: number;
  setValue: (value: number) => void;
};

const Increment: React.FC<CountUpProps> = ({ value, setValue }) => {
  const increment = () => {
    setValue(value + 1);
  };

  return (
    <View>
      <TouchableOpacity onPress={increment}>
        <Text>Increment +</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Increment;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "white",
    padding: 20,
  },
});
