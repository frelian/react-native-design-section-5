import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexWrapScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja3 }>Caja 4</Text>
            <Text style={ styles.caja3 }>Caja 5</Text>
            <Text style={ styles.caja3 }>Caja 6</Text>
            <Text style={ styles.caja3 }>Caja 7</Text>
            <Text style={ styles.caja3 }>Caja 8</Text>
            <Text style={ styles.caja3 }>Caja 9</Text>
            <Text style={ styles.caja3 }>Caja 10</Text>
            <Text style={ styles.caja3 }>Caja 11</Text>
            <Text style={ styles.caja3 }>Caja 12</Text>
            <Text style={ styles.caja3 }>Caja 13</Text>
            <Text style={ styles.caja3 }>Caja 14</Text>
            <Text style={ styles.caja3 }>Caja 15</Text>
            <Text style={ styles.caja3 }>Caja 16</Text>
            <Text style={ styles.caja3 }>Caja 17</Text>
            <Text style={ styles.caja3 }>Caja 18</Text>
            <Text style={ styles.caja3 }>Caja 19</Text>
            <Text style={ styles.caja3 }>Caja 20</Text>
            <Text style={ styles.caja3 }>Caja 21</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }
});