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
    <View style={{padding: 20}}>
        <Text style={{fontSize: 20, padding: 20, textAlign: 'center'}}>Choose the destinations you would like a quote for!</Text>
        <FlatList
            data={vacationList}
            renderItem={({ item }) => (
                <View>
                    <Pressable onPress={() => toggleCheck(item.id) }>
                        <View style={{ borderWidth: 1, borderColor: 'black', padding: 10, margin: 5, backgroundColor: item.selected ? 'lightgreen' : 'white' }}>
                            <Text>{item.location}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.average_yearly_temperature}</Text>
                            <Text>{item.selected ? '\u2705' : ''}</Text>
                        </View>           
                    </Pressable>
                </View>
            )}
        />
    </View>
    )
 
}
