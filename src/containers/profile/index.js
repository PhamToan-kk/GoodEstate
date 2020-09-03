import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {ReturnButton} from '../../components'

export const ProfileScreen = (props) => 
{
    const {navigation} = props
    return(
    <View style={styles.container}>
        <ReturnButton onPress={()=>navigation.goBack()}/>
        <Text>ProfileScreen</Text>
    </View>
);}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


 
