import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
    SignInScreen,
    RegisterScreen,
    ResetPassWordScreen,
    CompareScreen,
    DetailResultScreen,
    HistoryScreen,
    HomeScreen,
    ResultScreen,
    SearchScreen,
    SinglePositionMap,
    ProfileScreen
    
} from '../containers'
import {
    TabsNavigator
} from './TabsNavigator'
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const HistoryStack = createStackNavigator()
const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()

export const AuthStackScreens = ({navigation})=>{
    return(
        <AuthStack.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <AuthStack.Screen component={SignInScreen} name={'SignIn'}/>
            <AuthStack.Screen component={RegisterScreen} name={'Register'}/>
            <AuthStack.Screen component={ResetPassWordScreen} name={'ResetPassWord'}/>
        </AuthStack.Navigator>
    )
}

export const MainStackScreens = ()=>{
    return(
        <MainStack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown:false
        }}
        >
            <MainStack.Screen component={SearchScreen} name={'Search'} />
            <MainStack.Screen component={ProfileScreen} name={'Profile'} />
            <MainStack.Screen component={TabsNavigator} name={'Main'} />
            <MainStack.Screen component={DetailResultScreen} name={'DetailResult'}/>
            <MainStack.Screen component={ResultScreen} name={'Result'}/>   
            <MainStack.Screen component={SinglePositionMap} name={'SinglePositionMap'}/>   
        </MainStack.Navigator>
    )
}
