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
import { FlatList } from 'react-native-gesture-handler';
import RenderItemResult from './RenderItemResult'

const mockData = [
    {
      id: 1,
      type: 'Nacary Villas',
      address: 'Tran phu- Ha Dong',
      imageUrl:
        'https://cdn.jamesedition.com/media/W1siZiIsImxpc3RpbmdfaW1hZ2VzLzIwMTkvMTEvMjIvMTUvNTYvMjYvODE2MjZhOTAtN2IwMi00YTJjLWIyZjQtNGZhODk3ZjU0Mzk1L0FxdWFtYXJpbmEgc2lkZS5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4NjMwXHUwMDNlIl0sWyJwIiwiZW5jb2RlIiwianBnIixudWxsXV0/luxury-villas-modern-and-fresh-design-in-la-duquesa.jpg?sha=a9a7968bffcb60c6',
      price: 2300,
      stars: 500,
      contact:12344567,
    },
    {
      id: 2,
      type: 'Nacary apartment',
      address: 'Tran phu- Ha Dong',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
      price: 2300,
      stars: 500,
      contact:12344567,

    },
    {
      id: 3,
      type: 'Nacary apartment',
      address: 'Tran phu- Ha Dong',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
      price: 2300,
      stars: 500,
      contact:12344567,

    },
    {
      id: 4,
      type: 'Nacary apartment',
      address: 'Tran phu- Ha Dong',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
      price: 2300,
      stars: 500,
      contact:12344567,

    },
    {
        id: 5,
        type: 'Nacary apartment',
        address: 'Tran phu- Ha Dong',
        imageUrl:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price: 2300,
        stars: 500,
        contact:12344567,

      },
      {
        id: 6,
        type: 'Nacary apartment',
        address: 'Tran phu- Ha Dong',
        imageUrl:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price: 2300,
        stars: 500,
        contact:12344567,

      },
      {
        id: 7,
        type: 'Nacary apartment',
        address: 'Tran phu- Ha Dong',
        imageUrl:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price: 2300,
        stars: 500,
        contact:12344567,

      },
  ];


export const SearchScreen = ({navigation}) => {
    
    const RenderResult = ()=>{
        return(
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listResult}
                data={mockData}
                // renderItem={({item})=> <RenderItemResult item={item} navigation={navigation}/>}
                keyExtractor={(item)=>item.id.toString()}
            />
        )
    }



// render MAIN    
  return (
    <ImageBackground style={{flex:1}} source={{uri:'https://s-media-cache-ak0.pinimg.com/736x/55/e7/c8/55e7c8dfeb949b2504794cca662ba4a2.jpg'}}>

        <LinearGradient
        style={{flex: 1}}
        colors={[
            'rgba(43,90,148,0.9)',
            'rgba(45,83,133,0.6)',
            'rgba(45,91,123,0.6)',

        ]}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ReturnButton style={styles.returnButton} onPress={()=>navigation.goBack()}/>
                    </View>
                    <SearchView/>
                    <RenderResult/>
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
        
    },
    listResult:{
        paddingHorizontal:15,
        paddingTop:10
    }
   
})
