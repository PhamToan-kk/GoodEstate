import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../styles';
import{VectorIcon,TextInput} from '../../components'
import { ScrollView } from 'react-native-gesture-handler';
import SearchView from './SearchView'
import RecomendHorizonView from './RecomendHorizonView'
import RecommendVerticalView from './RecommendVerticalView'
import LinearGradient from 'react-native-linear-gradient';

const mockData1 = [
    {
        id:1,
        type:'Nacary apartment',
        address:'Tran phu- Ha Dong',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price:2300,
        stars:500
    },
    {
        id:2,
        address:'Tran phu- Ha Dong ',
        type:'Nacary apartment',
        imageUrl:'https://r-cf.bstatic.com/images/hotel/max1024x768/241/241398090.jpg',
        price:2300,
        stars:500
    },
    {
        id:3,
        address:'Tran phu',
        type:'Nacary apartment',
        imageUrl:'https://r-cf.bstatic.com/images/hotel/max1024x768/241/241398090.jpg',
        price:2300,
        stars:500
    },
    {
        id:4,
        address:'Tran phu',
        type:'Nacary apartment',
        imageUrl:'https://r-cf.bstatic.com/images/hotel/max1024x768/241/241398090.jpg',
        price:2300,
        stars:500
    }
]

const mockData2 = [
	{
        id:1,
        type:'Nacary Villas',
        address:'Tran phu- Ha Dong',
        imageUrl:'https://cdn.jamesedition.com/media/W1siZiIsImxpc3RpbmdfaW1hZ2VzLzIwMTkvMTEvMjIvMTUvNTYvMjYvODE2MjZhOTAtN2IwMi00YTJjLWIyZjQtNGZhODk3ZjU0Mzk1L0FxdWFtYXJpbmEgc2lkZS5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4NjMwXHUwMDNlIl0sWyJwIiwiZW5jb2RlIiwianBnIixudWxsXV0/luxury-villas-modern-and-fresh-design-in-la-duquesa.jpg?sha=a9a7968bffcb60c6',
        price:2300,
        stars:500
	},
	{
        id:2,
        type:'Nacary apartment',
        address:'Tran phu- Ha Dong',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price:2300,
        stars:500
	},
	{
        id:3,
        type:'Nacary apartment',
        address:'Tran phu- Ha Dong',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price:2300,
        stars:500
	},
	{
        id:4,
        type:'Nacary apartment',
        address:'Tran phu- Ha Dong',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
        price:2300,
        stars:500
    },
]

export const HomeScreen = (props) => {
  const {navigation} = props;
  console.log('aaaa',props)
  return (
    <LinearGradient style={{flex:1}} colors={['rgb(255,255,255)','rgb(247,247,247)','rgb(244,244,244)' ]}>
      <View style={styles.container}>
        <View  style={styles.header}>
            <View style={styles.leftHeader}>
                <VectorIcon Foundation name="marker" size={24} color={Colors.Cornflower_Blue}/>
                <Text style={styles.headerTxt}>Jakacta</Text>
            </View>
        </View>
        <View style={styles.searchBox}>
            <SearchView/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.recommend_Horizontal}>
				<RecomendHorizonView data={mockData1} navigation={navigation}/>
			</View>
			<View style={styles.recommend_Vertical}>
				<RecommendVerticalView data={mockData2} navigation={navigation}/>
			</View>
        </ScrollView>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  header:{
    marginTop:50,
    marginHorizontal:15,
    height:50 ,
    alignItems:'flex-start',
    justifyContent:'center'
  },
  leftHeader:{
        flexDirection:'row',
        alignItems:'center'
  },
  headerTxt:{
        fontSize:20,
        fontWeight:'600',
        color:Colors.Sapphire
  },
  searchBox:{
    marginVertical:10,
    marginHorizontal:10,
    height:50  
  },
  recommend_Horizontal:{
      marginLeft:15,
      height:400,
  },
  recommend_Vertical:{
	  marginHorizontal:15
  }
});
