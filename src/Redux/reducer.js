import { REGISTER_STATUS, REGISTER_SUCCESS } from "./actionTypes"

const initState = {
    signup: {
        loading: false,
        usersList: []
    }
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_STATUS:
            return { ...state, signup: { loading: true } }
        case REGISTER_SUCCESS:
            // localStorage.setItem("usersList", [...state.signup.usersList, action.payload])
            return { ...state, signup: { loading: false, usersList: [action.payload, ...state.signup.usersList] } }
        default:
            return state

    }
}