import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {cakeReducer} from '../cake/cakereducer'
import thunk from 'redux-thunk'
import {userReducer} from '../user/UserReducer'
import {comRed} from './combinereducer'


export const store = createStore(comRed, applyMiddleware(thunk))
