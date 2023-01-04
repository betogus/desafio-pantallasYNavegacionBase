import { PRODUCTS } from '../../constants/data';
import { createSlice } from "@reduxjs/toolkit"
 

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectProduct: (state, action) => {
            state.selected = state.products.find((product) => product.id === action.payload)
        },
        filterProducts: (state, action) => {
            state.filteredProducts = state.products.filter(product => product.categoryId === action.payload)
           
        }
    }
})

export const {selectProduct, filterProducts} = productsSlice.actions;

export default productsSlice.reducer

