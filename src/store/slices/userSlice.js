import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { insertUser } from "../../db";



const initialState = {
    photo: null,
    address: null,
    coords: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        savePhoto: async (state, action) => {
            state.photo = action.payload;
            const result = await insertUser(id, state.photo)
        },
        saveAddress: (state, action) => {
            state.address = action.payload.address
            state.coords = action.payload.coords
            console.log(state.coords)
        }
    }
})

export const {savePhoto, saveAddress} = userSlice.actions;

export default userSlice.reducer