import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Login1 = () => {
    return (
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: 150, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 15, borderRadius: 100, width: 150, height: 150 }}></View>
            </View>

            <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>GROW</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
            </View>

            <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>We will help you to grow your business </Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}> using online server</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={{

                    width: 119, height: 48, marginRight: 70, backgroundColor: '#E3C000', borderRadius: 20, justifyContent: 'center'
                }}><Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text></View>




                <View style={{
                    width: 119, height: 48, backgroundColor: '#E3C000', borderRadius: 20, justifyContent: 'center'
                }}><Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>SIGN UP</Text></View>
            </View>
        </SafeAreaView >
    )
}

export default Login1