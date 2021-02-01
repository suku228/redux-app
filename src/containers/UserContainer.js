import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/user/UserActions'

function UserContainer(props) {
    console.log('user container', props)
    React.useEffect(()=>{
        props.fetchusers()
    }, [])
    return (
        <div>
            <h1>User container</h1>
            {props.state.user.data.map((obj, key)=>{
                return <h1 key={key}>{obj.name}</h1>
            })} 
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        state:state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchusers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)