import { authTypes } from "../types"

const { SIGN_IN, SIGN_UP} = authTypes
const initialState = {
    token: null,
    userId: null
}   

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {...state, token: action.token, userId: action.userId, email: action.email}
        case SIGN_IN: 
            return {...state, token: action.token, userId: action.userId, email: action.email}
        default:
            return state;
    };  
};

export default authReducer;