import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style.js';

export default function App({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Quanto é 1+1 em inglês?</Text>
      <Button onPress={ 
        () => {
          navigation.navigate('QuestionFour')
          } }
          style={styles.botao}
          title="12 de maluco"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionFour')
          } }
          style={styles.botao}
          title="one more one"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionFour')
          } }
          style={styles.botao}
          title="Chapada dos Veadeiros"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionFour')
          } }
          style={styles.botao}
          title="2 em inglês"></Button>

      <StatusBar style="auto" />
    </View>
  );


}