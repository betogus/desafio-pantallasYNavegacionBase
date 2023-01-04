/* import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer, categoryReducer, cartReducer, orderReducer, authReducer,  } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk)); */

import {  configureStore } from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import productsReducer from './slices/productsSlice'
import ordersReducer from './slices/ordersSlice'
import cartReducer from './slices/cartSlice'
import categoryReducer from './slices/categorySlice'
import authReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    orders: ordersReducer,
    cart: cartReducer,
    category: categoryReducer,
    auth: authReducer,
  }
})


export default store

