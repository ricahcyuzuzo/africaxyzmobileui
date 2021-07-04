import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native';
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import PayLogo from './images/paypal1.png';
import Avatar from './images/avatar.png';
import Vector from './images/vector.png';

const Home = ({navigation}) => {


    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, width: '100%'}}>
        <ScrollView>  
            <View style={{
                flex: 3,
                height: 300,
                width: '100%',
                backgroundColor: '#3A47AE',
                borderBottomRightRadius: 40,
                shadowColor: "#29297A",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 40.00,
                elevation: 40,
                justifyContent: 'center', 
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 50,
                    marginLeft: 5,
                    marginRight: 25
                }}>
                    <View >
                    <Image source={PayLogo} style={{
                        width: 70,
                        height: 70,
                        marginBottom: 20
                    }} />
                    </View>
                    <View style={{
                        backgroundColor: 'cyan',
                        width: 50,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <ImageBackground source={Avatar} style={{
                            width: 45,
                            height: 45,
                            borderRadius: 15
                        }}/>
                    </View>
                </View>
                <View>
                <Text style={{
                    marginLeft: 30,
                    marginTop:5,
                    color: '#fff'
                }}>Hello Vidam!</Text>
                </View>
                <View style={{ 
                    marginBottom: 50, 
                    marginTop: 40,
                    marginLeft: 30 
                }}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginBottom: 12
                    }}>$ 272.30</Text>
                    <Text style={{
                        color: '#fff'
                    }}>Your Balance</Text>
                </View>
            </View>

            <View style={{
                flex: 4,
                paddingLeft: 30,
                paddingRight: 40,
            }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Send Money')}>
                    <View style={{ 
                        width: 100, 
                        height: 120, 
                        marginTop: 20, 
                        backgroundColor: '#3A47AE', 
                        borderRadius: 15,
                        shadowColor: "#3A47AE",
                        shadowOffset: {
                        	width: 0,
                        	height: 30,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 40.00,
                        elevation: 40,
                        justifyContent: 'center',
                        paddingTop: 2
                    }}>
                        <Feather style={{paddingLeft: 20}} size={15} name='upload' color='#fff' />
                        <Text style={{color: '#fff', fontSize: 12, width: 70, justifyContent: 'center', paddingLeft: 20, marginTop: 20}}>Send Money</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{ 
                        width: 100, 
                        height: 120, 
                        marginLeft: 20,
                        marginTop: 20,
                        backgroundColor: '#fff', 
                        borderRadius: 15,
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 12,
                        },
                        shadowOpacity: 0.08,
                        shadowRadius: 20.00,
                        elevation: 30,
                        padding: 4
                        }}>

                            <Feather style={{paddingLeft: 20, paddingTop: 16, fontWeight: 'bold'}} size={15} name='download' color='#3A47AE' />
                            <Text style={{color: '#3A47AE', fontSize: 12, width: 70, fontWeight: 'bold', justifyContent: 'center', paddingLeft: 15, marginTop: 20,}}>Request Payment</Text>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{ 
                        width: 60, 
                        height: 120, 
                        marginLeft: 20,
                        marginTop: 20,
                        marginBottom: 25,
                        backgroundColor: '#fff', 
                        borderRadius: 15,
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 12,
                        },
                        shadowOpacity: 0.08,
                        shadowRadius: 30.00,
                        elevation: 30,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color='#233E68' />

                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#484848'
                    }}>Activity</Text>
                    <Text style={{
                        marginTop: 5
                    }}>View all</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 100, width: '100%'}}>

                    <View style={{
                        width: '90%',
                        backgroundColor: '#fff',
                        height: 60,
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 12,
                        },
                        shadowOpacity: 0.08,
                        shadowRadius: 16.00,
                        elevation: 20,
                        borderRadius: 10,
                        marginBottom: 10,
                        displa: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding:10
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={{width: 30, height: 30, borderRadius: 50, alignItems: 'center', marginTop:5, marginRight:5,justifyContent: 'center', backgroundColor: '#c4c4c4'}}>
                            <Text style={{fontWeight: 'bold'}}>M</Text>
                            </View>
                            <View>
                                <Text style={{fontWeight: '700', marginTop: 5, marginLeft: 5}}>Mike Rine</Text>
                                <Text style={{fontWeight: '200', fontSize: 12, marginLeft: 5}}>2 hours ago</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'#2C845E', fontWeight: 'bold'}}>
                                +$250.89
                            </Text>
                        </View>

                    </View>
                    <View style={{
                        backgroundColor: '#fff',
                        width: '90%',
                        height: 60,
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 0,
                        },
                        shadowOpacity: 0.08,
                        shadowRadius: 10.00,
                        elevation: 20,
                        borderRadius: 10,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding:10
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={{width: 30, height: 30, borderRadius: 50, alignItems: 'center', marginTop:5, marginRight:5,justifyContent: 'center', backgroundColor: '#c4c4c4'}}>
                            <Entypo name="google-drive" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{fontWeight: '700', marginTop: 5, marginLeft: 5}}>Google drive</Text>
                                <Text style={{fontWeight: '200', fontSize: 12, marginLeft: 5}}>2 hours ago</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'red', fontWeight: 'bold'}}>
                                -$130.09
                            </Text>
                        </View>

                    </View>
                
                    <View style={{
                        backgroundColor: '#fff',
                        width: '90%',
                        height: 60,
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 0,
                        },
                        shadowOpacity: 0.08,
                        shadowRadius:25.00,
                        elevation: 30,
                        borderRadius: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding:10
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={{width: 30, height: 30, borderRadius: 50, alignItems: 'center', marginTop:5, marginRight:5,justifyContent: 'center', backgroundColor: '#c4c4c4'}}>
                            <Text style={{fontWeight: 'bold'}}>C</Text>
                            </View>
                            <View>
                                <Text style={{fontWeight: '700', marginTop: 5, marginLeft: 5}}>Cosey Smith</Text>
                                <Text style={{fontWeight: '200', fontSize: 12, marginLeft: 5}}>2 hours ago</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'green', fontWeight: 'bold'}}>
                                +$39.89
                            </Text>
                        </View>
                    </View>                    
                </View>
            </View>
            </ScrollView>
        </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex: 1,
    },
});
