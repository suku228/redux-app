import React, { Component } from 'react'
import {connect} from 'react-redux'
import {buyCake,makeCake} from '../redux/cake/cakeaction'

class Cakecontainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>CAKE: {this.props.cake.count}</h1>
                <button onClick={()=>this.props.buyCake()}>buyCake</button>
                <button onClick={()=>this.props.makeCake()}>make a cake</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        cake:state
    }
}

const mapStateToDispatch = (dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake()),
        makeCake:()=>dispatch(makeCake())
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Cakecontainer)
