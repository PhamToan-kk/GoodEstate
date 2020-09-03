import { SIGN_IN_SUCCESS } from "../actionTypes";

let initState={

}
 const authReducer=(state=initState,action)=>{
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            
        case SIGN_IN_FAIL:
    
        default:
            return state;
    }
}
export default authReducer;