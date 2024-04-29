import React, { useState } from 'react'

import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

// type safety
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

import * as Yup from 'yup';
import { Formik } from 'formik';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email Address.'),

  password: Yup.string()
    .min(8, "Must contain atleast 8 characters")
    .required('This field is mandatory')
})

const Login = ({navigation}: LoginProps) => {

  const loginForm = async(data:any)=>{
    const a = await fetch('https://attendance-server-i9hw.onrender.com/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email:data.email.toLowerCase(), password:data.password }),
              credentials: 'include',
            });
            const res = await a.json();
            res.message&&Alert.alert(res.message)
            res.data && res.data.isAdmin ? navigation.replace("EmpList", {loginData: res.data}) : navigation.replace("EmpInfo", {loginData: res.data})         
  }


  return (
    <Formik initialValues={{
      email: '',
      password: ''
    }}
      validationSchema={LoginSchema}
      onSubmit={(values, {resetForm}) => {
        resetForm()
        loginForm(values)   
        // Alert.alert(JSON.stringify(values))
        // console.warn(values)
      }}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, setFieldValue }) => (

        <View style={styles.container}>
          <View style={styles.formContainer}>
            <StatusBar />
            <Text style={styles.title}>LOGIN FORM</Text>

            {/* Email */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Enter your email'
                placeholderTextColor={'white'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
              )}
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Enter your password'
                placeholderTextColor={'white'}
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              onPress={() => { 
                handleSubmit()
                // navigation.replace("Details", {employeeId: ''}) 
                // navigation.navigate("Details", {employeeDetails: item}) 
              }}
              disabled={!isValid}
              style={[styles.submitBtn, { backgroundColor: isValid ? 'white' : '#944E63' }]}
            >
              <Text style={styles.submitBtnTxt}>Login</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    // marginTop: 40,
    backgroundColor: '#944E63'
  },
  formContainer: {
    width: '100%',
    // backgroundColor: '#535C68',
    paddingHorizontal: 15,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    // color: 'black',
    textAlign: 'center',
    marginBottom: 15
  },
  inputWrapper: {
    marginBottom: 15
  },
  inputStyle: {
    // borderColor: '#16213E',
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  errorTxt: {
    fontSize: 12,
    color: 'white'
    // color: '#FF0D10'
  },
  submitBtn: {
    // backgroundColor: 'black',
    // backgroundColor: '#395B64',
    marginTop: 25,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center'
  },
  submitBtnTxt: {
    color: '#944E63',
    // color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  },
});


export default Login;
