import React, {useEffect, useState, useRef} from 'react';
import { View, StyleSheet, Text, Button, ImageBackground, TouchableOpacity, } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
} from 'expo-ads-admob';

/*
const interstitial = async () => {
  await AdMobInterstitial.setAdUnitID('ca-app-pub-6884846122457846/6367878558');

   try {
       await AdMobInterstitial.requestAdAsync();
       await AdMobInterstitial.showAdAsync();
       
   } catch (error) {
          
      console.log(error);
  }
}


  useEffect(() => {
    interstitial();
}, []);
*/


function HomeScreen({navigation}) {


  const[image, setImage] = useState(require('./assets/background.jpg'))
  return (

    <View style={styles.container}>
      
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Fast Tap Bubble</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Game')}> 
    <Text style={styles.text2}>Start the game</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Guide')}> 
    <Text style={styles.text2}>Instructions</Text>
</TouchableOpacity>
    </ImageBackground>
    <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
 />

     
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'stretch'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    bottom:160
  },
  btn:{
    marginTop:5,
    position:'relative',
    width:200,
    height:100,
    backgroundColor:'#3CB371'
    
  },
  text2:{
    fontSize:25,
    color:'white',
    alignSelf:'center',
    fontWeight: "bold",
    top:25
  }
});

export default HomeScreen;