import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput as TextInputNative,
  Platform,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import {VectorIcon} from './VectorIcon';
import {Morph} from './Morph';

import {Colors,Fonts} from '../styles';

const Eyes = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{position: 'absolute', right: 10, alignItems: 'center'}}>
      <VectorIcon
        Feather
        name={props.secureTextEntry ? 'eye-off' : 'eye'}
        size={15}
        color={Colors.dodgerBlue}
      />
    </TouchableOpacity>
  );
};

export const TextInput = (props) => {
  const {
    style,
    textInputStyle,
    keyboardType,
    password,
    placeholder,
    rightComponent,
    leftComponent,
    onChangeText,
    numberOfLines,
    autoFocus = false,
    selectTextOnFocus,
    showBorderBottom = false,
    editable,
  } = props;
  const [secureTextEntry, setSecureTextEntry] = useState(password);
  const [borderBottomColor, setBorderBottomColor] = useState(null);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: Colors.Cornflower_Blue,
      borderRadius: 999,
      paddingHorizontal:0,
      width: useWindowDimensions().width - 50,
      height: 60,
      marginBottom:20,
      borderWidth:0.3,
      ...style
    },
    input: {
      minHeight: 45,
      flex: 1,
      fontSize: 18,
      paddingHorizontal: 0,
    //   borderBottomColor:borderBottomColor,
    //   borderBottomWidth:0.4,
      backgroundColor: 'transparent',
      color:Colors.Sapphire,
    },

  });

  

  return (
    <View style={styles.container}>
      {leftComponent && <View style={{marginRight: 5}}>{leftComponent}</View>}
      <TextInputNative

        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.Link_Water}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        underlineColorAndroid={Colors.transparent}
        keyboardType={keyboardType}
        editable={editable}
        numberOfLines={numberOfLines}
        selectTextOnFocus={selectTextOnFocus}
        onFocus={() => setBorderBottomColor(Colors.star)}
        // onBlur={() => setBorderBottomColor(Colors.borderBottomTextField)}
      />
      {password && (
        <Eyes
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          secureTextEntry={secureTextEntry}
        />
      )}
      {rightComponent && (
        <View style={{marginLeft: 5}}>{rightComponent()}</View>
      )}
    </View>
  );
};
