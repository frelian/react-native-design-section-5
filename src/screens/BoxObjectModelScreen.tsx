import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title } >Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 30,
        //width: 200,
        borderWidth: 10,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginHorizontal: 10,
    }
});