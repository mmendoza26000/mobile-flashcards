import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import DeckItem from './DeckItem';
import Button from './Button';

import { connect } from 'react-redux';

class DetailDeckView extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.title : 'Detail Deck View',
        }
      }

    render(){

        const { deckItem, navigation } = this.props;

        return(
            <View style={styles.container}>

                <View style={styles.innerContainer}>
                    <DeckItem title={deckItem.title} numCards={deckItem.numCards} />
                </View>

                <View style={styles.innerContainer}>
                    <Button 
                        label='Add Card'
                        onPress={() => {
                            navigation.navigate(
                                'AddQuestionView',
                                { 
                                    deckName: deckItem.title,
                                    title: `${deckItem.title}`
                                }
                            )
                        }}    
                    />
                    <Button 
                        label='Start Quiz' 
                        textColor='white' 
                        bgColor='black' 
                        onPress={() => {
                            navigation.navigate(
                                'QuizView',
                                { 
                                    deckName: deckItem.title,
                                    title: `${deckItem.title}`
                                }
                            )
                        }} 
                        />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    innerContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})


function mapStateToProps(decks, props){
    const deckName = props.navigation.state.params.deckName;
    return {
        deckItem: { 
            title: decks[deckName].title, 
            numCards: decks[deckName].questions.length 
        }
    }
}

export default connect(mapStateToProps)(DetailDeckView);