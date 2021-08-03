import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './User/user.reducer';
import cartReducer from './Cart/cart.reducer';
import shopReducer from './Shop/Shop.reducer';
import directoryReducer from './Directory/Directory.reducer';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
