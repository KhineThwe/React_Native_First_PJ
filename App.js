import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet,Button,ScrollView} from 'react-native';

const App = () =>{
  const [todos,setTodos] = useState([]);
  const [text,setText] = useState("");
  
  const handlePress = ()=>{
    if(text){
      // const newTodos = [...todos];//copy and paste into newTodos array
      // newTodos.push(text);
      // setTodos(newTodos);
      //or
      setTodos([...todos,text]);
    }
  };
  return (
    <View style={styles.root}>
    <Text style={styles.title}>Todo App</Text>
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} value={text} onChangeText={(value)=>setText(value)}/>
      <Button title="Add" onPress={handlePress}/>
    </View>
    <ScrollView>
    {
    todos.map(
      (todo,i)=>(<Text key={i}>{todo}</Text>)
    )
    }
    </ScrollView>
  </View>
  );
};
const styles = StyleSheet.create({
  root:{
    paddingTop: 40,
    paddingHorizontal : 5,
    flex:1,
  },
  title:{
    paddingVertical: 20,
    fontSize: 35,
    textAlign: "center",
  },
  input:{
    flex: 1,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
  },
  inputWrapper:{
    flexDirection : "row",
  }
})
export default App;