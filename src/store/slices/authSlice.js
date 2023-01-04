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
    }
}      
})

export const { signIn, signUp } = authSlice.actions
export default authSlice.reducer