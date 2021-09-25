const redux = require('redux')
console.log("imported")

const INC = 'INC'

function handleNum(){
    return {
        type:INC,
        info:'increment action'
    }
}

const initialState ={
    number:0
}

const reducer = (state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        
        case 'INC':return {
            ...state,
            number:state.number+1
        }
        default :return state
    }
}

const store = redux.createStore(reducer)
console.log('intial state ' ,store.getState())
const unsubscribe =store.subscribe(()=>console.log(store.getState()))
store.dispatch(handleNum())
unsubscribe()