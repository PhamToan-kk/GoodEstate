import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import{VectorIcon,TextInput} from '../../components'
import {Colors,Styles} from '../../styles'
const SearchView = ({
    navigation
}) => 
{
    const  searchHouse = ()=>{
        navigation.navigate('Search')
    }
    return(
    <View style={styles.container}>
        <View style={{flex:8,alignItems:'center'}}>
            <TextInput 
            placeholder={'find house ......'} 
            style={{width:'100%',height:'100%',backgroundColor:'transparent'}}
            leftComponent={<VectorIcon EvilIcons name={'search'} size={30} color ={Colors.Link_Water} />}
            />
        </View>
        <View style={{flex:2,alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonSearch} onPress={searchHouse}>
                <Text style={styles.txtSearch}>Search</Text>
            </TouchableOpacity>
        </View>
    </View>
)};


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        height:50

        // alignItems:'center'
    },
    txtSearch:{
        fontSize:18,
        fontWeight:'500',
        color:Colors.Cornflower_Blue,
        lineHeight:24,
        textAlign:'center'
    }  ,
    buttonSearch:{
        ...Styles.mid_centerView,
        flex:1,
        width:'90%',
        borderRadius:15,
        backgroundColor:Colors.Cornflower_Blue_Opacity
    }
})

export default SearchView;
