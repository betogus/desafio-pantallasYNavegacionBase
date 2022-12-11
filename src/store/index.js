import { createStore, combineReducers } from 'redux'
import { productsReducer, categoryReducer } from './reducers'

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer
});

export default createStore(rootReducer)