import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style.js';

export default function App({ navigation }) {

  return (
    <View style={styles.container}>
      <Button onPress={ 
        () => {
          navigation.navigate('QuestionOne')
          } } 
          
          style={styles.botao} 
          
          title="Clique para iniciar o quiz!"></Button>

      <StatusBar style="auto" />
    </View>
  );


}