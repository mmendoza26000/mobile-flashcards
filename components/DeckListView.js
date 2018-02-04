import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TitleBar from './TitleBar';
import DeckItem from './DeckItem';
import Button from './Button';

import { connect } from 'react-redux';

const Divider = () => (
    <View style={{
        height: 3,
        borderBottomWidth: 1,
        borderColor: 'gray'
    }}></View>
)

const DeckListView = ({decks, navigation}) => {
    return(
        <View style={styles.container}>

            {/* <TitleBar text='DECKS'  /> */}
            <View style={{ alignItems: 'center'}}>
                <Button 
                label='Add Deck'
                onPress={()=>{ navigation.navigate(
                    'NewDeckView'
                ) }}    
            />
            </View>
            <ScrollView style={{flex:1, paddingLeft: 20, paddingRight: 20}}>

                {
                    decks.map(deck => (
                            <TouchableOpacity 
                                key={deck.title}
                                onPress={()=>{ navigation.navigate(
                                    'DetailDeckView',
                                    { 
                                        deckName: deck.title,
                                        title: deck.title
                                    }
                                ) }}
                            >
                                <DeckItem key={deck.title} title={deck.title} numCards={deck.numCards} />
                                <Divider /> 
                            </TouchableOpacity>
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
        justifyContent: 'space-around'
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