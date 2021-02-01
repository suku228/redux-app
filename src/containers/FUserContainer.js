import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake, makeCake} from '../redux/cake/cakeaction'
import {comRed} from '../redux/store/combinereducer'



function FUserContainer() {
    const state = useSelector(state=>state.cake);
    const dispatch = useDispatch()
    console.log(state)
    return (
        <div>
            <h1>Cake:{state.count}</h1>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
            <button onClick={()=>dispatch(makeCake())}>make cake</button>
        </div>
    )
}

export default FUserContainer
