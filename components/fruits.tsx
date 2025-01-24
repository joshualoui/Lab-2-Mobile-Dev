import React from 'react';
import { Text, View } from 'react-native';



const fruits: string[] = ['Apple', 'Orange', 'Mango'];

export function FruitsList()
{
    return ( 
        <View>
            <Text>Here are some fruits you can pick:</Text>
            {fruits.map((fruit, index) => 
            <Text key={index}>{fruit}</Text>)}
        </View>
    );


}
export default FruitsList;