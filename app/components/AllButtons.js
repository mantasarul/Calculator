import React from 'react';
import { StyleSheet, View, } from 'react-native'
import CalcButton from './CalcButton';

function AllButtons(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <CalcButton title='C' />
                    <CalcButton title='DEL' />
                    <CalcButton title='%' />
                </View>

                <View style={styles.row}>
                    <CalcButton title='sin' />
                    <CalcButton title='cos' />
                    <CalcButton title='tan' />
                    <CalcButton title='/' />
                </View>

                <View style={styles.row}>
                    <CalcButton title='7' />
                    <CalcButton title='8' />
                    <CalcButton title='9' />
                    <CalcButton title='*' />
                </View>

                <View style={styles.row}>
                    <CalcButton title='4' />
                    <CalcButton title='5' />
                    <CalcButton title='6' />
                    <CalcButton title='-' />
                </View>

                <View style={styles.row}>
                    <CalcButton title='1' />
                    <CalcButton title='2' />
                    <CalcButton title='3' />
                    <CalcButton title='+' />
                </View>

                <View style={styles.row}>
                    <CalcButton title='0' />
                    <CalcButton title='.' />
                    <CalcButton title='=' />
                </View>

            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    operator: {
        backgroundColor: 'tomato',
    },
})
export default AllButtons;