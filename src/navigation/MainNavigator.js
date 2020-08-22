import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {TabsNavigator} from './TabsNavigator'
import {AuthStackScreens,MainStackScreens} from './StacksNavigator'
import 'react-native-gesture-handler';

const AppXX = ({
    params,
}) => {
    const isSignIn = true
    return(
        <NavigationContainer>
               {isSignIn ?  

               <MainStackScreens/> : 
               <AuthStackScreens/> 
               }
        </NavigationContainer>
    )
};

export default AppXX;