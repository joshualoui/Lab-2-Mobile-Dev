import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function Lab4() {

    return (
        <View style={style.container}>
            <Text>Welcome to Lab 4</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
})