import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const NueveScreen = () => {
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        top: 100,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        left: 100
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
});