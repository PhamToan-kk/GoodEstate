import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animation from 'react-native-animatable';
import {Formik} from 'formik';
import * as yup from 'yup';

import UserNameInput from '../../components/UserNameInput';
import SignButton from '../../components/SignButton';
import PasswordInput from '../../components/PasswordInput';

const validSignUpSchema = yup.object({
  user: yup.string().required().min(3),
  password: yup.string().required(),
  confilm: yup.string().required(),
});

const SignUpAction = () => {
  const [sercurePass, setSercurePass] = useState(true);
  const [sercureConfilm, setSercureConfilm] = useState(true);

  const securePassEntry = () => {
    setSercurePass(!sercurePass);
  };
  const secureConfilmEntry = () => {
    setSercureConfilm(!sercureConfilm);
  };

  return (
    <Animation.View animation="bounceInRight" style={styles.signUpAction}>
      <Formik
        initialValues={{user: '', password: '', confilm: ''}}
        validationSchema={validSignUpSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}>
        {(props) => (
          <>
            {/* User */}
            <UserNameInput
              val={props.values.user}
              onchangeTextHandler={props.handleChange('user')}
              onBlurHandler={props.handleBlur('user')}
            />
            <Text style={styles.inputWarning}>
              {props.touched.user && props.errors.user}
            </Text>

            {/* Pass */}
            <PasswordInput
              onchangeTextHandler={props.handleChange('password')}
              val={props.values.password}
              onBlurHandler={props.handleBlur('password')}
              sercureTextState={sercurePass}
              secureTextEntryHandler={securePassEntry}
            />

            <Text style={styles.inputWarning}>
              {props.touched.password && props.errors.password}
            </Text>

            {/* Confilm */}
            <PasswordInput
              onchangeTextHandler={props.handleChange('confilm')}
              val={props.values.confilm}
              onBlurHandler={props.handleBlur('confilm')}
              sercureTextState={sercureConfilm}
              secureTextEntryHandler={secureConfilmEntry}
            />
            <Text style={styles.inputWarning}>
              {props.touched.confilm && props.errors.confilm}
            </Text>

            {/* Submit */}
            <View style={styles.submitField}>
              <SignButton title="Sign Up" submitHandler={props.handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </Animation.View>
  );
};

export default SignUpAction;

const styles = StyleSheet.create({
  signUpAction: {
    backgroundColor: 'white',
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
    borderRadius: 10,
    padding: 35,
    marginHorizontal: 20,
    marginTop: 30,
  },
  inputWarning: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  submitField: {
    flexDirection: 'row',
    marginTop: 7,
    justifyContent: 'center',
  },
});
