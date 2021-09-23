import { REGISTER_STATUS } from "./actionTypes"

const initState = {
    signup:{
        loading:false,
        usersList:[]
    }
}

export const  rootReducer = (state=initState,action) => {
    switch(action){
        case REGISTER_STATUS: 
            return {...state,signup:{loading:true}}
        default:
            return state
    }
}