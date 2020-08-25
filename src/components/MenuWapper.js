import React from 'react';
import {StyleSheet, View} from 'react-native';

export const MenuWapper = (props) => {
  return <View style={styles.menuWrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
  menuWrapper: {
    marginTop: 10,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    marginHorizontal: 25,
    paddingVertical: 10,
  },
});
