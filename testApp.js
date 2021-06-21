import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Test() {
  const [outputText,setOutput]=useState(0)
  return (
    <View style={styles.container}>
    
    	<View style={{backgroundColor:"red"}}>
    		<Text>1</Text>
    	</View>
    	<View style={{backgroundColor:"blue"}}>
    		<Text>1</Text>
    	</View>
    	<View style={{backgroundColor:"pink"}}>
    		<Text>1</Text>
    	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	
  	flexDirection:"row",
  
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
