import React, {useEffect, useState, useRef} from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity,
   ImageBackground, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { Audio } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//
import HomeScreen from './HomeScreen';
import LevelOne from './LevelOne';
import Guide from './Guide';


const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Game" component={LevelOne} options={{ headerShown: false}} />
      <Stack.Screen name="Guide" component={Guide} options={{ headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>

  );


  
const styles = StyleSheet.create({

  container:{
  
    top:50,
    flex: 1
  },
 

 })
}
