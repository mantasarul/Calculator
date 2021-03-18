import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function CalcButton({title, onPress, style}) {
    return (
        
        <TouchableOpacity style={[styles.button, {...style}]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    button: {
        height: 80,
        minWidth: 80,
        borderRadius: 40,
        backgroundColor: '#9E9E9E', // Teal 500
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 5,

    },

    text: {
        fontSize: 25,

    },
})

export default CalcButton;