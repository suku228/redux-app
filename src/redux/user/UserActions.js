import {FETCH_REQUEST,SUCCESS_RESPONSE, FAIL_RESP} from './Userconstants'
import axios from 'axios'

const fetcthRequest = ()=>{
    return{
        loading:true,
        data:[],
        error:'',
        type:FETCH_REQUEST
    }
}

const fetchResponse = (res)=>{
    return{
        loading:false,
        data:res.data,
        error:'',
        type:SUCCESS_RESPONSE
    }
}

const fetchFailResp = (error)=>{
    return{
        loading:false,
        data:[],
        error:error,
        type:FAIL_RESP
    }
}

export const fetchUsers = ()=>{
    return(dispatch)=>{
        dispatch(fetcthRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res)
            dispatch(fetchResponse(res))
        })
        .catch((error)=>{
            console.log(error)
            dispatch(fetchFailResp(error))
        })
    }
}