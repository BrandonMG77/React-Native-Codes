import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Animated } from 'react-native';
import * as Random from 'expo-random';
import {
    AdMobBanner,
    AdMobInterstitial
  } from 'expo-ads-admob';
  import { LinearGradient } from 'expo-linear-gradient';
 


const interstitial = async () => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-6884846122457846/3404526062');

     try {
         await AdMobInterstitial.requestAdAsync();
         await AdMobInterstitial.showAdAsync();
         
     } catch (error) {
            
        console.log(error);
    }
}



function DiceThree({navigation}) {

    const [number, setNumber] = useState(Math.trunc(Math.random() * 6) + 1)
    const [number2, setNumber2] = useState(Math.trunc(Math.random() * 6) + 1)
    const [number3, setNumber3] = useState(Math.trunc(Math.random() * 6) + 1)

    const [widthDis, setWidthDis] = useState(require('./assets/1.png'))
    const [widthDis2, setWidthDis2] = useState(require('./assets/2.png'))
    const [widthDis3, setWidthDis3] = useState(require('./assets/3.png'))

    const [fake, setFake] = useState(require('./assets/1.png'))
    const [test, setTest] = useState(0)
    const [condition, setCondition] = useState(true)
    const [winner, setWinner] = useState('')

    useEffect(() => {
      interstitial();
  }, []);

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
            setWinner(number+number2+number3)
          }, 4000);

        const temp = Math.trunc(Math.random() * 6) + 1;
        const temp2 = Math.trunc(Math.random() * 6) + 1;
        const temp3 = Math.trunc(Math.random() * 6) + 1;
        setNumber(temp)
        setNumber2(temp2)
        setNumber2(temp3)
 
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

        switch (number2) {
            case 1:
                setWidthDis2(require('./assets/1.png'))
                break;
            case 2:
                setWidthDis2(require('./assets/2.png'))
                break;
                case 3:
                    setWidthDis2(require('./assets/3.png'))
                    break;
                    case 4:
                        setWidthDis2(require('./assets/4.png'))
                        break;
                        case 5:
                            setWidthDis2(require('./assets/5.png'))
                            break;
                            case 6:
                                setWidthDis2(require('./assets/6.png'))
                                break;
            default:
                break;
        }
        switch (number3) {
            case 1:
                setWidthDis3(require('./assets/1.png'))
                break;
            case 2:
                setWidthDis3(require('./assets/2.png'))
                break;
                case 3:
                    setWidthDis3(require('./assets/3.png'))
                    break;
                    case 4:
                        setWidthDis3(require('./assets/4.png'))
                        break;
                        case 5:
                            setWidthDis3(require('./assets/5.png'))
                            break;
                            case 6:
                                setWidthDis3(require('./assets/6.png'))
                                break;
            default:
                break;
        }
     
    }

   
    
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#99c4a5', '#79adbd', '#65bf9a']}
        style={styles.background}
      />

        <Text style={styles.text}>Tap the dice to play!</Text>
        <Text style={styles.winner}>Your number: {winner} </Text>

        <TouchableOpacity  style={styles.touch} onPress={()=> handleNumber()  }>
        <Image style={styles.diceOriginal}  source={condition ? widthDis: fake}></Image>

        <Image style={styles.diceOriginal}  source={condition ? widthDis2: fake}></Image>
        
        <Image style={styles.diceOriginal}  source={condition ? widthDis3: fake}></Image>


        </TouchableOpacity>

       
       <View style={styles.adContainer}>
       <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-6884846122457846/4651224782" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
                    />
       </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#99c4a5',
      flexDirection: 'row',
      alignItems: 'center',
    justifyContent: 'center',
   
  },
  diceOriginal: {
     width: 100,
     height:100,
     margin: 5
  },
  touch:{
    flexDirection: 'row',
    alignItems: 'center',
  justifyContent: 'center',
   
  },
  text:{
    position:'absolute',
    top: 20,
    fontSize: 20,
    backgroundColor: '#8cab95',
    color: 'white'
}, 
winner: {
  position:'absolute',
  top: 200,
  fontSize: 20,
  backgroundColor: '#8cab95',
  color: 'white'
},
adContainer:{
  top:620,
  position: 'absolute',

  left:0
},

  adContainer:{
    height:250,
    position: 'absolute',
    top: 660,

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

export default DiceThree;