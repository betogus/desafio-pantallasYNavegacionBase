import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    photo: null,
    address: null,
    coords: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        savePhoto: (state, action) => {
            state.photo = action.payload;
        },
        saveAddress: (state, action) => {
            state.address = action.payload.address
            state.coords = action.payload.coords
        }
    }
})

export const {savePhoto, saveAddress} = userSlice.actions;

export default userSlice.reducer