import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native'
import CalcButton from './CalcButton';

function Display({children}) {
    const [currentValue, setCurrentValue] = useState('0');

    return (
        <TextInput placeholder='0'
        onChangeText= {text => setCurrentValue(text)}
        />
    );
}

const styles = StyleSheet.create({
    
})

export default Display;