import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer, categoryReducer, cartReducer, orderReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));