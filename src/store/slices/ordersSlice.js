import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: []
}
export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        saveOrders: (state, action) => {
            state.list = action.payload
        },
        removeOrder: (state, action) => {
            state.list = state.list.filter((order) => order.id !== action.payload)
        }
    }
})

export const { saveOrders, removeOrder } = ordersSlice.actions

export default ordersSlice.reducer