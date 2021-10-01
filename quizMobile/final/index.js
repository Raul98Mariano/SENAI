import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style.js';

export default function App({ navigation }) {

  return (
    <View style={styles.container}>
      <Button></Button>
      <StatusBar style="auto" />
    </View>
  );


}