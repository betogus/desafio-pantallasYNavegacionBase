import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: []
}
export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getOrders: (state, action) => {
            state.list = action.payload
        },
        deleteOrder: (state, action) => {
            state.list = state.list.filter((order) => order.id !== action.payload)
        }
    }
})

export const { getOrders, deleteOrder } = ordersSlice.actions

export default ordersSlice.reducer