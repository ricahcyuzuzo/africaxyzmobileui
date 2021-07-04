import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';
import Home from './screens/Home';
import SendMoney from './screens/SendMoney';
import Login from './screens/Login';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
      background: '#fff'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={TabNavigator} options={{headerShown: false }} />
        <Stack.Screen name='Send Money' component={SendMoney} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: '#fff', borderRadius: 10}}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#000',
        style: {
          height: 70,
          position: 'absolute',
          paddingBottom: 40,
        },
        labelStyle:{
          marginTop: 30,
          margin: 0,
        },
        iconStyle: { 
        },
        tabStyle: {
          flexDirection: 'row',
        },
      }}
      lazy={true}

      screenOptions={({route}) =>( {
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 14, fontWeight: '600', color: 'blue', marginTop: 30}}>{focused ? route.name : ""}</Text>
        },
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home'){
                iconName = 'home-variant-outline'
            }else if(route.name === 'Accounts'){
                iconName = 'account-multiple-outline'
            }else if(route.name === 'Wallet'){
                iconName = 'wallet-outline'
            }else if(route.name === 'Settings'){
                iconName = 'cog-outline'
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        },
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Accounts" component={Home} />
      <Tab.Screen name="Wallet" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
