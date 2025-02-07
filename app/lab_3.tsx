import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import Increment from '../components/increment';
import Decrement from '../components/decrement';


export default function Lab3() {

    const [count, setCount] = useState<number>(0); 

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Lab 3</Text>
        </View>

        <View>
            <Text style={styles.text}>Value: {count}</Text>
            <View>
                <Increment value={count} setValue={setCount}/>
                <Decrement count={count} setCount={setCount}/>
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