import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const MenuItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressHandler}>
      <View style={styles.menuItem}>
        {props.children}
        <Text style={styles.menuItemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  menuItemText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    lineHeight: 26,
  },
});
