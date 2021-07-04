import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const SendMoney = ({ navigation }) => {
    return (

            <View style={{flex: 1, width: '100%', marginTop: 40, marginLeft: 20}}>
                <ScrollView>
                
                <View style={{flex: 1, width: '100%'}}>
                    <View style={{flexDirection: 'row', marginBottom: 40}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><MaterialCommunityIcons name='keyboard-backspace' size={30} color='black' /></TouchableOpacity>
                        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 80}}>Send Money</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                        <View style={{width: 50, height: 50, borderRadius: 20, justifyContent:'center',alignItems: 'center', marginTop:5, marginRight:10, backgroundColor: '#DCDCDC'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>A</Text>
                        </View>
                        <View>
                            <Text>To</Text>
                            <Text style={{fontWeight:'bold'}}>Ann Neilsen</Text>
                            <Text>neiles.ann@gmail.com</Text>
                        </View>
                </View>
                </View>

            <View style={{flex: 5, marginTop: 40}}>
            <Ionicons name="logo-usd" size={30} color="black" style={{position: 'absolute', marginTop: 15, marginLeft: 10}} />
                <TextInput value='150.00' style={{
                    borderRadius: 20,
                    borderWidth: 1.5,
                    borderColor: '#233E68',
                    width: '90%',
                    fontSize: 30,
                    fontWeight: 'bold',
                    padding: 10,
                    paddingLeft: 40,
                    height: 60
                }} />

            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: '80%', }}>
            <View style={{marginTop: 40 }}>
                <View style={{display: 'flex', flexDirection: 'row', width:'100%'}}>
                    <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>1</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>2</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>3</Text></View></TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', width:'100%'}}>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>4</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>5</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>6</Text></View></TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', width:'100%'}}>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>7</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>8</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>9</Text></View></TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', width:'100%'}}>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>0</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.buttonNumbers}><Text style={{fontWeight: 'bold'}}>.</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.buttonNumbers}><Feather style={{fontWeight: 'bold'}} name='delete' size={15} color='black' /></View></TouchableOpacity>
                </View>
            </View>
            </View>
            </View>
            <View style={{
                marginRight: 5,
            }}>
            <GradientButton
                    style={styles.loginButton} 
                    text='Send' 
                    width='90%' 
                    deepBlue 
                    impact
                    radius={25}
                />
            </View>
            </ScrollView>
            </View>
    )
}

export default SendMoney;

const styles = StyleSheet.create({
    buttonNumbers: {
        justifyContent: 'center',
        alignItems:'center',
        width: 60,
        height: 60,
        backgroundColor: '#fff', 
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.08,
        shadowRadius: 10.00,
        elevation: 30,
        marginLeft: 40,
        marginBottom: 20
    },
    loginButton: {
        marginTop: 20,
        marginBottom: 60,
        shadowColor: '#24376D',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.08,
        shadowRadius: 20.00,
        elevation: 20,
        marginRight: 20

    }
})
