import cartReducer from './Cart';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserRedux'

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './Allproductreducer'



const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }
  const reducerData= combineReducers({
    cart:cartReducer,
    user:userReducer,
    allData:productReducer
  });

  const persist = persistReducer(persistConfig,reducerData);



const store = configureStore({
    reducer: persist
})
export default store;
