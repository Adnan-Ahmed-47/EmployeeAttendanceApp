import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type EmpListProps = NativeStackScreenProps<RootStackParamList, "EmpList">

const EmpList = ({ route }: EmpListProps) => {

    // const lo = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [refresh, setrefresh] = useState(false)
    const [empData, setEmpData] = useState([])
    const getEmpData = async () => {
        let a = await fetch('https://attendance-server-i9hw.onrender.com/employees')
        let res = await a.json()
        setEmpData(res)
    }
    useEffect(() => {
        getEmpData()
    }, [refresh])
    // console.warn(empData)

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Employees Login Information</Text>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.headerCell}>Name</Text>
                    <Text style={styles.headerCell}>Email</Text>
                    {/* <Text style={styles.headerCell}>Time OUT</Text> */}
                </View>

                <>
                    {
                        empData.map((e: any) =>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.replace("AttendanceDetails", { e })
                                }}
                            >
                                <View style={styles.row} key={e._id}>
                                    <Text style={styles.cell}>{e.name}</Text>
                                    <Text style={styles.cell}>{e.email}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }

                    {/* Logout Button */}
                </>

            </View>
            <View style={styles.btn}>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.replace("Login", {})
                        navigation.replace("Login", {})
                    }}
                    style={styles.logoutBtn}
                >
                    <Text style={styles.logoutBtnTxt}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EmpList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE7E7',
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
        alignItems: 'center'
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
})