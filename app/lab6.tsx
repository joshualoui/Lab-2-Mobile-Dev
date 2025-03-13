
import { View , Text} from "react-native";
import { getUsers } from "../lib/supabase_crud";
import React, { useEffect, useState } from "react";

const CallAPI = () => {
    // const [data, setData] = useState<any|null>(null);

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUsers();
                setData(result);
                console.log("result:", result);
            } catch (error) {
                // console.error('Error fetching data:', error as any);
                console.log("Error fetching data:");
            }
        };

        fetchData();
    }, []);



    return (
        <View>
            <Text>People Data</Text>

            {data.map((d: any) => (
                <View key={d.id.toString()} style={{}}>
                    <Text>ID: {d.id}</Text>
                    <Text>Name: {d.name}</Text>
                    <Text>Email: {d.email}</Text>
                    <Text>Phone: {d.phone}</Text>
                </View>
            ))}
        </View>

        )
    };

    export default CallAPI;