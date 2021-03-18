import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, TextInput, Button } from 'react-native';


function Test(props) {
    const [name, setName] = useState('')

    return (

        <View>
            <View>
                <TextInput />
            </View>

            <View style={styles.testButton}>
                <View style={styles.space}>
                    <Button title='1' color='#00BCD4' style={styles.testButton} />
                </View>
                <View style={styles.space}>
                    <Button title='2' color='#00BCD4' style={styles.testButton} />
                </View>
                <View style={styles.space}>
                    <Button title='3' color='#00BCD4' style={styles.testButton} />
                </View>
                <View style={styles.space}>
                    <Button title='4' color='#00BCD4' style={styles.testButton} />
                </View>
            </View>
        </View>

        /*
        <View style={styles.mainContainer}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{x}</Text>
            </View>
    
            <TouchableOpacity style={styles.conatiner} onPress={clickHandler}>
                <Text style={styles.text}>A</Text>
            </TouchableOpacity>
    
        </View>
        */
    );
}

const styles = StyleSheet.create({
    conatiner: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "tomato",
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 40,
        color: "#FFFFFF",
    },
    display: {
        flex: 1,
    },
    displayText: {
        fontSize: 50,
        color: '#CDDC39'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: '#009688'
    },
    testButton: {
        padding: 10,
        margin: 10,
    },
    space: {
        padding: 10,
        margin: 10,
    }
})

export default Test;