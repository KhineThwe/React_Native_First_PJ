import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';
import React,{useState} from "react";

export default function App() {
  const [textInput,setTextInput] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
      <Image
       source={{uri: 'https://www.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg'}}
       style={styles.img}
      />
      <Image source={require('./assets/splash.png')} style={styles.img}/>
      <TextInput style={styles.input} value={textInput} onChangeText={(text)=>setTextInput(text)}/>
      <Text>{textInput}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:500,
    height:200,
  },
  input:{
    borderColor:'grey',
    padding: 10,
  }
});
