import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {cakeReducer} from '../cake/cakereducer'
import thunk from 'redux-thunk'

export const store = createStore(cakeReducer, applyMiddleware(thunk))
