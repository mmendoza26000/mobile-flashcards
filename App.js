import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Root from './components/Root';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { decks } from './reducers/decks';


// const store = createStore(
//   decks,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  decks,
  applyMiddleware(thunkMiddleware)
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}



