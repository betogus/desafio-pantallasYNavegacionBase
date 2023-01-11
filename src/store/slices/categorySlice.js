import {createSlice} from '@reduxjs/toolkit';
import { CATEGORIES } from '../../constants/data';

const initialState = {
    categories: null,
    selected: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        saveCategories: (state, action) => {
            state.categories = action.payload
        },
        selectCategory: (state,  action ) => {
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.payload
            )+1;
            if (indexCategory === -1) return state;
            
            else state.selected = state.categories[indexCategory]
        }
    }
})

export const { selectCategory, saveCategories } = categorySlice.actions
export default categorySlice.reducer