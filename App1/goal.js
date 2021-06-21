import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function Goal() {
const [newGoal,changeGoal]=useState("")
const [goals,updateGoals]=useState([])
const [isAddMode,setIsAddMode]=useState(false)
function changeVal(text){
	return changeGoal(text)
}

const updateVal=()=>{
	return updateGoals([...goals,{id: Math.random().toString() , val: newGoal}]),changeGoal(""),setIsAddMode(false)
}

const capitalize=(a)=>{
  return updateGoals((x)=>(Array.from(x,(f)=>{
    if(f["id"]===a) f["val"]=f["val"].toUpperCase();
    return f;
  })))
}
const deleteValue=(id)=>{
  return updateGoals((goal)=>(goal.filter((x)=>(x["id"]!=id))))
}

return (
	<View style={styles.container}>
    <Button style={{marginTop:10,elevation:10,borderShadow:30}} title="ADD GOALS" onPress={()=>(setIsAddMode(true))} />
    <GoalInput setvisible={isAddMode} value={newGoal} func={changeVal} submitFunc={updateVal} exitFunc={()=>(setIsAddMode(false),changeGoal(""))} /> 		  
  	{goals.length==0?null:<><Text style={{fontWeight:"bold",fontSize:40,marginTop:10}}>GOALS</Text>
  	<FlatList
  		keyExtractor={(item,index)=>item["id"]}
  		data={goals} 
  		renderItem={itemData=>(
  		  <GoalItem value={itemData.item} upper={capitalize} del={deleteValue}/>
  	)} 
  	style={styles.listGoals} /></>}
  </View>

);
}

const styles = StyleSheet.create({
container: {
  justifyContent:"center",
  alignItems:"center",
  paddingTop:30,
  flex:1,
  backgroundColor: 'black',
},


listGoals:{
	padding:20,
  width:"100%",
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
	backgroundColor:"#cfcfcf",
},

});
