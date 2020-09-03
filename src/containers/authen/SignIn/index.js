import React from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../styles';
import {TextInput} from '../../../components'

export const SignInScreen = ({params}) => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.imgBg}
      source={{
        uri:
          'https://i.pinimg.com/originals/36/5e/2f/365e2f463e6b31e86f0f54ebf23a9835.jpg',
      }}>
        <LinearGradient colors={['rgba(99,184,255,0.8)', 'rgba(24,116,205, 1)','rgba(44, 49, 75, 0.5)']} style={{flex:1}} >
            <View style={{marginTop:50}}>
                    <TextInput/>
                    <TextInput/>
            </View>
        </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    width: '100%',
    height: '100%',
  },
  linear: {
    flex: 1,
  },
});