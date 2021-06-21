import React from 'react'
import {StyleSheet, View, Text, TextInput, Button, Modal} from 'react-native'


const GoalInput = props => {
	return (
  <Modal visible={props.setvisible} animationType="slide">
		<View style={{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#323232"}}>
    	<TextInput placeholder="Enter.." value={props.value} onChangeText={props.func} style={styles.inputs} />

      <View style={styles.butt}>
      <View style={styles.button}>
    	<Button title="ADD" color="green" onPress={props.submitFunc} />
      </View>

      <View style={styles.button}>
      <Button title="CANCEL" color="red" onPress={props.exitFunc} />
      </View>
      </View>
    </View>  
  </Modal> 
    );
}

const styles=StyleSheet.create({
	inputs: {
  	width:"70%",
  	borderWidth:2,
  	padding:10,
    marginBottom:20,
    backgroundColor:'black',
    color:"white"
  },

  butt:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"70%"
  },
  button:{
    width:100,
  }
})

export default GoalInput;