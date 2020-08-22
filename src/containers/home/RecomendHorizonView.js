import React from 'react';
import { 
    Text, 
    View , 
    FlatList ,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import{Morph,VectorIcon} from  '../../components'
import {Colors,Styles} from '../../styles'
import color from 'color';

const RecomendHorizonView = (props) => 
{

    const {data} = props

    const renderItem=({item})=>{

        const iiemStyles= StyleSheet.create({
            container:{
                width:270,height:330,marginRight:10,backgroundColor:'white'
            },
            headerTxt:{
                fontSize:20,
                lineHeight:22,
                ...Styles.headerText
            },
            addressTxt:{
                fontSize:15,
                fontWeight:'500',
                color:color(Colors.gray_Text).darken(0.7).alpha(0.6),
                lineHeight:16,
            },
            content:{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            },
            starTxt:{
                fontSize:15,
                fontWeight:'600',
                color:Colors.Sapphire,
                marginHorizontal:5
            },
            $Txt:{
                fontSize:15,
                fontWeight:'800',
                color:'rgb(6,23,66)',
            },
            heartView:{
                width:50,
                height:50,
                borderRadius:25,
                ...Styles.mid_centerView,
                backgroundColor:Colors.Cornflower_Blue
            }
        })
        return(
            <Morph style={iiemStyles.container}>
                    <View style={{flex:1}}>
                        <Image
                        source={{uri:item.imageUrl}}
                        style={{width:'100%',height:'100%',borderRadius: 12,}}
                        ></Image>
                    </View>
                    <View style={{flex:1,paddingHorizontal:10}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={iiemStyles.headerTxt}>{item.type}</Text>
                        </View>
                        <View style={iiemStyles.content}>
                            <Text style={iiemStyles.addressTxt}>{item.address}</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <VectorIcon FontAwesome name="star" size={20} color={Colors.yellowOrange}/>
                                <Text style={iiemStyles.starTxt}>4.5</Text>
                            </View>
                        </View>
                        <View style={{flex:2,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                            <Text style={iiemStyles.$Txt}>
                                $ <Text style={{fontSize:25}}>{item.price}</Text>
                            </Text>
                            <Morph style={{width:60,height:60,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                <View style={iiemStyles.heartView}>
                                    <VectorIcon AntDesign name="heart" size={18} color="white"/>
                                </View>
                            </Morph>
                        </View>

                    </View>
            </Morph>
        )
    }
    return(
    <View style={{flex:1}}>
        <View style={styles.header}>
            <Text style={styles.headerTxt}>Luxury Apartment</Text>
            <TouchableOpacity>
                <Text style={styles.viewAllTxt}>View All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.listViews}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal
            renderItem={(item)=>renderItem(item)}
            keyExtractor={(item,index)=>item.id.toString()}
            >
            </FlatList>
        </View>
    </View>
);}


const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        alignItems:'center'
    },
    listViews:{
        flex:6,
    },
    headerTxt:{
        fontSize:20,
        ...Styles.headerText
    },
    viewAllTxt:{
        fontSize:15,
        fontWeight:'500',
        color:Colors.Cornflower_Blue,
    }
})
export default RecomendHorizonView;
