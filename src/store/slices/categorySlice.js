import {createSlice} from '@reduxjs/toolkit';
import { CATEGORIES } from '../../constants/data';

const initialState = {
    categories: CATEGORIES,
    selected: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        selectCategory: (state,  action ) => {
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.payload
            );
            if (indexCategory === -1) return state;
            
            else state.selected = state.categories[indexCategory]
            console.log(state.selected)
        }
    }
})

export const { selectCategory } = categorySlice.actions
export default categorySlice.reducer