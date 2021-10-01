import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style.js';

export default function App({ navigation }) {

  return (
    <View style={styles.container}>
      <Image></Image>
      <Text>Quantos títulos possui a franquia da Califórnia, Golden State Warriors?</Text>
      <Button onPress={ 
        () => {
          navigation.navigate('QuestionThree')
          } }
          style={styles.botao} 
          title="17"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionThree')
          } }
          style={styles.botao}
          title="235"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionThree')
          } }
          style={styles.botao}
          title="Arroz"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('QuestionThree')
          } }
          style={styles.botao}
          title="6"></Button>

      <StatusBar style="auto" />
    </View>
  );


}