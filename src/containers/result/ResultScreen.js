import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

export const ResultScreen = ({
    navigation
}) => (
    <View>
        <Text>ResultScreen</Text>
        <TouchableOpacity
            onPress={()=>navigation.navigate('DetailResult')}
        >
            <Text>xem Detail result</Text>
            
        </TouchableOpacity>
    </View>
);

 
