import ApiCallComponent from "../components/callAPI";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Lab5() {
  const [Toggle, setToggle] = React.useState(false);
  const onClick = () => {
    setToggle(!Toggle);
  };
  return (
    <View>
      <Text>Lab 5</Text>
      <View>
        <Button title="Click me" onPress={onClick} />
        {Toggle ? <ApiCallComponent /> : <Text>Hello</Text>}
      </View>
    </View>
  );
}
