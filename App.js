import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/PhotoFeed';
import PhotoFeedScreen from './src/screens/PhotoFeedScreen';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
// navigation
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = 
createStackNavigator({
  Home: {screen: PhotoFeedScreen
        },});
let Navigation = createAppContainer(MainNavigator);

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Navigation />
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
