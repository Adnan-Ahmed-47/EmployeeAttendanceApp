import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type EmpInfoProps = NativeStackScreenProps<RootStackParamList, 'EmpInfo'>

const EmpInfo = ({ route }: EmpInfoProps) => {

    const { loginData } = route.params
    // console.warn(loginData)
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


    const [attendanceData, setAttendanceData] = useState<any>([]);
    const currentDate = new Date();
    const fromDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString().split('T')[0]
    const toDate = currentDate.toISOString().split('T')[0]

    const getData = async () => {
        let response = await fetch(`https://attendance-server-i9hw.onrender.com/attendance/${loginData._id}/${fromDate}/${toDate}`);
        let {data} = await response.json();
        setAttendanceData(data);
    }

    useEffect(() => {
        getData()
    }, [])


    const back = () => {
        // AsyncStorage.clear();
        navigation.replace('Details', { loginData })
    }


    return (
        <View style={styles.container}>

            {/* Top Details */}
          <View style={styles.topContainer}>
            <View style={styles.details}>
              <Text style={styles.heading}>Hello {loginData.name}</Text>
              <Text style={styles.mail}>{loginData.email}</Text>
            </View>

            <View style={styles.details}>
            <TouchableOpacity
              style={styles.detailsBtn}
              onPress={()=>{
                navigation.replace("Login", {})
              }}
            >
              <Text style={styles.detailsBtnTxt}>LogOut</Text>
            </TouchableOpacity>
            </View>
          </View>

            <View style={styles.btn}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={back}
                >
                    <Text style={styles.backBtnTxt}>Submit Attendance</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.headerCell}>Date</Text>
                    <Text style={styles.headerCell}>Time IN</Text>
                    <Text style={styles.headerCell}>Time OUT</Text>
                </View>

                <>
                    {
                        attendanceData && attendanceData.map((e: any) =>

                            <View style={styles.row} key={e._id}>
                                <Text style={styles.cell}>{e.date}</Text>
                                <Text style={styles.cell}>{e.time_in}</Text>
                                <Text style={styles.cell}>{e.time_out}</Text>
                            </View>
                        )}
                </>

            </View>

        </View>
    )
}

export default EmpInfo

const styles = StyleSheet.create({

// Top Container
topContainer: {
    // backgroundColor: '#2B2B52',
    backgroundColor: '#944E63',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  details: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  mail: {
    fontSize: 15,
    color: 'white'
  },
  detailsBtn: {
    // backgroundColor: '#944E63',
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  detailsBtnTxt: {
    // color: '#535C68',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  },






    container: {
        flex: 1,
        backgroundColor: '#FFE7E7'
    },
    table: {
        backgroundColor: '#944E63',
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        marginHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
    },
    headerCell: {
        flex: 1,
        padding: 10,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
    },

    btn: {
        alignItems: 'center'
    },
    backBtn: {
        backgroundColor: '#B47B84',
        marginHorizontal: 15,
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 12,
    },
    backBtnTxt: {
        // color: '#535C68',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
    },
})