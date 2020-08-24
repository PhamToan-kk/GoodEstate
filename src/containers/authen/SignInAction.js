import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import * as Animation from 'react-native-animatable';
import {Formik} from 'formik';
import * as yup from 'yup';

import {PasswordInput, UserNameInput, SignButton} from '../../components';

const validSignInSchema = yup.object({
  user: yup.string().required().min(3),
  password: yup.string().required(),
});

const SignInAction = () => {
  const [sercureText, setSercureText] = useState(true);
  const [isRememberUser, setIsRememberUser] = useState(true);

  const secureTextEntry = () => {
    setSercureText(!sercureText);
  };

  const rememberUserState = () => {
    setIsRememberUser(!isRememberUser);
  };

  return (
    <Animation.View animation="bounceInRight" style={styles.logInAction}>
      <Formik
        initialValues={{user: '', password: ''}}
        validationSchema={validSignInSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}>
        {(props) => (
          <>
            {/* USER INPUT */}
            <UserNameInput
              val={props.values.user}
              onchangeTextHandler={props.handleChange('user')}
              onBlurHandler={props.handleBlur('user')}
            />

            <Text style={styles.inputWarning}>
              {props.touched.user && props.errors.user}
            </Text>

            {/* PASSWORD INPUT */}
            <PasswordInput
              onchangeTextHandler={props.handleChange('password')}
              val={props.values.password}
              onBlurHandler={props.handleBlur('password')}
              sercureTextState={sercureText}
              secureTextEntryHandler={secureTextEntry}
              placeholderText="Password..."
            />
            <Text style={styles.inputWarning}>
              {props.touched.password && props.errors.password}
            </Text>
            {/* SUBMIT */}
            <View style={styles.submitField}>
              <CheckBox
                checked={isRememberUser}
                title="Remember Me"
                onPress={rememberUserState}
              />
              <SignButton title="Sign In" submitHandler={props.handleSubmit} />
            </View>
          </>
        )}
      </Formik>

      <View style={styles.formatLogin}>
        <View style={styles.formatLoginItem}>
          <Ionicons name="logo-facebook" size={35} />
        </View>
      </View>
    </Animation.View>
  );
};

export default SignInAction;

const styles = StyleSheet.create({
  logInAction: {
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
    backgroundColor: 'white',
  },
  inputWarning: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  submitField: {
    flexDirection: 'row',
    marginTop: 5,
  },
  rememberCheck: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formatLogin: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formatLoginItem: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 70 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
