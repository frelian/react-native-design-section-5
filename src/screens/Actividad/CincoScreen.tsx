import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const CincoScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.cajaMorada }></Text>
            <Text style={ styles.cajaNaranja }></Text>
            <Text style={ styles.cajaAzul }></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#28425B',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    cajaMorada: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
});