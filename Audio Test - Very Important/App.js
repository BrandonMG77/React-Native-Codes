import React, {useEffect, useState, useRef} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Animated, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import archivo from './archivo.json'
import { StorageAccessFramework } from 'expo-file-system';


export default function App() {
  const [count, setCount] = useState(0);
  const [evaluate, setEvaluate] = useState(false);
  const [sound, setSound] = React.useState();
  const [path, setPath] = useState({uri:  FileSystem.documentDirectory});
  const [archivo, setArchivo] = useState(require('./archivo.json'))
  const [fileRead, setFileRead] = useState();

  
  // Después de un par de intentos logré acceder a una ruta en el dispositivo
  // Crear un archivo
  //Escribir en el archivo
  async function readFile(){
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
   
    if (permissions.granted) {
   
      // Gets SAF URI from response
      const uri =  permissions.directoryUri;
    
      // Gets all files inside of selected directory
      const files = await StorageAccessFramework.readDirectoryAsync(uri);
      console.log(files[0]);
     

      // Escribe string en el archivo
      //const write = FileSystem.writeAsStringAsync(files[0], 'Test-1');


      // Lee el documento como un string
      // OJO remember, the "await" All this is asynchronus so without the await, it doesn't work!!!!!
      const read = await FileSystem.readAsStringAsync(files[0]);
    
      setFileRead(read)
     
      // Este CREA un nuevo archivo en el directorio
      /*const caca = await StorageAccessFramework.createFileAsync(uri, 'caca', 'text/plain')
      alert(caca);
      */
    }
    

    return fileRead
  }

  const reader = () => {
    alert(fileRead)
  }
  

  const evaluateHandler = () => {
    setCount(0)
    setEvaluate(true)
    console.log(evaluate);
  }
  ///////////////////////////////// Sonido Loop Infinito a partir del detonante ////////
  async function playSound() {
    
   
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/Hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    await sound.setIsLoopingAsync(true)
  }
/////////////////////////////////

/////////////// El UseEffect tiene acceso a modificar el estado en cualquier momento. Entonces, coloco el setInterval
//aquí para poder accesar al estado. A través de una función exterior, permito al usuario activar el useEffect
//mediante condiciones que el usuario cambia, de esta forma el setInterval logra acceder al Estado que quiero cambiar
// cada cierto tiempo
  useEffect(() => {
    const timer = setInterval(() => {
     
      if (evaluate == true) {
        if(count == 10){
          setEvaluate(false)
        } else { setCount(count + 1)} 
      }
    },1000);
    
    return () => {  
     clearInterval(timer)
    };
  });

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);




  return (
    <View style={styles.container}>
      <Text>Contador {count}</Text>
      <Button title="Comenzar contador hasta 10" onPress={()=> {evaluateHandler()}}/>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Read File" onPress={readFile} />
      <Button title="Read File x" onPress={reader} />
      <StatusBar style="auto" />
    </View>
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
