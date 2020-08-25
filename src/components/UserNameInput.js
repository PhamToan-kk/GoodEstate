import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {signInputStyles} from '../styles/signInputStyles';
import { VectorIcon } from './VectorIcon';

export const UserNameInput = ({onchangeTextHandler, val, onBlurHandler}) => {
  return (
    <View style={styles.inputField}>
      <View style={styles.iconSign}>
        <VectorIcon MaterialIcons name="email" size={30} color="gray"/>
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

const styles = StyleSheet.create({
  ...signInputStyles,
  viewInfo: {
    width: 32,
  },
});
