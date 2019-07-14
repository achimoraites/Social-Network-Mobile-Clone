import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/PhotoFeed';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <View>
        <Header text="Photos" />
        <PhotoFeed />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
