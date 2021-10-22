import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text,  Button, ImageBackground, TouchableOpacity, } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
} from 'expo-ads-admob';


const interstitial = async () => {
  await AdMobInterstitial.setAdUnitID('ca-app-pub-6884846122457846/6367878558');

   try {
       await AdMobInterstitial.requestAdAsync();
       await AdMobInterstitial.showAdAsync();
       
   } catch (error) {
          
      console.log(error);
  }
}

function Guide({navigation}) {
  useEffect(() => {
    interstitial();
}, []);
  const[image, setImage] = useState(require('./assets/background.jpg'))
  return (

    <View style={styles.container}>
      
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Instructions</Text>
      <View style={styles.instructions}>
      <Text style={styles.text3}>
      1. Tap the bubble to add points to your score. Every tap adds one point.  
      </Text>
      <Text style={styles.text3}>
      2. Levels increase speed.  
      </Text>
      <Text style={styles.text3}>
      3. Your lives are going to decreased according to level rithm. 
      </Text>
      <Text style={styles.text3}>
      4. Insane level is just for masters.
      </Text>
      
     
        
      
          
      </View>
   
<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}> 
    <Text style={styles.text2}>Main</Text>
</TouchableOpacity>
    </ImageBackground>
    <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-6884846122457846/4665088108" // Test ID, Replace with your-admob-unit-id
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
    bottom:300
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
  },
  text3:{
    fontSize:25,
    color:'purple',
    alignSelf:'center',
    fontWeight: "bold",
    top:25,
    alignSelf:'baseline'
  },
  instructions: {
    width:400,
    height:400,
    alignItems:'center',
    backgroundColor:'#8FBC8F'
  }
});

export default Guide;