import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

export const HomeScreen = (props) => 
{
    const {navigation} = props
return(
    <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity
            onPress={()=>navigation.navigate('DetailResult')}
        >
            <Text>xem result</Text>
            
        </TouchableOpacity>
    </View>
);
}
 