import {Colors} from './Colors'
import color from 'color'
export const Styles = {

    // Text 
    headerText:{
        fontWeight:'600',
        color:Colors.Sapphire
    },
    grayTxt:{
        fontWeight:'500',
        color:color(Colors.gray_Text).darken(0.7).alpha(0.6),
    },
    // general View
    
    mid_centerView:{
        justifyContent:'center',
        alignItems:'center'
    },    
    between_center_View:{
        alignItems:'center',
        justifyContent:'space-between'
    },


    //flexDirection:'row'
    row_no_center_View:{
        flexDirection:'row',
        alignItems:'center',
    },
    row_no_start_View:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    row_no_end_View:{
        flexDirection:'row',
        alignItems:'flex-end'
    },
    row_between_center_View:{             //justifyContent:'space-between',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    row_between_start_View:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
    row_between_end_View:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },

}