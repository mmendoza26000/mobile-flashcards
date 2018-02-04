import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from './AppBar';

export default DetailDeckView = ({deckItem}) => {

    return(
        <View style={styles.container}>
            <AppBar title={deckItem.title} />
            <Text>DetailDeckView</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'green'
    },

})