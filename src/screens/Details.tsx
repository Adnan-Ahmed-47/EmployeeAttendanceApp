// import React, { useState } from 'react';
// // import DatePicker from 'react-native-date-picker';
// import { Button, ScrollView } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// import {
//   Alert,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import * as Yup from 'yup';
// import { Formik } from 'formik';

// const AttendanceSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(6, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Please enter your full name'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Please enter your email Address.'),
//   date: Yup.string()
//     .required('Please select the date'),
//   timeIn: Yup.string()
//     .required('Please select time In'),
//   timeOut: Yup.string()
//     .required('Please select time Out'),
//   notes: Yup.string()
//     .min(10, 'Too Short')
//     .max(1000, 'Too Long'),

// })

// const App = () => {

//   // DATE
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   // const [dateDisplay, setDateDisplay] = useState('')
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const formatDate = (dateString:any) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
//     const day = String(date.getDate()).padStart(2, '0');
//     // console.warn(`${year}-${month}-${day}`)
//     return `${day}-${month}-${year}`;
//   };

//   // const handleConfirm = (date: any) => {
//   //   // console.warn("A date has been picked: ", date);
//   //   let dispDate = date.toDateString()
//   //   // setDateDisplay(dispDate)
//   //   // setFieldValue('date', dispDate)

//   //   hideDatePicker();
//   // };

//   // TIME IN
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
//   // const [timeDisplay, setTimeDisplay] = useState('')
//   const showTimePicker = () => {
//     setTimePickerVisibility(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false);
//   };

//   // const handleTimeConfirm = (time: any) => {
//   //   // console.warn("A date has been picked: ", time);
//   //   const date = new Date(time);
//   //   setTimeDisplay(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
//   //   hideTimePicker();
//   // };

//   // TIME OUT
//   const [isTimePickerVisible1, setTimePickerVisibility1] = useState(false);
//   // const [timeDisplay1, setTimeDisplay1] = useState('')
//   const showTimePicker1 = () => {
//     setTimePickerVisibility1(true);
//   };

//   const hideTimePicker1 = () => {
//     setTimePickerVisibility1(false);
//   };

//   // const handleTimeConfirm1 = (time: any) => {
//   //   // console.warn("A date has been picked: ", time);
//   //   const date = new Date(time);
//   //   setTimeDisplay1(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
//   //   hideTimePicker1();
//   // };


//   return (
//     <Formik initialValues={{
//       name: '',
//       email: '',
//       date: '',
//       timeIn: '',
//       timeOut: '',
//       notes: '',
//     }}
//       validationSchema={AttendanceSchema}
//       onSubmit={values => { Alert.alert(JSON.stringify(values.date))
//       console.warn(values) }}
//     >
//       {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, setFieldValue }) => (

//         <View style={styles.container}>
//           <View style={styles.formContainer}>
//             <StatusBar />
//             <Text style={styles.title}>Employee Attendance</Text>

//             {/* NAME */}
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={styles.inputStyle}
//                 placeholder='Enter your name'
//                 value={values.name}
//                 onChangeText={handleChange('name')}
//                 onBlur={() => { setFieldTouched('name') }}
//               />
//               {touched.name && errors.name && (
//                 <Text style={styles.errorTxt}>{errors.name}</Text>
//               )}
//             </View>

//             {/* Email */}
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={styles.inputStyle}
//                 placeholder='Enter your email'
//                 value={values.email}
//                 onChangeText={handleChange('email')}
//                 onBlur={() => setFieldTouched('email')}
//               />
//               {touched.email && errors.email && (
//                 <Text style={styles.errorTxt}>{errors.email}</Text>
//               )}
//             </View>

//             {/* DATE */}
//             <View style={styles.inputWrapper}>
//               <TouchableOpacity onPress={showDatePicker}>
//                 <TextInput
//                   value={values.date}
//                   style={[styles.inputStyle, { color: 'black' }]}
//                   readOnly
//                   placeholder='Select the date'
//                 // onChangeText={handleChange('date')}
//                 // onBlur={() => { setFieldTouched('date') }}
//                 />
//                 <DateTimePickerModal
//                   isVisible={isDatePickerVisible}
//                   mode="date"
//                   maximumDate={new Date()}
//                   onConfirm={(date) => {
//                     let dispDate = date.toDateString()
//                     setFieldValue('date', formatDate(dispDate))
//                     hideDatePicker()
//                   }}
//                   // onConfirm={(date) => {
//                   //   let dispDate = date.toDateString()
//                   //   setFieldValue('date', dispDate)
//                   //   hideDatePicker()
//                   // }}
//                   onCancel={hideDatePicker}
//                 />
//               </TouchableOpacity>
//               {/* {touched.date && errors.date && (
//                 <Text style={styles.errorTxt}>{errors.date}</Text>
//               )} */}
//             </View>

//             {/* TIME IN */}
//             <View style={styles.inputWrapper}>
//               <TouchableOpacity onPress={showTimePicker}>
//                 <TextInput
//                   value={values.timeIn}
//                   style={[styles.inputStyle, { color: 'black' }]}
//                   placeholder='Time In'
//                   // onChangeText={handleChange('email')}
//                   // onBlur={() => setFieldTouched('email')}
//                   readOnly
//                 />
//                 <DateTimePickerModal
//                   isVisible={isTimePickerVisible}
//                   mode="time"
//                   onConfirm={(time) => {
//                     let date = new Date(time);
//                     let tym = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
//                     setFieldValue('timeIn', tym)
//                     hideTimePicker()
//                   }}
//                   onCancel={hideTimePicker}
//                 />
//               </TouchableOpacity>
//             </View>

//             {/* TIME-OUT */}
//             <View style={styles.inputWrapper}>
//               <TouchableOpacity onPress={showTimePicker1}>
//                 <TextInput
//                   value={values.timeOut}
//                   style={[styles.inputStyle, { color: 'black' }]}
//                   placeholder='Time Out'
//                   readOnly
//                 />
//               </TouchableOpacity>
//               <DateTimePickerModal
//                 isVisible={isTimePickerVisible1}
//                 mode="time"
//                 onConfirm={(time) => {
//                   const date = new Date(time);
//                   let tym1 = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
//                   setFieldValue('timeOut', tym1)
//                   hideTimePicker1();
//                 }}
//                 onCancel={hideTimePicker1}
//               />
//             </View>

//             <View>
//               <TextInput
//                 multiline
//                 numberOfLines={4}
//                 style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
//                 placeholder="Enter your text here"
//                 value={values.notes}
//                 onChangeText={handleChange('notes')}
//                 onBlur={() => setFieldTouched('notes')}
//               />
//             </View>

//             <TouchableOpacity
//               onPress={() => { handleSubmit() }}
//               disabled={!isValid}
//               style={[styles.submitBtn, { backgroundColor: isValid ? '#395B64' : '#A5C9CA' }]}
//             >
//               <Text style={styles.submitBtnTxt}>Submit</Text>
//             </TouchableOpacity>

//           </View>

//         </View>

//       )}

//     </Formik>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginTop: 40,
//   },
//   formContainer: {
//     // height: 450,
//     width: '100%',
//     backgroundColor: 'bisque',
//     padding: 15,
//     borderRadius: 10
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 15
//   },
//   inputWrapper: {
//     marginBottom: 15
//   },
//   inputStyle: {
//     borderColor: '#16213E',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10
//   },
//   errorTxt: {
//     fontSize: 12,
//     color: '#FF0D10'
//   },
//   submitBtn: {
//     backgroundColor: '#395B64',
//     marginTop: 25,
//     padding: 10,
//     borderRadius: 15,
//     justifyContent: 'center'
//   },
//   submitBtnTxt: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '700'
//   },
// });

// export default App;

// ______________________________________________________________________


import React, { useState } from 'react';
// import DatePicker from 'react-native-date-picker';
import { Button, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

// type safety
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

// If u dont want to give props then u can use Navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import * as Yup from 'yup';
import { Formik } from 'formik';

const AttendanceSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(6, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Please enter your full name'),
  // email: Yup.string()
  //   .email('Invalid email')
  //   .required('Please enter your email Address.'),
  date: Yup.string()
    .required('Please select the date'),
  timeIn: Yup.string()
    .required('Time In is required'),
  timeOut: Yup.string()
    .required('Time Out is required'),
  notes: Yup.string()
    .min(10, 'Too Short')
    .max(1000, 'Too Long'),

})

const Details = ({ route }: DetailsProps) => {

  const { loginData } = route.params
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()



  // DATE
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [dateDisplay, setDateDisplay] = useState('')
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
    // console.warn(`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`;
  };

  // const handleConfirm = (date: any) => {
  //   // console.warn("A date has been picked: ", date);
  //   let dispDate = date.toDateString()
  //   // setDateDisplay(dispDate)
  //   // setFieldValue('date', dispDate)

  //   hideDatePicker();
  // };

  // TIME IN
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  // const [timeDisplay, setTimeDisplay] = useState('')
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // const handleTimeConfirm = (time: any) => {
  //   // console.warn("A date has been picked: ", time);
  //   const date = new Date(time);
  //   setTimeDisplay(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
  //   hideTimePicker();
  // };

  // TIME OUT
  const [isTimePickerVisible1, setTimePickerVisibility1] = useState(false);
  // const [timeDisplay1, setTimeDisplay1] = useState('')
  const showTimePicker1 = () => {
    setTimePickerVisibility1(true);
  };

  const hideTimePicker1 = () => {
    setTimePickerVisibility1(false);
  };

  // const handleTimeConfirm1 = (time: any) => {
  //   // console.warn("A date has been picked: ", time);
  //   const date = new Date(time);
  //   setTimeDisplay1(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
  //   hideTimePicker1();
  // };
  const addAttendance = async (data: any) => {
    let a = await fetch('https://attendance-server-i9hw.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: loginData._id,
        date: data.date,
        time_in: data.timeIn,
        time_out: data.timeOut,
        notes: data.notes
      })
    })
    let res = await a.json()
    Alert.alert(res.message)
    navigation.replace("EmpInfo", { loginData })
  }

  return (
    <Formik initialValues={{
      // name: '',
      // email: '',
      date: '',
      timeIn: '',
      timeOut: '',
      notes: '',
    }}
      validationSchema={AttendanceSchema}
      onSubmit={(values, { resetForm }) => {
        // Alert.alert("Submitted Successfully")
        resetForm()
        addAttendance(values)
        // Alert.alert(JSON.stringify(values.date))
        // console.warn(values)
      }}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, setFieldValue }) => (

        <>
          <ScrollView style={styles.page}>
            {/* Top Details */}
            {/* <View style={styles.topContainer}>
            <View style={styles.details}>
              <Text style={styles.heading}>Hello {loginData.name}</Text>
              <Text style={styles.mail}>{loginData.email}</Text>
            </View>

            <View style={styles.details}>
            <TouchableOpacity
              style={styles.detailsBtn}
              onPress={()=>{
                navigation.replace("EmpInfo", {loginData})
              }}
            >
              <Text style={styles.detailsBtnTxt}>Back</Text>
            </TouchableOpacity>
            </View>
          </View> */}


            <View style={styles.container}>
              <View style={styles.formContainer}>
                <StatusBar />
                <Text style={styles.title}>Employee Attendance</Text>

                {/* NAME */}
                {/* <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Enter your name'
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => { setFieldTouched('name') }}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorTxt}>{errors.name}</Text>
              )}
            </View> */}

                {/* Email */}
                {/* <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Enter your email'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
              )}
            </View> */}

                {/* DATE */}
                <View style={styles.inputWrapper}>
                  <TouchableOpacity onPress={showDatePicker}>
                    <TextInput
                      value={values.date}
                      style={[styles.inputStyle, { color: 'black' }]}
                      readOnly
                      placeholder='Select the date'
                      onChangeText={handleChange('date')}
                      onBlur={() => { setFieldTouched('date') }}
                    />
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      maximumDate={new Date()}
                      onConfirm={(date) => {
                        let dispDate = date.toDateString()
                        setFieldValue('date', formatDate(dispDate))
                        hideDatePicker()
                      }}
                      // onConfirm={(date) => {
                      //   let dispDate = date.toDateString()
                      //   setFieldValue('date', dispDate)
                      //   hideDatePicker()
                      // }}
                      onCancel={hideDatePicker}
                    />
                  </TouchableOpacity>
                  {touched.date && errors.date && (
                    <Text style={styles.errorTxt}>{errors.date}</Text>
                  )}
                </View>

                {/* TIME IN */}
                <View style={styles.inputWrapper}>
                  <TouchableOpacity onPress={showTimePicker}>
                    <TextInput
                      value={values.timeIn}
                      style={[styles.inputStyle, { color: 'black' }]}
                      placeholder='Time In'
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      readOnly
                    />
                    <DateTimePickerModal
                      isVisible={isTimePickerVisible}
                      mode="time"
                      onConfirm={(time) => {
                        let date = new Date(time);
                        let tym = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
                        setFieldValue('timeIn', tym)
                        hideTimePicker()
                      }}
                      onCancel={hideTimePicker}
                    />
                    {touched.timeIn && errors.timeIn && (
                      <Text style={styles.errorTxt}>{errors.timeIn}</Text>
                    )}
                  </TouchableOpacity>
                </View>

                {/* TIME-OUT */}
                <View style={styles.inputWrapper}>
                  <TouchableOpacity onPress={showTimePicker1}>
                    <TextInput
                      value={values.timeOut}
                      style={[styles.inputStyle, { color: 'black' }]}
                      placeholder='Time Out'
                      readOnly
                    />
                    {touched.timeOut && errors.timeOut && (
                      <Text style={styles.errorTxt}>{errors.timeOut}</Text>
                    )}
                  </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible1}
                    mode="time"
                    onConfirm={(time) => {
                      const date = new Date(time);
                      let tym1 = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
                      setFieldValue('timeOut', tym1)
                      hideTimePicker1();
                    }}
                    onCancel={hideTimePicker1}
                  />
                </View>

                <View>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
                    placeholder="Enter your text here"
                    value={values.notes}
                    onChangeText={handleChange('notes')}
                    onBlur={() => setFieldTouched('notes')}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    handleSubmit()
                    // navigation.goBack()
                  }}
                  disabled={!isValid}
                  style={[styles.submitBtn, { backgroundColor: isValid ? '#944E63' : '#CAA6A6' }]}
                // style={[styles.submitBtn, { backgroundColor: isValid ? '#395B64' : '#A5C9CA' }]}
                >
                  <Text style={styles.submitBtnTxt}>Submit</Text>
                </TouchableOpacity>

                {/* Logout Button */}
                <TouchableOpacity
                  onPress={() => {
                    // navigation.replace("Login", {})
                    navigation.replace("EmpInfo", { loginData })
                  }}
                  style={styles.logoutBtn}
                >
                  <Text style={styles.logoutBtnTxt}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
      )}

    </Formik>
  )
}

export default Details;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFE7E7'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 40,
  },
  formContainer: {
    // height: 450,
    width: '100%',
    // backgroundColor: 'bisque',
    backgroundColor: '#FFE7E7',
    padding: 15,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginBottom: 15
  },
  inputWrapper: {
    marginBottom: 15
  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  errorTxt: {
    fontSize: 12,
    color: '#FF0D10'
  },
  submitBtn: {
    // backgroundColor: '#944E63',
    // backgroundColor: '#395B64',
    marginTop: 25,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center'
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  },
  logoutBtn: {
    backgroundColor: '#944E63',
    marginTop: 25,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',

  },
  logoutBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  },
});











