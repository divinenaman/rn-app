import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(

			<View style={styles.header}>
				<Text style={styles.titleText}>{this.props.gameTitle}</Text>
			</View>
		);
	}
}



const styles=StyleSheet.create({
	header:{
		paddingTop:35,
		height:90,
		backgroundColor:"#f7287b",
		alignItems:"center",
		justifyContent:"center",
		width:"100%",
	},
	titleText:{
		color:"black",
		fontSize:18,

	}
})

export default Header;