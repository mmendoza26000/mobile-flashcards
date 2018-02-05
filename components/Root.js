import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import DeckListView from './DeckListView';
import DetailDeckView from './DetailDeckView';
import NewDeckView from './NewDeckView';
import AddQuestionView from './AddQuestionView';
import QuizView from './QuizView';

import { getDecks } from '../actions';


const Stack = StackNavigator({
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        title: 'DECKS',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    DetailDeckView: {
      screen: DetailDeckView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        title: 'New deck',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    AddQuestionView: {
      screen: AddQuestionView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    QuizView: {
      screen: QuizView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    }
  })

  

class Root extends Component {

    componentDidMount(){
        this.props.dispatch(getDecks())
    }

    render(){
        return(
            <View style={styles.container}>
                <Stack />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default connect()(Root);