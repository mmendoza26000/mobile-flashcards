import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import DetailDeckView from './components/DetailDeckView';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { decks } from './reducers/decks';


const store = createStore(
  decks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          
          <Stack />
          
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

