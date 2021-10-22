import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// 
import Welcome from './Welcome';
import Diceone from './Diceone';
import DiceTwo from './DiceTwo';
import DiceThree from './DiceThree';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="1 2 3 Roll Dice!" component={Welcome} />
        <Stack.Screen name="One Die" component={Diceone} />
        <Stack.Screen name="Two Dice" component={DiceTwo} />
        <Stack.Screen name="Three Dice" component={DiceThree} />
      </Stack.Navigator>
    </NavigationContainer>
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
