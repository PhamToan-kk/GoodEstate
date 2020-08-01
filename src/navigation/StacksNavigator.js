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
    SearchScreen
    
} from '../containers'
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const HistoryStack = createStackNavigator()
const AuthStack = createStackNavigator()

export const AuthStackScreens = ({navigation})=>{
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen component={SignInScreen} name={'SignIn'}/>
            <AuthStack.Screen component={RegisterScreen} name={'Register'}/>
            <AuthStack.Screen component={ResetPassWordScreen} name={'ResetPassWord'}/>
        </AuthStack.Navigator>
    )
}

export const SearchStackScreens = ({navigation})=>{
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen component={SearchScreen} name={'Search'} />
            <SearchStack.Screen component={ResultScreen} name={'Result'} />
            <SearchStack.Screen component={DetailResultScreen} name={'DetailResult'} />
        </SearchStack.Navigator>
    )
}

export const HomeStackScreens = ({navigation})=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen component={HomeScreen} name={'Home'}/>
            <SearchStack.Screen component={DetailResultScreen} name={'DetailResult'} />
        </HomeStack.Navigator>
    )
}

export const HistoryStackScreens = ({navigation})=>{
    return(
        <HistoryStack.Navigator>
            <HistoryStack.Screen component={HistoryScreen} name={'history'}/>
        </HistoryStack.Navigator>
    )
}