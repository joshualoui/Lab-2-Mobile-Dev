import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const callAPI = () => {
    const [data, setData] = useState<any|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={{ marginTop: 10 }}>
            {data ? (
                <View>
                    <Text style={{ marginBottom: 20 }}>Title: {data.title}</Text>
                    <Text style={{ marginBottom: 20 }}>UserID: {data.userId}</Text>
                    <Text style={{ marginBottom: 20 }}>ID: {data.id}</Text>
                    <Text style={{ marginBottom: 20 }}>Body: {data.body}</Text>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
        );
    };

export default callAPI;