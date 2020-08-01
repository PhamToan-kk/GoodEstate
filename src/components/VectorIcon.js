import React from "react";
import MIonicons from "react-native-vector-icons/dist/Ionicons";
import MEntypo from "react-native-vector-icons/dist/Entypo";
import MAntDesign from "react-native-vector-icons/dist/AntDesign";
import MEvilIcons from "react-native-vector-icons/dist/EvilIcons";
import MFontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MFeather from "react-native-vector-icons/dist/Feather";
import MMaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import MMaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import MFontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import MFoundation from "react-native-vector-icons/dist/Foundation";

export const VectorIcon = (props) => {
    const {
        Ionicons,
        Entypo,
        AntDesign,
        EvilIcons,
        FontAwesome,
        Feather,
        MaterialCommunityIcons,
        MaterialIcons,
        FontAwesome5,
        Foundation
    } = props;
    if (Ionicons) {
        return <MIonicons {...props} />
    }
    if (Entypo) {
        return <MEntypo {...props} />
    }
    if (AntDesign) {
        return <MAntDesign {...props} />
    }
    if (EvilIcons) {
        return <MEvilIcons {...props} />
    }
    if (FontAwesome) {
        return <MFontAwesome {...props} />
    }
    if (MaterialCommunityIcons) {
        return <MMaterialCommunityIcons {...props} />
    }
    if (MaterialIcons) {
        return <MMaterialIcons {...props} />
    }
    if (Feather) {
        return <MFeather {...props} />
    }
    if (FontAwesome5) {
        return <MFontAwesome5 {...props} />
    }
    if (Foundation) {
        return <MFoundation {...props} />
    }

    return null;
}
