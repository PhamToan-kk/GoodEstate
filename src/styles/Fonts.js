import { Platform,StyleSheet} from 'react-native';


const fontFamilies = {
    normal_OS:'AppleSDGothicNeo-Bold',//chu nghieng
    inclined_OS:'AvenirNextCondensed-BoldItalic'//chu thuong
}


export const Fonts = StyleSheet.create({
    //TEXT  
    normalFontFamily:{
        fontFamily:Platform.OS?fontFamilies.normal_OS:fontFamilies.normal_OS
    },

   
})