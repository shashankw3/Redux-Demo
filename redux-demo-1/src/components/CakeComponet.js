import React from 'react'
import buyCakes from '../redux'
import {connect} from 'react-redux'

function CakeComponet(props) {
    console.log("werwer",props)
    return (
        
        <div>
            <h1>Number of Cakes:{props.numberOfCakes}</h1>
            <button onClick={props.buyCakes}>Buy Cake</button>
        </div>
      
        
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return {
        numberOfCakes:state.numberOfCakes
    }
}


const mapDispatchToProps=dispatch=>{
    return {
        buyCakes:()=>dispatch(buyCakes())
    }
}
export default   connect(mapStateToProps,mapDispatchToProps)(CakeComponet)
