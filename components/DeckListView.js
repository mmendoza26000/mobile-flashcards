import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TitleBar from './TitleBar';
import DeckItem from './DeckItem';

import { connect } from 'react-redux';

const Divider = () => (
    <View style={{
        height: 3,
        borderBottomWidth: 1,
        borderColor: 'gray'
    }}></View>
)

const DeckListView = ({decks}) => {
    return(
        <View style={styles.container}>

            <TitleBar text='DECKS'  />

            <ScrollView style={{flex:1, paddingLeft: 20, paddingRight: 20}}>

                {
                    decks.map(deck => (
                            <View>
                                <DeckItem key={deck.title} title={deck.title} numCards={deck.numCards} />
                                <Divider /> 
                            </View>
                        )
                    )
                }

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


function mapStateToProps(decks){
    
    return({
        decks: Object.keys(decks).map(key =>  ({
                        title: decks[key].title, 
                        numCards: decks[key].questions.length 
                    }))
    })

}

export default connect(mapStateToProps)(DeckListView);