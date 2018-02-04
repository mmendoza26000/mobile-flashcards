import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TitleBar from './TitleBar';
import DeckItem from './DeckItem';

const Divider = () => (
    <View style={{
        height: 3,
        borderBottomWidth: 1,
        borderColor: 'gray'
    }}></View>
)

export default DeckListView = () => {
    return(
        <View style={styles.container}>

            <TitleBar text='DECKS'  />

            <ScrollView style={{flex:1, paddingLeft: 20, paddingRight: 20}}>
                <DeckItem title='udacicards' numCards='3' />
                <Divider />
                <DeckItem title='new deck' numCards='0' />
                <Divider />
                <DeckItem title='New deck 2' numCards='0' />
                <Divider />
                <DeckItem title='fourth' numCards='0' />
                <Divider />
            </ScrollView>
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
