import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import {VectorIcon} from './VectorIcon';
import {Styles} from '../styles';

export const PasswordInput = (props) => {
  const {
    onchangeTextHandler,
    val,
    onBlurHandler,
    sercureTextState,
    secureTextEntryHandler,
    placeholderText,
  } = props;
  return (
    <View style={Styles.inputField}>
      <View style={Styles.iconSign}>
        <VectorIcon MaterialIcons name="lock" size={30} color="gray" />
      </View>
      <TextInput
        style={Styles.txtInput}
        placeholder={placeholderText}
        secureTextEntry={sercureTextState ? true : false}
        onChangeText={onchangeTextHandler}
        value={val}
        onBlur={onBlurHandler}
      />
      <TouchableOpacity onPress={secureTextEntryHandler}>
        <VectorIcon
          Ionicons
          style={styles.iconInfo}
          name={sercureTextState ? 'eye-off' : 'eye'}
          size={30}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconInfo: {},
});
