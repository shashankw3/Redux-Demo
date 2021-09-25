import React from 'react'

import {connect} from 'react-redux'
import { incrementCounter,decrementCounter} from '../redux/countAction'



function Counter(props) {

    return (
        <div>
            <h1>Count:{props.count}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
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
