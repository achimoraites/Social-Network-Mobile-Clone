import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/PhotoFeed';
export default function App() {
  return (
    <View>
      <Header text="Photos" />
      <PhotoFeed />
    </View>
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
