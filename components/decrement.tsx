import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';

type DecrementProps = {
    count: number;
    setCount: (count: number) => void;
}

const Decrement: React.FC<DecrementProps> = ({
    count,
    setCount,
}) => {
    const countDown = () => {
        setCount(count - 1);
    };

    return (
        <View>
            <TouchableOpacity onPress={countDown} style={{ backgroundColor: 'red', padding: 15, borderRadius: 5 }}>
                <Text style={{ color: 'white' }}>Decrement -</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Decrement;
