import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Increment from "../components/increment";
import Decrement from "../components/decrement";

const Lab3 = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <Text>Value: {count}</Text>
      <Increment value={count} setValue={setCount} />
      <Decrement count={count} setCount={setCount} />
    </View>
  );
};

export default Lab3;
