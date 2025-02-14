import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import vacations from '../constants/vacationsDestinations';
import { useState } from 'react';

export default function Lab3() {

    const [vacationList, setVacationList] = useState(vacations.map(vacation => ({ ...vacation, selected: false })));

    const toggleCheck = (id: number) => {
        setVacationList(prevList =>
            prevList.map(vacation =>
                vacation.id === id ? { ...vacation, selected: !vacation.selected } : vacation
            )
        );
    }

    return(
    <View>
        <Text>Choose the destinations you would like a quote for!</Text>
        <FlatList
            data={vacationList}
            renderItem={({ item }) => (
                <View>
                    <Pressable onPress={() => toggleCheck(item.id) }>
                        <View style={{ borderWidth: 1, borderColor: 'black', padding: 10, margin: 5, backgroundColor: item.selected ? 'green' : 'red' }}>
                            <Text>{item.id}</Text>
                            <Text>{item.location}</Text>
                            <Text>{item.average_yearly_temperature}</Text>
                        </View>           
                    </Pressable>
                </View>
            )}
        />
    </View>
    )
 
}
