import React, {useEffect, useState, useRef} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Animated } from 'react-native';
import * as Random from 'expo-random';
import {
    AdMobBanner,
    AdMobInterstitial
  } from 'expo-ads-admob';
  import { LinearGradient } from 'expo-linear-gradient';
 

// Ads Interstitial
const interstitial = async () => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-6884846122457846/3404526062');

     try {
         await AdMobInterstitial.requestAdAsync();
         await AdMobInterstitial.showAdAsync();
         
     } catch (error) {
            
        console.log(error);
    }
}




function Diceone({navigation}) {

    
    const [number, setNumber] = useState(Math.trunc(Math.random() * 6) + 1)
    const [number2, setNumber2] = useState(Math.trunc(Math.random() * 6) + 1)

    const [widthDis, setWidthDis] = useState(require('./assets/1.png'))
    const [widthDis2, setWidthDis2] = useState(require('./assets/1.png'))

    const [fake, setFake] = useState(require('./assets/1.png'))
    const [test, setTest] = useState(0)
    const [condition, setCondition] = useState(true)
    const [winner, setWinner] = useState('')

    useEffect(() => {
        
        const timer = setInterval(() => {
          setTest(test+1);
   
        }, 1000);
        if (test == 1){
            setFake(require('./assets/move1.png'))
        }
        if (test == 2){
            setFake(require('./assets/move2.png'))
        }
        if (test == 3){
            setFake(require('./assets/move3.png'))
        }
        if (test == 4){
            setFake(require('./assets/move4.png'))
        }
        if (test == 5){
            setFake(require('./assets/move5.png'))
        }
        if (test == 6) {
            setFake(require('./assets/move6.png'))
           
        }
        if (test == 7) {
            setFake(require('./assets/move7.png'))
           
        }
        if (test == 8) {
            setFake(require('./assets/move8.png'))
            setTest(0)
        }
      
        return () => clearInterval(timer);
                   // clearing interval      
      });
   


    const handleNumber = () => {
        setCondition(false)
        const timer = setTimeout(() => {
            setCondition(true)
            setWinner(number)
          }, 4000);
          
        const temp = Math.trunc(Math.random() * 6) + 1;
        setNumber(temp)
    
       
        switch (number) {
            case 1:
                setWidthDis(require('./assets/1.png'))
                
                break;
            case 2:
                setWidthDis(require('./assets/2.png'))
                
                break;
                case 3:
                    setWidthDis(require('./assets/3.png'))
                  
                    break;
                    case 4:
                        setWidthDis(require('./assets/4.png'))
                        
                        break;
                        case 5:
                            setWidthDis(require('./assets/5.png'))
                          
                            break;
                            case 6:
                                setWidthDis(require('./assets/6.png'))
                               
                                break;
            default:
                break;
        }
    }
 

    useEffect(() => {
        interstitial();
    }, []);
    
  return (
    <View style={styles.container}>
           <LinearGradient
        // Background Linear Gradient
        colors={['#df7277', '#d16267', '#b8494e']}
        style={styles.background}
      />
  

        <Text style={styles.text}>Tap the die to play</Text>

        <Text style={styles.winner}>Your number: {winner} </Text>

        

        <TouchableOpacity onPress={()=> {handleNumber()}}>
        <Image style={styles.diceOriginal} source={condition ? widthDis: fake}></Image>
        </TouchableOpacity>
       
        <AdMobBanner
        style={styles.adContainer}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-6884846122457846/4651224782" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
                    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#df7277',
      alignItems: 'center',
      justifyContent: 'center'
  },
  diceOriginal: {
     width: 150,
     height:150
  },
  text:{
      position:'absolute',
      top: 20,
      fontSize: 20,
      backgroundColor: '#c8666b',
      color: 'white'
  }, 
  winner: {
    position:'absolute',
    top: 200,
    fontSize: 20,
    backgroundColor: '#c8666b',
    color: 'white'
  },
  adContainer:{
    top:650,
    position: 'absolute',

    left:0
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

export default Diceone;