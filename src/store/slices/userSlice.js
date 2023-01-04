import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { insertUser } from "../../db";



const initialState = {
    id: null,
    photo: null,
    address: null,
    email: null,
    password: null,
    userId: null,
    coords: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        savePhoto: async (state, action) => {
            state.photo = action.payload;
            const result = await insertUser(id, state.photo)
            console.log('result', result)
        },
        saveAddress: (state, action) => {
            console.log('action', action.payload)
            state.address = action.payload.address
            state.coords = action.payload.coords
            
        }
    }
})

export const {savePhoto, saveAddress} = userSlice.actions;

export default userSlice.reducer