import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

export const SearchScreen = ({
    navigation
}) => (
    <View>
        <Text>SearchScreen</Text>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Result')}
        >
            <Text>xem result</Text>
            
        </TouchableOpacity>
    </View>
);

 
