import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'


//TouchableHighlight - background color changes
//TouchableNativeFeedback - ripple effect (only android)
//TouchableWithoutFeedback
const GoalItem = props => {
	return (
	
	<TouchableOpacity activeOpacity={0.8} onPress={props.upper.bind(this,props.value.id)} onLongPress={props.del.bind(this,props.value.id)}>
		<View style={{marginVertical:15,backgroundColor:"pink",padding:20,borderRadius:30}}>
    		<Text style={{fontSize:20,}}>{props.value.val}</Text>
    	</View>
    </TouchableOpacity>
   

    );
}

export default GoalItem;