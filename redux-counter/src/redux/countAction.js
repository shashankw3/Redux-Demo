import { DECREMENT, INCREMENT } from "./countActionType"


const incrementCounter=()=>{
    return {
        type:INCREMENT
    }
}

const decrementCounter=()=>{
    return {
        type:DECREMENT
    }
}

export  {incrementCounter, decrementCounter}