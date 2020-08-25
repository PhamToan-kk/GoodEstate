import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';

import {MenuItem, MenuWapper, VectorIcon} from '../../components';

export const UserProfile = () => {
  const RenderProfile = () => (
    <View style={styles.profileContainer}>
      <Image
        style={styles.userAvatar}
        source={require('../../assets/avatar1.jpg')}
      />
      <Text style={styles.userName}>Kim So Na</Text>
      <Text>aafafafjabjf</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require('../../assets/banner.jpg')}
      />
      <View style={styles.body}>
        <RenderProfile />

        <MenuWapper>
          <MenuItem title="Settings" onPressHandler={() => alert('settings')}>
            <VectorIcon
              Ionicons
              name="settings-outline"
              size={32}
              color="#FF6347"
            />
          </MenuItem>
          <MenuItem
            title="Information"
            onPressHandler={() => alert('Information')}>
            <VectorIcon
              Ionicons
              name="information-circle-outline"
              size={32}
              color="#FF6347"
            />
          </MenuItem>
        </MenuWapper>
        <MenuWapper>
          <MenuItem title="Sign out" onPressHandler={() => alert('Log out')}>
            <VectorIcon Feather name="log-out" size={32} color="#FF6347" />
          </MenuItem>
        </MenuWapper>
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
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    top: -avatarSize / 2,
  },
  userName: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
