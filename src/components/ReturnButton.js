import React from 'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import {VectorIcon} from './VectorIcon'
import {Colors,Styles} from '../styles'
export const ReturnButton = (props) => 
{
    const {
        style,
        onPress
    } = props
  return(<TouchableOpacity style={[styles.container,style]} onPress={onPress}>
        <VectorIcon Ionicons name="arrow-back" size={18} color={Colors.Cornflower_Blue}/>
    </TouchableOpacity>)
};

 
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:50,
        left:25,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:Colors.white,
        ...Styles.mid_centerView
    }
})