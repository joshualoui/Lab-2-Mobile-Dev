import { getUsers } from "../lib/supabase_crud";
import { useEffect, useState } from "react";

const callAPI = () => {
    const [data, setData] = useState<any|null>(null);

    const fetchData = async () => {
        try 
        {
            const result = await getUsers();
            setData(result);
        } 
        catch (error) 
        {
           console.error('Error fetching data:', error);
        }
    };

    fetchData();

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