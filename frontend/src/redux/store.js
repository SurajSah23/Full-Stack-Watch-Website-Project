// store.js
import { configureStore } from '@reduxjs/toolkit';
import watchesReducer from './slices/watchesSlice';
import cartReducer from './slices/cartSlice';
import { watchesApi } from './api/watchesApi';

export const store = configureStore({
  reducer: {
    watches: watchesReducer,
    cart: cartReducer,
    [watchesApi.reducerPath]: watchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(watchesApi.middleware),
});