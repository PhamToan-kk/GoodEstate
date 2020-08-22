import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

export const ResultScreen = ({
    navigation
}) => (
    <View style={{paddingTop:100}}>
        <Text>ResultScreen</Text>
        <TouchableOpacity
        
            onPress={()=>navigation.navigate('DetailResult')}
        >
            <Text>xemDFGDFGDFG34235 t</Text>
            
        </TouchableOpacity>
    </View>
);

 
