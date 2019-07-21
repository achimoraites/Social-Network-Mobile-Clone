import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Screens
import PhotoFeedScreen from './src/screens/PhotoFeedScreen';
import ProfileScreen from './src/screens/ProfileScreen';
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
  showIcon: false ,
  showLabel: true,
  activeTintColor: '#FFF',
  labelStyle: {},
};

const screens = {
  Photos: {screen: PhotoFeedScreen},
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: ({focused, tintColor:color}) => (
        <Icon name="account" size={20} color={color} />
      )
   }
  }
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
