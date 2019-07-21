import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import PhotoFeed from '../components/PhotoFeed';

export default function PhotoFeedScreen() {

  return (
      <View>
        <Header text="Photos" />
        <PhotoFeed />
      </View>
  );
}

