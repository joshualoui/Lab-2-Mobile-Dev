import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { Link, router, useRouter } from "expo-router";
// import { DecrementButton } from '../components/DecrementButton';
// import { IncrementButton } from '../components/IncrementButton';


export default function Lab3() {

    const [value, setValue] = useState<number>(0); 

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Lab 3</Text>
        </View>

        <View>
            <Text style={styles.text}>Value: {value}</Text>
            <View>
                {/* <IncrementButton value={value} setValue={setValue}/>
                <DecrementButton value={value} setValue={setValue}/> */}
            </View>
        </View>
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize:50,
      fontWeight: 'bold',
      marginBottom: 60,
    },
    text:{
      fontSize: 20,
      color: 'black',
      padding: 10,
    },
  });   