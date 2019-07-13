import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import PhotoSection from './components/PhotoSection';
export default function App() {
  return (
    <View>
      <Header text="Photos" />
      <PhotoSection />
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
