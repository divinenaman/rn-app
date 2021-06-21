import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = props => {

	return(
		<View style={{...styles.inputView,...props.style}}>{props.children}</View>
	);
};

const styles=StyleSheet.create({
inputView:{
		padding:20,
		alignItems:"center",
		
		justifyContent:"center",
		backgroundColor:"pink",
		elevation:15,
		borderRadius:20,
		marginVertical:50,
	},

})

export default Card;