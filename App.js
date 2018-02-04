import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './components/DeckListView';
import DetailDeckView from './components/DetailDeckView';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { decks } from './reducers/decks';


const store = createStore(
  decks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DetailDeckView />
          {/* <DeckListView /> */}
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

