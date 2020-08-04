const { BUY_CAKE } = require("./cakeTypes")

const InitialState={
    numOfCakes:10
}

const cakeReducer=(state=InitialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return({
            ...state,
            numOfCakes:state.numOfCakes-1,
        })
        default: return state
    }
    
}

export default cakeReducer