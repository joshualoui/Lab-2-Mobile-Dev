import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, { useState } from "react";
import vacationDestinations from '../constants/vacationsDestinations'; //imports the file
import { VacationDestination } from '../constants/vacationsDestinations'; //imports the array

export default function Lab4() {

    //const to hold vacationsList and to setVacationsList
    const [vacationsList, setVacationsList] = useState<VacationDestination[]>(vacationDestinations);

    //const to know whether the checkbox is checked or not
    const [checked, setChecked] = useState<number>(1); 

    // const handleCheckBox = () => 
    // {
    //     if (checked == false)
    //     {
    //         <Text style={styles.box}></Text>
    //         setChecked(false);
    //     }
    //     else if (checked == true)
    //     {
    //         <Text>{"\u2705"}</Text>
    //         setChecked(true);
    //     }
    // }

    return (
        <View style={styles.container}>
            <View>
                <Text>Welcome to Lab 4</Text>
            </View>
                <FlatList
                data={vacationsList}
                renderItem={({item, index}) => 
                <View style={styles.listStyle}>
                    {/* Shows each location name */}
                    <Text>
                        {item.location + " "}
                        {"$" + item.price + " "}    
                        {item.average_yearly_temperature}
                    </Text>

                    {/* Pressable tag under each item rendered */}
                    <Pressable onPress={handleCheckBox}>
                        <Text>{"\u2705"}</Text>
                        <Text style={styles.box}></Text>
                        <input type="checkbox" value={checked} />
                    </Pressable>
                </View>
                }

                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    listStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    box: {
        width: 20,
        height: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 4,
    },
})