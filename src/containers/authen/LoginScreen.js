import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import SignInAction from './SignInAction';
import SignUpAction from './SignUpAction';
import {VectorIcon} from '../../components';

export const LoginScreen = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const RenderHeader = useCallback(
    () => (
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo2.png')}
          resizeMode={'contain'}
        />
        <Text style={styles.logoText}></Text>
      </View>
    ),
    [],
  );

  const RenderTabBar = useCallback(
    () => (
      <View style={styles.tabBar}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => setIsEnabled(true)}
            style={[
              styles.item,
              {
                backgroundColor: isEnabled ? 'coral' : 'white',
                borderTopLeftRadius: width / 2 / 2,
                borderBottomLeftRadius: width / 2 / 2,
              },
            ]}>
            <VectorIcon
              FontAwesome
              name="sign-in"
              size={30}
              color={isEnabled ? 'white' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsEnabled(false)}
            style={[
              styles.item,
              {
                backgroundColor: isEnabled ? 'white' : 'coral',
                borderTopRightRadius: width / 2 / 2,
                borderBottomRightRadius: width / 2 / 2,
              },
            ]}>
            <VectorIcon
              FontAwesome
              name="registered"
              size={30}
              color={isEnabled ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    ),
    [isEnabled],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg1.jpg')}
        style={styles.contentContainer}>
        <StatusBar hidden={true} />
        <RenderHeader />
        <View style={styles.body}>
          <RenderTabBar />
          <View style={styles.logAction}>
            {isEnabled ? <SignInAction /> : <SignUpAction />}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('screen');
const iconHeight = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
  },
  logo: {
    height: iconHeight,
    width: iconHeight,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'coral',
  },
  tabBar: {
    position: 'relative',
    bottom: -45,
    width: width,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    width: width / 2,
    height: '100%',
    borderRadius: width / 2 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    width: width / 2 / 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
