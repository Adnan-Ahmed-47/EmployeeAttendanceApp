import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type AttendanceDetailsProps = NativeStackScreenProps<RootStackParamList, "AttendanceDetails">

const AttendanceDetails = ({ route }: AttendanceDetailsProps) => {

    const { e } = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [attendanceData, setAttendanceData] = useState<any>([]);
    const currentDate = new Date();
    const fromDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString().split('T')[0]
    const toDate = currentDate.toISOString().split('T')[0]

    const getData = async () => {
        let response = await fetch(`https://attendance-server-i9hw.onrender.com/attendance/${e._id}/${fromDate}/${toDate}`);
        let {data} = await response.json();
        setAttendanceData(data);
    }

    useEffect(() => {
        getData()
    }, [])

    const back = () => {
        // AsyncStorage.clear();
        navigation.replace('EmpList', {})
    }

    return (
        <View style={styles.container}>

            <View style={styles.btn}>
            <TouchableOpacity
            onPress={back}
            >
                <View style={styles.backBtn}>

                <Text style={styles.backBtnTxt}>Back</Text>
                </View>
            </TouchableOpacity>
            </View>

            <Text style={styles.heading}>{e.name} Attendance Details</Text>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.headerCell}>Date</Text>
                    <Text style={styles.headerCell}>Time In</Text>
                    <Text style={styles.headerCell}>Time OUT</Text>
                </View>

                <>
                    {
                        attendanceData.map((e: any) =>
                        <View style={styles.row} key={e._id}>
                                <Text style={styles.cell}>{e.date}</Text>
                                <Text style={styles.cell}>{e.time_in}</Text>
                                <Text style={styles.cell}>{e.time_out}</Text>
                        </View>
                        )
                    }
                </>
            </View>
        </View>
    )
}

export default AttendanceDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE7E7'
    },
    heading: {
        // backgroundColor: 'red',
        color: '#944E63',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10

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
        alignItems: 'flex-end',
    },
    backBtn: {
        backgroundColor: '#B47B84',
        marginHorizontal: 15,
        marginVertical: 8,
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