import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style.js';

export default function App({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Qual o maior campeão da NBA?</Text>
      <Button onPress={ 
        () => {
          navigation.navigate('Final')
          } }
          style={styles.botao}
          title="Warriors e Flamengo"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('Final')
          } }
          style={styles.botao}
          title="Chicago Bulls"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('Final')
          } }
          style={styles.botao}
          title="Boston Celtics e Los Angeles Lakers"></Button>

      <Button onPress={ 
        () => {
          navigation.navigate('Final')
          } }
          style={styles.botao}
          title="Los Angeles Clippers e Sacramento Kings"></Button>

      <StatusBar style="auto" />
    </View>
  );


}