import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import{VectorIcon,TextInput} from '../../components'
import {Colors,Styles} from '../../styles'



const SearchView = ({
    params,
}) => (
    <View style={styles.container}>
        <View style={styles.leftForm}>
            <TextInput 
            placeholder={'find house ......'} 
            style={{width:'100%',height:'100%',backgroundColor:'rgba(255,255,255,0.2)'}}
            leftComponent={<VectorIcon EvilIcons name={'search'} size={30} color ={Colors.Link_Water} />}
            />
        </View>
        <View style={styles.rightForm}>
            <TouchableOpacity style={styles.buttonSearch} onPress={()=>{}}>
                <Text style={styles.txtSearch}>Find </Text>
            </TouchableOpacity>
        </View>
    </View>
);


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        height:50
    },
    rightForm:{
        flex:2,alignItems:'center'
    },
    leftForm:{
        flex:8,alignItems:'center'
    },
    txtSearch:{
        fontSize:18,
        fontWeight:'500',
        color:Colors.white,
        lineHeight:24,
        textAlign:'center'
    }  ,
    buttonSearch:{
        ...Styles.mid_centerView,
        flex:1,
        width:'90%',
        borderRadius:15,
        backgroundColor:'rgb(48,93,151)'
    }
})


export default SearchView;
