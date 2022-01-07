import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionAbsoluteScreen = () => {
    return (
        <View style={ styles.container } >

            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaVerde } />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        // justifyContent: 'center', // ubico verticalmente en el centro
        // alignItems: 'center', // ubico horizontalmente en el centro

        flex: 1,
        // width: 400,
        // height: 400,
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        //right: 5
        top: 0,
        right: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        //bottom: -300,
        //left: 295
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        //bottom: -300,
        //left: 295
        // position: 'absolute',
        // bottom: 0,
        // left: 0, // o right: 300

        /*
            Usando una propiedad de StyleSheet puedo hacer lo siguiente pero en 1 linea
                position: 'absolute',
                bottom: 0,
                top: 0,
                right: 0,
                left: 0

                pd: quitando width: 100, y height: 100,
        */
       ...StyleSheet.absoluteFillObject
    }
});
