import React from 'react';
import { View,StyleSheet} from 'react-native';
import color from 'color';
import {Colors} from '../styles'

// không được sử dụng padding with newMorphism 
// không được sử dụng padding with newMorphism 
// không được sử dụng padding with newMorphism 
// không được sử dụng padding with newMorphism 

export const Morph = (props) => {
  const {radius, children, style, revert, borderless, Colorshadow} = props;
  const topStyles = StyleSheet.flatten([
    styles.morphTop,
    Colorshadow && {shadowColor: color(Colorshadow).lighten(0.5).alpha(0.5) },
    revert && {
      shadowColor: color(Colors.chelseaCucumber).darken(0.5).alpha(0.5),
    },
    {borderRadius: radius || 10},
    {...style}
  ]);
  const bottomStyles = StyleSheet.flatten([
    styles.morphBottom,
    Colorshadow && {shadowColor: color(Colorshadow).darken(0.5).alpha(0.5) },
    revert && {
      shadowColor: color(Colors.chelseaCucumber).lighten(0.5).alpha(0.5),
    },
    {borderRadius: radius || 10},
    {...style}

  ]);
  const morphStyles = StyleSheet.flatten([
    borderless && {borderWidth: 0},
    styles.morph,
    {borderRadius: radius || 10},
    {...style}

  ]);
  return (
    <View style={topStyles}>
      <View style={bottomStyles}>
        <View style={morphStyles}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  morphTop: {
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: color(Colors.hawkesBlue).lighten(0.5).alpha(0.5),
    justifyContent: 'center',
  },
  morphBottom: {
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: color(Colors.hawkesBlue).darken(0.5).alpha(0.5),
    justifyContent: 'center',
  },
  morph: {
    borderRadius: 12,
    borderColor: color(Colors.hawkesBlue).darken(0.1).alpha(0.3),
    width: 350,
    height: 70,
    backgroundColor: Colors.hawkesBlue,
    justifyContent: 'center',
  },
});
