import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors, Styles} from '../../styles';
import {Morph, VectorIcon} from '../../components';
import color from 'color';

const RenderItemResult = ({
    item , navigation
}) => {

    const showResultDeatail = (item) => {
        navigation.navigate('DetailResult', {item: item});
    };

    const LeftItem = ({item}) => (
        <View style={styles.leftItem}>
            <Image
            style={{width: '80%', height: '80%', borderRadius: 10}}
            source={{uri: item.imageUrl}}></Image>
        </View>
        );
        const RighItem = ({item}) => (
            <View style={styles.rightItem}>
                <View style={styles.content}>
                <Text style={styles.headerItemTxt}>{item.type}</Text>
                <Text style={styles.addressItemTxt}>{item.address}</Text>
                <View style={styles.rateItem}>
                    {/* <VectorIcon
                    FontAwesome
                    name="star"
                    size={20}
                    color={Colors.yellowOrange}
                    /> */}
                    <Text style={styles.starTxt}> Contact:{item.contact}</Text>
                </View>
                <View style={styles.itemPrice}>
                    <Text style={styles.$Txt}>
                    $ <Text style={{fontSize: 20}}>{item.price}</Text>
                    </Text>
                    <Morph
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        ...Styles.mid_centerView
                    }}>
                    <View style={styles.heartView}>
                        <VectorIcon AntDesign name="heart" size={15} color="white" />
                    </View>
                    </Morph>
                </View>
                </View>
            </View>
            );
    return(
               <TouchableOpacity onPress={showResultDeatail}>
                    <Morph style={styles.itemContainer}>
                        <LeftItem item={item} />
                        <RighItem item={item} />
                    </Morph>
               </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      paddingRight: 10,
      ...Styles.row_between_center_View,
    },
    headerTxt: {
      fontSize: 20,
      ...Styles.headerText,
    },
    viewAllTxt: {
      fontSize: 15,
      fontWeight: '500',
      color: Colors.Cornflower_Blue,
    },
    itemContainer: {
      width: '100%',
      height: 150,
    //   backgroundColor: Colors.white,
      flexDirection: 'row',
      marginVertical:5
    },
    leftItem: {
      flex: 3,
      ...Styles.mid_centerView,
    },
    rightItem: {
      flex: 4,
      ...Styles.mid_centerView,
    },
    content: {
      height: '80%',
      width: '90%',
    },
    divider: {
      width: '100%',
      height: 10,
    },
    headerItemTxt: {
      flex: 1,
      fontSize: 17,
      fontWeight: '700',
      color: 'rgb(6,23,66)',
      lineHeight: 22,
    },
    addressItemTxt: {
      flex: 1,
      fontSize: 13,
      fontWeight: '500',
      color: color(Colors.gray_Text).darken(0.7).alpha(0.6),
      lineHeight: 16,
    },
    rateItem: {
      flex: 1,
      flexDirection: 'row',
    },
    starTxt: {
      fontSize: 15,
      fontWeight: '600',
      color: 'rgb(6,23,66)',
    },
    itemPrice: {
      flex: 2,
      ...Styles.row_between_center_View,
    },
    $Txt: {
      fontSize: 15,
      fontWeight: '800',
      color: 'rgb(6,23,66)',
    },
    heartView: {
      width: 40,
      height: 40,
      borderRadius: 20,
      ...Styles.mid_centerView,
      backgroundColor: Colors.Cornflower_Blue,
    },
  });
  

export default RenderItemResult;
