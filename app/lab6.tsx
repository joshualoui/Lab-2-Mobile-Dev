
import { View , Text} from "react-native";
import { getUsers } from "../lib/supabase_crud";
import React, { useEffect, useState } from "react";

const CallAPI = () => {
    // const [data, setData] = useState<any|null>(null);

    const [data, setData] = useState<any[]>([]);

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
            <Text>Hello there</Text>

            <View>
                {data ? (
                    <>
                        <Text>{data.id}</Text>
                        <Text>{data.name}</Text>
                        <Text>{data.email}</Text>
                        <Text>{data.phone}</Text>
                    </>
                ) : (
                    <Text>loading...</Text>
                )}
            </View>

r
            {/* {data && data.map((d: any) => (
                <View key={d.id.toString()} style={{}}>
                    <Text>{d.id}</Text>
                    <Text>{d.name}</Text>
                    <Text>{d.email}</Text>
                    <Text>{d.phone}</Text>
                </View>
            ))} */}
        </View>

        )
    };

    export default CallAPI;