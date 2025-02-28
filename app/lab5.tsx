import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import CallAPI from '../components/callAPI';
import { Button } from 'react-native';

export default function Lab5() {
    const [toggle, setToggle] = React.useState(false); 

    return(
        <View style={[{ padding: 30 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[{ fontSize: 24 }]}>Lab 5</Text>
            <View style={[{marginLeft: 30, width: 100, backgroundColor: 'lightblue', borderRadius: 5 }]}>
                <Button
                    title={toggle ? "Hide" : "Reveal"}
                    onPress={() => setToggle(!toggle)}    
                />
            </View>
            </View>

            {toggle && <CallAPI />} 
        </View>
    )
}