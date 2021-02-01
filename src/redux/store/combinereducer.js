import {userReducer} from '../user/UserReducer'
import {cakeReducer} from '../cake/cakereducer'
import {combineReducers} from 'redux'

export const comRed = combineReducers({
    cake:cakeReducer,
    user:userReducer
})