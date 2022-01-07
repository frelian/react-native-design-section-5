import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const SeisScreen = () => {
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
        backgroundColor: '#28425B',
    },
    cajaMorada: {
        flex: 3,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        flex: 3,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        flex: 6,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
});