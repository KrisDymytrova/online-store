import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi/productsApi.js';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';
import authReducer from './slices/authSlice';
import orderReducer from './slices/orderSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        auth: authReducer,
        order: orderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
