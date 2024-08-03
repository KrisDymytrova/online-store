import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi/productsApi.js';
import cartReducer from './slices/cartSlice.js';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});


