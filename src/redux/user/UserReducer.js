import {FETCH_REQUEST,SUCCESS_RESPONSE, FAIL_RESP} from './Userconstants'
import {fetcthRequest,fetchResponse, fetchFailResp} from './Userconstants'

const initState = {
    loading:true,
    data:[],
    error:''
}

export const userReducer = (state = initState, actions)=>{
    console.log('reducer',actions)
    switch(actions.type){
        case FETCH_REQUEST:
             return actions;
        
        case SUCCESS_RESPONSE:
            return actions
        case FAIL_RESP:
            return actions
        default : return state;
    }
}