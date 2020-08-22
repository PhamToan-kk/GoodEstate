import {Colors} from './Colors'
import color from 'color'
export const Styles = {
    headerText:{
        fontWeight:'600',
        color:Colors.Sapphire
    },
    grayTxt:{
        fontWeight:'500',
        color:color(Colors.gray_Text).darken(0.7).alpha(0.6),
    },

    mid_centerView:{
        justifyContent:'center',
        alignItems:'center'
    },
    row_between_center_View:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    
    between_center_View:{
        alignItems:'center',
        justifyContent:'space-between'
    },
    row_no_center_View:{
        flexDirection:'row',
        alignItems:'center',
    }

}