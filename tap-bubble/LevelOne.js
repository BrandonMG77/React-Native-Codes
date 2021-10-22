import React, {useEffect, useState, useRef} from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity,
   ImageBackground, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { Audio } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function LevelOne({navigation}) {

  const [top, setTop] = useState()
  const [left, setLeft] = useState()
  const [width, setWidth] = useState(75)
  const [temp, setTemp] = useState()
  const[bubble, setBubble] = useState(require('./assets/bubble.jpg'))
  const image = { uri: "./assets/bubble.jpg" };
  const [time, setTime] = useState(1000)
  const [score, setScore] = useState(0)
  const [life, setLife] = useState(400)
  const [back, setBack] = useState('white')
  const [bubbleWidth, setBubbleWidth] = useState(100)
  const [level, setLevel] = useState('Easy')
  const [end, setEnd] = useState(100)
  const [endEvaluate, setEndEvaluate] = useState(false)
  const [happy, setHappy] = useState(false)
  const [chanceLife, setChanceLife] = useState(0)

  useEffect(() => {
    
    if(score == 10){
      setTime(700)
     
      setLevel('Medium')
    }
    if(score == 20){
      setTime(500)
      
      setLevel('Medium-Hard')
    }
    if(score == 30){
      setTime(400)
      
      setLevel('Hard')
    }
    if(score >= 50){
      setTime(300)
      setBack('#000000')
      setLevel('Insane')
    }
        
    const timer = setInterval(() => {
     
    
      
      setBubble(require('./assets/bubble.jpg'))
   
      if(score >= 50) { setBubble(require('./assets/evil.jpg'))}

      setWidth(75)
       setLeft(Math.trunc(Math.random() * 300) + 1)
        setTop(Math.trunc(Math.random() * 540) + 1)
        // Game Ends // ************************************************
        if(life <= 0) { 
          setEnd(0)
          setWidth(0)
          setEndEvaluate(true)
        
        }
     
    },time);
    
    return () => {
     clearInterval(timer)
     setLife(life - 1)
    
    };
               
  });






  const [sound, setSound] = React.useState();
 
  async function playSound() {

    if(score >= 50 ){
      setBubble(require('./assets/evilSad.jpg'))
      setWidth(0)
    setScore(score + 1)
    
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/tap.mp3')
    );
    setSound(sound);

    
    await sound.playAsync();

    } else {
     
      setBubble(require('./assets/bubbleDie.jpg'))
    setWidth(0)
    setScore(score + 1)
    
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/tap.mp3')
    );
    setSound(sound);

    
    
    await sound.playAsync();


    }
    

  }

useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={[styles.container, {backgroundColor:back}]}>
        
      <View style={[styles.return, {width: !endEvaluate ? 0 : 420}]}>
      <Text style={{fontSize:20, color:'red', marginLeft:4}}>You lose --- Score: {score}</Text>
        <Button title="Exit"  onPress={() => navigation.navigate('Home')}/>
      </View>

      <TouchableHighlight
      style={[styles.bubble, {left:left, top: top, width: width}]}
      onPress={playSound}
      >
        <Image style={[styles.image, {width:end}]}source={bubble}></Image>

      </TouchableHighlight>
      <View style={[styles.panel, {backgroundColor: '#d0d0d0'}]}>
        <Text style={{fontSize:20, color:'white', marginLeft:4}}>Your Score: {score}</Text>
        <Text style={{fontSize:20, color:'white', marginLeft:4}}>Lives: {!endEvaluate ? (Math.trunc((life)/40)) : 0}</Text>
        <Text style={{fontSize:20, color:'white', marginLeft:4}}>Level: {level}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
  
    top:50,
    flex: 1
  },
  bubble: {
    height:100,
    backgroundColor:100,

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height:50,
    
  },
  panel: {
    position: 'absolute',
    left: 20,
    top:630,
    width:200, 
  },
  return: {
   
    position: 'absolute',
    height:300,
    top:100,
    left:-15,
    justifyContent: 'center',
    alignItems:'center'
    
  }

 }); 
