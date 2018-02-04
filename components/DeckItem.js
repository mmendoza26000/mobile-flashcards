import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default DeckItem = ({title, numCards}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.numCards}>
                {numCards} questions
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24
    },
    numCards: {
        fontSize: 18,
        color: 'gray'
    }
})