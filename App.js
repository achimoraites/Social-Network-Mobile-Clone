import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoFeedScreen from './src/screens/PhotoFeedScreen';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
// navigation
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

const tabBarOptions = {
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    marginTop: 24,
    backgroundColor: 'blue'
  },
};

const screens = {
  Photos: {screen: PhotoFeedScreen
        },
      };
const MainNavigator = 
createMaterialTopTabNavigator(screens, tabBarOptions);
let Navigation = createAppContainer(MainNavigator);

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Navigation  />
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
