import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ApiCallComponent = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/posts/1.";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data ? (
        <View>
          <Text>Title: {data.title}</Text>
          <Text>UserID: {data.userId}</Text>
          <Text>ID: {data.id}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ApiCallComponent;
