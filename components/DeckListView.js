import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleBar from './TitleBar';

export default DeckListView = () => {
    return(
        <View style={styles.container}>

            <TitleBar text='DECKS' />

            <View style={{flex:1}}>
                <Text>Content</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'green'
    },

})
