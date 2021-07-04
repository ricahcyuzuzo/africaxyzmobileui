import React from 'react'
import { Text, TextInput, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import PayPalLogo from './images/paypal.png';

const Login = ( { navigation } ) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{width: '100%'}}>
            <View style={styles.logoView}>
                <Image style={styles.logoLogin} source={PayPalLogo} />
            </View>
            <View style={styles.textFieldsView}>
                <TextInput 
                    style={styles.textField}
                    placeholder='Enter your name e-mail'
                />

                <TextInput
                    style={styles.textField}
                    placeholder='Password'
                />

                <GradientButton
                    style={styles.loginButton} 
                    text='Log in' 
                    width='80%' 
                    deepBlue 
                    impact
                    radius={25}
                    onPressAction={() => navigation.navigate('Home')}
                />

                <TouchableOpacity style={styles.text1}>
                    <Text style={{color: 'gray'}}>Having trouble logging in?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text2}>
                    <Text style={{color: 'gray'}}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative'
    },
    logoLogin: {
        width: 150,
        height: 80
    },
    logoView: {
        flex: 3,
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
    },
    textFieldsView: {
        width: '100%',
        flex: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textField: {
        borderWidth: 0.2,
        width: '80%',
        textAlign: 'center',
        height: 70,
        borderRadius: 25,
        marginBottom: 10,
        marginTop: 5,
    },
    text1: {
        marginBottom: 40,
        color: 'gray'
    },
    loginButton: {
        marginTop: 20,
        marginBottom: 60,
        position: 'relative',
        shadowColor: '#24376D',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.08,
        shadowRadius: 16.00,
        elevation: 20,
        
    }
    

});
