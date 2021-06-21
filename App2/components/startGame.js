import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from './card.js';
import Colors from './constants/colors.js';
import Header from './header.js';
class StartGame extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	num:"",
	  	valid:1,
	  	start:0,
	  	disable:0
	  };

	  this.handleInput=this.handleInput.bind(this)

	}


	handleInput(e){
		const f=e.nativeEvent.text
		if(f.split("").filter((x)=>(isNaN(parseInt(x,10)))).length==0 || f=="" ){
			if(this.state.disable) return;
			this.setState({
				num:f,
				valid:1,
			})
		}
		else{
			this.setState({
				valid:0
			})
		}
	}

	resetInput(){
		//console.log(globalThis==this)
		this.setState({
			num:"",
			valid:1,
			start:0,
			disable:0,
		})
	}

	confirmInput(){
		if(this.state.num==0 || isNaN(this.state.num)){
			return Alert.alert('Invalid Number','Enter Number between 1-99',[{text: 'okay',style: 'destructive', onPress: ()=>this.resetInput()}])
		} 
		this.setState({
			valid:1,
			start:1,
			disable:1,
		})
		return Keyboard.dismiss();
	}

	render(){

		return(
		<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Header gameTitle="Guess a number"/>
				<View style={{width:"100%",borderRadius:40,alignItems:"center",elevation:30,backgroundColor:"grey"}}>
					<Text style={{fontWeight:"bold",fontSize:40}}>Start the Game</Text>
				</View>

				<Card style={{height:"50%",width:"100%",}}>
					<Text>Select a Number!</Text>
					<TextInput style={styles.inputText} placeholder="Enter" value={this.state.num} onChange={e=>this.handleInput(e)} keyboardType="numeric" blurOnSubmit maxLength={2} />
					{this.state.valid?null:<Text style={{color:"red"}}>*Enter a number</Text>}
					<View style={styles.buttons}>
						<View style={{width:80}}>
							<Button title="Reset" color={Colors.accent} onPress={()=>this.resetInput()}/>
						</View>

						<View style={{width:80}}>
							<Button title="Confirm" color={Colors.primary} onPress={()=>this.confirmInput()}/>
						</View>
					</View>
				</Card>
				{this.state.start?<View style={styles.start}><Button title="START" color="green" textColor="red" onPress={this.props.start} /></View>:null}
			</View>
		</TouchableWithoutFeedback>	
		);
	}	
}

const styles=StyleSheet.create({
	screen:{
		flex:1,
		alignItems:"center",
		justifyContent:"space-between",

	},

	inputView:{
		padding:20,
		alignItems:"center",
		height:"50%",
		width:"100%",
		justifyContent:"center",
		backgroundColor:"pink",
		elevation:15,
		borderRadius:20,
		marginBottom:80,
	},

	buttons:{
		flexDirection:"row",
		width:"70%",
		justifyContent:"space-between",
	},

	inputText:{
		width:"70%",
		padding:10,
		color:"white",
		backgroundColor:"#000",
		marginBottom:20,
		textAlign:"center",
	},

	start:{
		width:"50%",
		borderRadius:20,
		elevation:20,
		marginBottom:20,
		height:50,
	}
})

export default StartGame;
