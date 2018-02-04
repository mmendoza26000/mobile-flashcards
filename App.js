import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './components/DeckListView';
import DetailDeckView from './components/DetailDeckView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DetailDeckView deckItem={{title: 'udacicards'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
