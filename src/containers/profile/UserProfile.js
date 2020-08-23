import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SignButton from '../../components/SignButton';

export const UserProfile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require('../../assets/banner.jpg')}
      />
      <View style={styles.body}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.userAvatar}
            source={require('../../assets/avatar.jpg')}
          />
          <Text style={styles.userName}>Kim So Na</Text>
          <Text>aafafafjabjf</Text>
        </View>
        <View style={styles.funcContainer}>
          <TouchableOpacity style={styles.funcRow}>
            <Ionicons name="information" size={30} color="gray" />
            <Text style={styles.funcText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.funcRow}>
            <Ionicons name="settings" size={30} color="gray" />
            <Text style={styles.funcText}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.funcRow}>
            <MaterialIcons name="history" size={30} color="gray" />
            <Text style={styles.funcText}>History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signOutContainer}>
          <SignButton style={styles.signOutButton} title="Sign Out">
            <Octicons
              style={styles.signOutIcon}
              name="sign-out"
              size={32}
              color="white"
            />
          </SignButton>
        </View>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');
const avatarSize = width / 2 / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  body: {
    flex: 7,
  },
  profileContainer: {
    width: width,
    height: avatarSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    position: 'absolute',
    top: -avatarSize / 2,
  },
  userName: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  funcContainer: {
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 20,
    height: 165,
  },
  funcRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 7,
  },
  funcText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15,
  },
  signOutContainer: {
    width: 170,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  signOutIcon: {
    marginLeft: 10,
  },
});
