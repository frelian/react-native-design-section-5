import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const JustifyContentScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        justifyContent: 'space-evenly'
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});