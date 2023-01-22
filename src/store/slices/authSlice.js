import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: null,
    userId: null,
    email: null,
    password: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action ) => {
            state.userId = action.payload.userId
            state.token = action.payload.token
            state.email = action.payload.email
            state.password = action.payload.password
    },
        signIn : (state, action) => {
            state.userId = action.payload.userId
            state.token = action.payload.token
            state.email = action.payload.email
            state.password = action.payload.password
    },
    signOff: (state) => {
        state.userId = null
        state.token = null
        state.email = null
        state.password = null
    }
}      
})

export const { signIn, signUp, signOff } = authSlice.actions
export default authSlice.reducer