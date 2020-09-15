import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Colors, Styles} from '../../styles';
import {VectorIcon, TextInput} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import SearchView from './SearchView';
import RecomendHorizonView from './RecomendHorizonView';
import RecommendVerticalView from './RecommendVerticalView';
import LinearGradient from 'react-native-linear-gradient';
import UserAvatar from 'react-native-user-avatar';

const mockData1 = [
  {
    id: 1,
    type: 'Nacary apartment',
    address: 'Tran phu- Ha Dong',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
    price: 2300,
    stars: 500,
  },
  {
    id: 2,
    address: 'Tran phu- Ha Dong ',
    type: 'Nacary apartment',
    imageUrl:
      'https://r-cf.bstatic.com/images/hotel/max1024x768/241/241398090.jpg',
    price: 2300,
    stars: 500,
  },
  {
    id: 3,
    address: 'Tran phu',
    type: 'Nacary apartment',
    imageUrl:
      'https://r-cf.bstatic.com/images/hotel/max1024x768/241/241398090.jpg',
    price: 2300,
    stars: 500,
  },
  {
    id: 4,
    address: 'Tran phu',
    type: 'Nacary apartment',
    imageUrl:
      'https://r-cf.bstatic.com/images/hotel/max1024x768/241/241398090.jpg',
    price: 2300,
    stars: 500,
  },
];

const mockData2 = [
  {
    id: 1,
    type: 'Nacary Villas',
    address: 'Tran phu- Ha Dong',
    imageUrl:
      'https://cdn.jamesedition.com/media/W1siZiIsImxpc3RpbmdfaW1hZ2VzLzIwMTkvMTEvMjIvMTUvNTYvMjYvODE2MjZhOTAtN2IwMi00YTJjLWIyZjQtNGZhODk3ZjU0Mzk1L0FxdWFtYXJpbmEgc2lkZS5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4NjMwXHUwMDNlIl0sWyJwIiwiZW5jb2RlIiwianBnIixudWxsXV0/luxury-villas-modern-and-fresh-design-in-la-duquesa.jpg?sha=a9a7968bffcb60c6',
    price: 2300,
    stars: 500,
  },
  {
    id: 2,
    type: 'Nacary apartment',
    address: 'Tran phu- Ha Dong',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
    price: 2300,
    stars: 500,
  },
  {
    id: 3,
    type: 'Nacary apartment',
    address: 'Tran phu- Ha Dong',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
    price: 2300,
    stars: 500,
  },
  {
    id: 4,
    type: 'Nacary apartment',
    address: 'Tran phu- Ha Dong',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-bedroom-4-1575659269.jpg',
    price: 2300,
    stars: 500,
  },
];

export const HomeScreen = (props) => {
  const {navigation} = props;
  // console.log('home props', props);

  const RenderHeader = () => (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <UserAvatar size={40} name="Jane Doe" bgColor={Colors.Cornflower_Blue} />
        </TouchableOpacity>

        <Text style={styles.headerTxt}>Jakacta</Text>
      </View>
    </View>
  );
  const RenderRecommend = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.recommend_Horizontal}>
        <RecomendHorizonView data={mockData1} navigation={navigation} />
      </View>
      <View style={styles.recommend_Vertical}>
        <RecommendVerticalView data={mockData2} navigation={navigation} />
      </View>
    </ScrollView>
  );

// main view   
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        Colors.Linear_white2,
        Colors.Linear_white3,
        Colors.Linear_white4,
      ]}>
      <View style={styles.container}>
        <RenderHeader  />
        <SearchView  navigation ={navigation}/>
        <RenderRecommend />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  header: {
    marginTop: Platform.OS ? 50 : 10,
    marginHorizontal: 15,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftHeader: {
    ...Styles.row_no_center_View,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.Sapphire,
    marginLeft:10
  },

  recommend_Horizontal: {
    marginLeft: 15,
    height: 400,
  },
  recommend_Vertical: {
    marginHorizontal: 15,
  },
});
