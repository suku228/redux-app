import React from 'react'
import {BUY_CAKE, MAKE_A_CAKE} from './cakeconstants'

const initialState = {
    count:100
}

export const cakeReducer = (state = initialState, actions)=>{
    console.log(state, actions)
    switch(actions.type){
        case 'BUY_CAKE':
            return {count:state.count-1};
        case 'MAKE_A_CAKE':
            return {count:state.count+1}
        default : 
        return state;
    }
}