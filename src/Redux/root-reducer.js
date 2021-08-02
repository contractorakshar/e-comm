import userReducer from './User/user.reducer';
import cartReducer from './Cart/cart.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
