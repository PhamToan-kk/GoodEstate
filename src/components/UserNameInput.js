import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

import {Styles} from '../styles'
import {VectorIcon} from './VectorIcon'

export const UserNameInput = (props) => {
  const {onchangeTextHandler, val, onBlurHandler} = props
  return (
    <View style={Styles.inputField}>
      <View style={Styles.iconSign}>
        <VectorIcon MaterialIcons name="email" size={30} color="gray" />
      </View>
      <TextInput
        style={Styles.txtInput}
        placeholder="Username..."
        onChangeText={onchangeTextHandler}
        value={val}
        onBlur={onBlurHandler}
      />
      <View style={styles.viewInfo} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewInfo: {
    width: 32,
  },
})
