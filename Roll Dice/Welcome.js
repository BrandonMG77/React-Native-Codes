import React, {useEffect} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial
  } from 'expo-ads-admob';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const interstitial = async () => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

     try {
         await AdMobInterstitial.requestAdAsync();
         await AdMobInterstitial.showAdAsync();
         
     } catch (error) {
            
        console.log(error);
    }
}

function Welcome({navigation}) {


  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.background}
      />

      <View style={styles.button}>
      <Button
      title="Let's play with one die"
      color="#c8666b"
      onPress={() => navigation.navigate('One Die')}
    />
      </View>

      <View style={styles.button}>
      <Button
      title="Let's play with two dice"
      color="blue"
      onPress={() => navigation.navigate('Two Dice')}
    />
      </View>

      <View style={styles.button}>
      <Button
      title="Let's play with three dice"
      color="#99c4a5"
      onPress={() => navigation.navigate('Three Dice')}
    />
      </View>
 
    
        <AdMobBanner
        style={styles.adContainer}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-6884846122457846/4651224782" 
        servePersonalizedAds // true or false
                    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:0,
    alignItems:'center'

  },
  button:{
    margin:5,
    marginBottom:100,
    marginTop: 20,
    width:100,
    height:75
    
  },
  adContainer:{
    top:600,
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

export default Welcome;