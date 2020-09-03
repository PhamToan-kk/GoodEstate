import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors,Styles} from '../../../styles'
import {Morph,VectorIcon} from '../../../components'
import color from 'color'


const InnnerSheet =({data,navigation})=> {
  
	const RenderHeaderSheet = ()=>{
		return(
			<View style={styles.headerSheet}>
				<View>
					<Text style={styles.typeTxt}>{data.type}</Text>
					<Text style={styles.addressTxt}>{data.address}</Text>
				</View>
				<Morph style={styles.morphView}>
					<View style={styles.innerMorph} >
						<VectorIcon AntDesign name="heart" size={25} color="white"/>
					</View>
				</Morph>
			</View>
		)
	}

	const RenderStarRate = ()=>{
		return(
			<View style={styles.rate}>
                <VectorIcon FontAwesome name="star" size={25} color={Colors.yellowOrange}/>
                <Text style={styles.starTxt}>5</Text>
                <View style={styles.saleView}>
                    <Text style={styles.saleTxt}>For Sale</Text>
                </View>
			</View>
		)
	}

	const RenderContact =()=> {
		return(
			<View style={styles.contact}>
				<Text style={styles.titleSection}>Listing Agent</Text>
				<View style={styles.ownerInfo}>
					<View style={styles.avatarView}>
						<Image source={require('../../../assets/icons/user.png')} 
						style={{width:70,height:70,borderRadius:35}}
						></Image>
					</View>
					<View style={styles.ownerName}>
						<Text style={styles.txtOwnerName}>Contacter name</Text>
						<Text>Owner</Text>
					</View>
					<TouchableOpacity style={styles.buttonView}>
						<Morph style={styles.morphButton}>
							<View style={styles.innerMorphButton}>
								<VectorIcon MaterialCommunityIcons name={'message'} size={25} color={Colors.Cornflower_Blue}/>
							</View>
						</Morph>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonView}>
						<Morph style={styles.morphButton}>
							<View style={styles.innerMorphButton}>
								<VectorIcon MaterialCommunityIcons name={'phone'} size={25} color={Colors.greenLight}/>
							</View>
						</Morph>
					</TouchableOpacity>		
				</View>
			</View>			
		)
	}
	const SpecifyComponent = ({Icon,amount,name})=>{
		return(
			<View style={styles.sectionSpecification}>
				<View style={[{flex:1},Styles.row_no_center_View,]}>
					{Icon}
					<Text style={styles.amountTxt}>{amount}</Text>
				</View>
				<View style={[{flex:1},Styles.row_no_center_View]}>
					<Text style={styles.nameTxt}>{name}</Text>
				</View>
			</View>
		)
	}
	const RenderSpecifications = ()=>
	{
		return(<View style={styles.spescifiations}>
				<Text style={styles.titleSection}>Specifications</Text>
				<View style={styles.specifyContent}>
					<SpecifyComponent 
					name="Bathrooms" 
					amount={3} 
					Icon={<VectorIcon MaterialCommunityIcons name="shower" size={25}  color={Colors.Cornflower_Blue}/>}

					/>
					<SpecifyComponent 
					name="Bedrooms" 
					amount={3}
					Icon={<VectorIcon Ionicons name="bed-outline" size={25} color={Colors.Cornflower_Blue} />}

					/>
					<SpecifyComponent 
					name="Square Feet" 
					amount={123}
					Icon={<VectorIcon FontAwesome name="building-o" size={20} color={Colors.Cornflower_Blue} />}

					/>
				</View>
		</View>)
	}

	const navigateMap = ()=>{
		navigation.navigate('SinglePositionMap')
	}

	const RenderFooter =()=>{
		return(
			<View style={{flex:1,flexDirection:'row'}}>
				<View style={{flex:2,padding:15}}>
					<Text style={[Styles.grayTxt,{fontSize:12}]}>Price</Text>
					<Text style={Styles.headerText}>$ <Text style={{fontSize:25}}>{data.price}</Text></Text>
				</View>
				<View style={{flex:3,padding:10}}>
					<Morph style={{ width:200,height:60,backgroundColor:Colors.Cornflower_Blue,borderRadius:30}}>
						<TouchableOpacity 
						style={[{flex:1},Styles.mid_centerView]}
						onPress={()=> navigateMap()}
						>
							<Text style={[Styles.headerText,{color:Colors.white,fontSize:17}]}>Check Map</Text>
						</TouchableOpacity>
					</Morph>
				</View>
			</View>	
		)
	}

return (
    <LinearGradient style={styles.panel} colors={['rgb(255,255,255)','rgb(247,247,247)','rgb(240,240,240)' ]}>
		<View style={{flex:3,paddingHorizontal:13}}>
			<RenderHeaderSheet/>
			<RenderStarRate/>
			<RenderContact/>
			<RenderSpecifications/>
		</View>
		<View style={{flex:1.4,backgroundColor:'white'}}>
			<RenderFooter/>
		</View>
	</LinearGradient>
    );
  
}


const styles = StyleSheet.create({
    panel: {
    height: 600,
  },
  headerSheet:{
	flex:1,
	...Styles.row_between_center_View
  },
  rate:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  contact:{
	flex:2,
  },
  spescifiations:{
	flex:2
  },
  morphView:{
	width:70,height:70,borderRadius:35,...Styles.mid_centerView
  },
  innerMorph:{
	width:60,height:60,borderRadius:30,...Styles.mid_centerView,backgroundColor:Colors.Cornflower_Blue
  },
  typeTxt:{
	fontSize:25,
    ...Styles.headerText,
	lineHeight:22,
  },
  addressTxt:{
	marginTop:10,
	fontSize:18,
	...Styles.grayTxt,
    lineHeight:16,
  },
  starTxt:{
    fontSize:20,
    fontWeight:'600',
    color:'rgb(6,23,66)',
    marginHorizontal:5
 },
 saleView:{
     width:100,
     height:40,
     backgroundColor: Colors.Cornflower_Blue_Opacity,
     marginLeft:50,
     borderRadius:13,
	 ...Styles.mid_centerView
 },
 saleTxt:{
     fontSize:15,
     fontWeight:'500',
     color:Colors.Cornflower_Blue
 },
 titleSection:{
	 flex:1,
	fontSize:17,
	...Styles.headerText
 },
 ownerInfo:{
	 flex:3,
	 flexDirection:'row'
 },
 buttonView:{
	flex:1,
	...Styles.mid_centerView
 },
 morphButton:{
	width:60,height:60,borderRadius:30,...Styles.mid_centerView,
 },
 innerMorphButton:{
	width:50,height:50,borderRadius:25,...Styles.mid_centerView,backgroundColor:Colors.white
 },
 avatarView:{
	flex:1,
	...Styles.mid_centerView
 },
 ownerName:{
	 flex:2,
	 justifyContent:'center',
	 padding:10
 },
 txtOwnerName:{
	 fontSize:17,
	 ...Styles.headerText
 },
 specifyContent:{
	flex:3,
	...Styles.row_between_center_View,
 },
 sectionSpecification:{
	 flex:1,
	 height:'100%',
	 paddingLeft:10
 },
 amountTxt:{
		...Styles.headerText,
		fontSize:20,
		margin:10
 },
 nameTxt:{
	 ...Styles.grayTxt,
	 fontSize:18,
	 fontWeight:'400'
 }
  



});


export default InnnerSheet;
