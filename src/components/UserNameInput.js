import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {signInputStyles} from '../styles/signInputStyles';

const UserNameInput = ({onchangeTextHandler, val, onBlurHandler}) => {
  return (
    <View style={styles.inputField}>
      <View style={styles.iconSign}>
        <MaterialIcons name="email" size={30} color="gray" />
      </View>
      <TextInput
        style={styles.txtInput}
        placeholder="Username..."
        onChangeText={onchangeTextHandler}
        value={val}
        onBlur={onBlurHandler}
      />
      <View style={styles.viewInfo} />
    </View>
  );
};

export default UserNameInput;

const styles = StyleSheet.create({
  ...signInputStyles,
  viewInfo: {
    width: 32,
  },
});
