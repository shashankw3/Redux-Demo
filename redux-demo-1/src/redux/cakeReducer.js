import BUY_CAKES from "./cakeType"
const initialState ={
    numberOfCakes:10
}

const cakeReducer=(state=initialState,action)=>{
    console.log("from reducer",state.numberOfCakes,action.type)
    switch(action.type){
        case BUY_CAKES:return {
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
        default :return state
    }
    
}

export default cakeReducer