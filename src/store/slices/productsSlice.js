import { PRODUCTS } from '../../constants/data';
import { createSlice } from "@reduxjs/toolkit"
 

const initialState = {
  products: null,
  filteredProducts: [],
  selected: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        saveProducts: (state, action) => {
            state.products = action.payload
        },
        selectProduct: (state, action) => {
            state.selected = state.products.find((product) => product.id === action.payload)
        },
        filterProducts: (state, action) => {
            state.filteredProducts = state.products.filter(product => product.categoryId == action.payload) 
        }
    }
})

export const {selectProduct, filterProducts, saveProducts} = productsSlice.actions;

export default productsSlice.reducer

