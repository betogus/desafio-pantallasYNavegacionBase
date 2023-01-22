import {createSlice} from '@reduxjs/toolkit';
import { sumTotal } from '../../utils';

const initialState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let updatedCart = [];
            if (state.items.find((item) => item.id === action.payload.id)) {
        updatedCart = state.items.map((item) => {
          if (item.id === action.payload.id) item.quantity += 1;
          return item;
        });
        } else {
          const item = { ...action.payload, quantity: 1 };
          updatedCart = [...state.items, item];
        }
        state.items = updatedCart
        state.total = sumTotal(updatedCart)
        },
        removeFromCart: (state, action) => {
            const filteredCart = state.items.filter((item) => item.id !== action.payload);
            state.items = filteredCart,
            state.total = sumTotal(filteredCart)
        },
        confirmOrder:  (state, action ) => {
            if (action.payload.result) {
                state.items = []
                state.total = 0
            } else {
                state.error = action.payload.error
            }
        }
    }         
})

export const { addToCart, removeFromCart, confirmOrder } = cartSlice.actions
export default cartSlice.reducer