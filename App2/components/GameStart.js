import React from 'react';
import {View, StyleSheet, TextInput, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Header from './header.js';
import Card from './card.js';


class GameStart extends React.Component {
constructor(props) {
  super(props);
  const mid=Math.floor((parseFloat(this.props.min+this.props.max)/2))
  this.state ={
  	min:this.props.min,
	max:this.props.max,
	num:mid
  };
  this.lesser=this.lesser.bind(this)
  this.greater=this.greater.bind(this)
}


	lesser(){
		const max=parseFloat(this.state.num)-1;
		const mid=Math.floor((parseFloat(this.state.min)+max)/2)
		this.setState({
			max:max,
			num:mid
		})
	}

	greater(){
		const min=parseFloat(this.state.num)+1;
		const mid=Math.floor((parseFloat(this.state.max)+min)/2)
		this.setState({
			min:min,
			num:mid
		})
	}
	

	render(){
		return(

			<View style={styles.screen}>
				<Header gameTitle="Predict the number" />
				<Card style={{borderColor:'#000',borderWidth:2,minWidth:100,minHeight:100}}>
					<Text style={{fontSize:20}}>{this.state.num}</Text>
				</Card>
				<View style={{width:"100%",height:"50%",alignItems:"center",justifyContent:"space-evenly"}}>
				<View style={{width:200}}>
					<Button title="CORRECT" color="green" onPress={()=>console.log("success")} />
				</View>

				<View style={{width:200}}>
					<Button title="LESSER" color="blue" onPress={this.lesser} />
				</View>

				<View style={{width:200}}>
					<Button title="GREATER" color="red" onPress={this.greater} />
				</View>
				</View>
			</View>
	 );
	}

};

const styles=StyleSheet.create({
	screen:{
		flex:1,
		alignItems:"center",
		justifyContent:"space-between"
	}
})


export default GameStart;