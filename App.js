import React,{useState,useReducer} from 'react';
import {View,Text,TextInput,StyleSheet,Button,ScrollView,FlatList,TouchableOpacity} from 'react-native';

const reducer = (state,action)=>{
  switch(action.type){
    case "TODOS":
      return {...state,todos:action.payload};
    case "TEXT":
      return {...state,text:action.payload};
  }
}
const App = () =>{

  // const [todos,setTodos] = useState([]);
  // const [text,setText] = useState("");
  const [state,dispatch]=useReducer(reducer,{todos:[],text:""});
  
  const handlePress = ()=>{
    if(state.text){
      // const newTodos = [...todos];//copy and paste into newTodos array
      // newTodos.push(text);
      // setTodos(newTodos);
      //or
      dispatch({
        type:'TODOS',
        payload:[...state.todos,
          {
            value:state.text,
            id:new Date().toISOString()
          }
        ]
      });
    }
  };
  const deleteTodo = (id)=>{
    let newTodos = state.todos.filter((todo)=>todo.id!==id);
    dispatch({
      type:"TODOS",
      payload:newTodos
    })
  };
  const updateTodo = (id)=>{
    // let newTodos = todos.filter((todo)=>todo.id!==id);
    // let toupdate = todos.filter((todo)=>todo.id==id);
    // toupdate[0].value = 'value';
    // setTodos([...toupdate,...newTodos]);
    //or
    let newTodos = []
    for(let i=0;i<state.todos.length;i++){
      if(state.todos[i].id == id){
        state.todos[i].value = 'updated'
      }
      newTodos.push(state.todos[i])
    }
    dispatch({
      type:"TODOS",
      payload:newTodos
    })
  };
  return (
    <View style={styles.root}>
    <Text style={styles.title}>Todo App</Text>
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} value={state.text} onChangeText={(value)=>dispatch({type:"TEXT",payload:value})}/>
      <Button title="Add" onPress={handlePress}/>
    </View>
    {/* <ScrollView>
    {
    todos.map(
      (todo,i)=>(<Text key={i}>{todo}</Text>)
    )
    }
    </ScrollView> */}
    <FlatList data={state.todos} renderItem={({item})=>(
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