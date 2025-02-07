import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Increment from "../components/increment";

const Lab3 = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <Text>Value: {count}</Text>
      <Increment value={count} setValue={setCount} />
    </View>
  );
};

export default Lab3;
