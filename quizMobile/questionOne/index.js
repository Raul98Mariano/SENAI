import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style.js';

export default function App({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Qual jogador inspirou o logotipo atual da NBA?</Text>
      <Button onPress={ 
        () => {
          navigation.navigate('QuestionTwo')
          } }
          style={styles.botao} title="Michael Jordan"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionTwo')
          } }
           style={styles.botao} title="Kobe Bryant"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionTwo')
          } }
           style={styles.botao} title="Jerry West"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionTwo')
          } }
           style={styles.botao} title="Ronaldinho"></Button>

      <StatusBar style="auto" />
    </View>
  );


}