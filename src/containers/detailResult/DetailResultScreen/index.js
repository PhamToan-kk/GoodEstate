import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import BottomSheet from 'reanimated-bottom-sheet';
import {Colors,Styles} from '../../../styles'
import {Morph,VectorIcon,ReturnButton} from '../../../components'
import color from 'color'
import InnnerSheet from './InnnerSheet'



const {width,height} = Dimensions.get('window')
export const DetailResultScreen = (props) => {
	
  const {route, navigation} = props;
  // console.log('leu leu', route.params.item);
  const data = route.params.item
  const imageUrl = route.params.item.imageUrl;
  const imagesUrls = ['https://media-cdn.tripadvisor.com/media/vr-splice-j/09/87/0a/7b.jpg', imageUrl, imageUrl];
  const sheetRef = React.useRef(null);


  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}/>
      </View>
    </View>
  )

  return (
    <View
      style={{flex: 1}}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        paginationStyle={{marginBottom: 2.5*height/4}}
        dot={<View style={styles.dot}></View>}
        activeDot={<View style={styles.activeDot}><View style={styles.innerActiveDot}></View></View>}
        showsButtons={false}>
        {imagesUrls.map((i,index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <ImageBackground
                style={{flex: 1, width: '100%'}}
                source={{uri: i}}>
                    <ReturnButton onPress={()=>navigation.goBack()}/>
                </ImageBackground>
            </View>
          );
        })}
      </Swiper>
      <BottomSheet
        renderHeader={renderHeader}
        ref={sheetRef}
        snapPoints={[550,200]}
        renderContent={()=><InnnerSheet data={data} navigation={navigation}/>}
		    enabledInnerScrolling={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 600,
  },
  header: {
    backgroundColor: Colors.white,
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.gray,
    marginBottom: 10,
  },
  dot:{
	// backgroundColor:'red',
	 width: 9, 
	 height: 9,
	 borderRadius: 4.5, 
	 borderWidth:1,
	 borderColor:Colors.white,
	 margin:6
  },
  activeDot:{
	width: 17, 
	height: 17,
	borderRadius:8.5,
	backgroundColor:'rgba(255,255,255,0.5)',
	...Styles.mid_centerView
  },
  innerActiveDot:{
	width: 8, 
	height: 8,
	borderRadius:4,
	backgroundColor:Colors.white
  },
  
});
