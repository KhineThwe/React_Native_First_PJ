import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet,Button,ScrollView,FlatList,TouchableOpacity} from 'react-native';

const App = () =>{
  const [todos,setTodos] = useState([]);
  const [text,setText] = useState("");
  
  const handlePress = ()=>{
    if(text){
      // const newTodos = [...todos];//copy and paste into newTodos array
      // newTodos.push(text);
      // setTodos(newTodos);
      //or
      setTodos([...todos,
        {
          value:text,
          id:new Date().toISOString()
        }
      ]);
    }
  };
  const deleteTodo = (id)=>{
    let newTodos = todos.filter((todo)=>todo.id!==id);
    setTodos(newTodos)
  };
  const updateTodo = (id)=>{
    // let newTodos = todos.filter((todo)=>todo.id!==id);
    // let toupdate = todos.filter((todo)=>todo.id==id);
    // toupdate[0].value = 'value';
    // setTodos([...toupdate,...newTodos]);
    //or
    let newTodos = []
    for(let i=0;i<todos.length;i++){
      if(todos[i].id == id){
        todos[i].value = 'updated'
      }
      newTodos.push(todos[i])
    }
    setTodos(newTodos)
  };
  return (
    <View style={styles.root}>
    <Text style={styles.title}>Todo App</Text>
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} value={text} onChangeText={(value)=>setText(value)}/>
      <Button title="Add" onPress={handlePress}/>
    </View>
    {/* <ScrollView>
    {
    todos.map(
      (todo,i)=>(<Text key={i}>{todo}</Text>)
    )
    }
    </ScrollView> */}
    <FlatList data={todos} renderItem={({item})=>(
    <View style={styles.viewStyle}>
      <Text style={styles.text}>{item.value}</Text>
      <TouchableOpacity onPress={()=>deleteTodo(item.id)}>
        <Text>Delete</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>updateTodo(item.id)}>
        <Text>Update</Text>
    </TouchableOpacity>
    </View>
    )}
    keyExtractor={(item)=>item.id}
    />
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
  },
  text:{
    fontSize:15,
    paddingVertical: 10,
  },
  viewStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
  }
})
export default App;