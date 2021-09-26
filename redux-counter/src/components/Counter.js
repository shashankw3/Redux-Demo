import React from 'react'

import {connect} from 'react-redux'
import { incrementCounter,decrementCounter} from '../redux/countAction'

const button={
    backgroundColor:'white',
    border:'2px solid black',
    padding:'20px',
    margin:'10px'
    
}
const heading={
    display:'inline-block',
    margin:'10px'
}
const divStyle={
    border:'2px solid black',
    display:'inline-block',
    
}


function Counter(props) {

    return (
        <div >
            <h1>Redux-Counter</h1>
            <button onClick={props.increment} style={button}>+</button>
            <h1 style={heading}>{props.count}</h1>
            <button onClick={props.decrement}  style={button}>-</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        count:state.count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        increment:()=>dispatch(incrementCounter()),
        decrement:()=>dispatch(decrementCounter())
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
) (Counter)
