import React from 'react';
import {Text, 
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    VectorIcon, 
    TextInput,
    ReturnButton
} from '../../components';
import {Colors, Styles} from '../../styles';
import SearchView from './SearchView'

export const SearchScreen = ({navigation}) => {


  return (
    <ImageBackground style={{flex:1}} source={{uri:'https://wallpapercave.com/wp/wp5430393.jpg'}}>

        <LinearGradient
        style={{flex: 1}}
        colors={[
            Colors.linear_yeloow1,
            Colors.linear_yeloow2,
        ]}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ReturnButton style={styles.returnButton}/>
                    </View>
                    <SearchView/>
                </View>
        </LinearGradient>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        marginTop:50,
        width: '100%',
        height:50,
    },
    returnButton:{
        top:0,
        left:15
        
    }
   
})
