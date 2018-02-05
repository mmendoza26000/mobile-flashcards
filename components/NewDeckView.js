import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AppBar from './AppBar';
import DeckItem from './DeckItem';
import Button from './Button';
import { addDeck } from '../actions';

import { connect } from 'react-redux';

class NewDeckView extends Component {

    state = {
        newDeck: ''
    }

    changeText = (inputText) => {
        this.setState({
            newDeck: inputText
        })
    }

    render(){
        const { newDeck } = this.state;
        const { addDeck, navigation } = this.props;
        
        return(
            <View behavior='height' style={styles.container}>

 
                    <Text style={styles.text} >What is the title</Text>
                    <Text style={styles.text} >of your new deck?</Text>


                <View style={styles.innerContainer}>
                    <TextInput
                        placeholder='Type the deck name (required)'
                        style={styles.input}
                        value={newDeck}
                        onChangeText={this.changeText}
                    />
                </View>


                    <Button 
                        disabled={ !newDeck.length>0 }
                        label='Create Deck' 
                        textColor='white' 
                        bgColor='black' 
                        onPress={() => {
                            addDeck(newDeck);
                            navigation.navigate(
                                'DetailDeckView',
                                { 
                                    deckName: newDeck,
                                    title: newDeck
                                }
                            )
                        }}
                        />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    input: {
        width: 250,
        height: 44,
        borderWidth: 1,
        margin: 50,
        borderWidth: 1,
        borderRadius: 8
    }

})


function mapStateToProps(state){
    return { }
}

function mapDispatchToProps(dispatch){
    return {
        addDeck: (newDeck) => dispatch(addDeck(newDeck))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);