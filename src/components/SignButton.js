import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SignButton = ({title, submitHandler}) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
      <Text style={styles.submitText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;

const styles = StyleSheet.create({
  submitButton: {
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
