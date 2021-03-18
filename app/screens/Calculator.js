import React from 'react';
import { View, StyleSheet } from 'react-native';
import AllButtons from '../components/AllButtons';

function Calculator(props) {
    

    return (
        <View style={styles.container}>
            <View>
                
            </View>

            <View>
                <AllButtons />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    }
})

export default Calculator;