import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const SignButton = (props) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={props.submitHandler}>
      <Text style={styles.submitText}>{props.title}</Text>
      {props.children}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  submitButton: {
    flexDirection:'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderColor: '#f2f2f2',
    borderWidth: 0.1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    marginLeft: 20,
  },
  submitText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
