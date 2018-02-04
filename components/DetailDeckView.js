import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import DeckItem from './DeckItem';
import Button from './Button';

import { connect } from 'react-redux';

const DetailDeckView = ({deckItem}) => {

    return(
        <View style={styles.container}>
            <AppBar title={deckItem.title} />

            <View style={styles.innerContainer}>
                <DeckItem title={deckItem.title} numCards={deckItem.numCards} />
            </View>

            <View style={styles.innerContainer}>
                <Button label='Add Card' />
                <Button label='Start Quiz' textColor='white' bgColor='black' />

            </View>
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
    innerContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})


function mapStateToProps(decks){
    console.log('state', decks);
    return {
        deckItem: { title: decks['JavaScript'].title, numCards: decks['JavaScript'].questions.length }
    }
}

export default connect(mapStateToProps)(DetailDeckView);