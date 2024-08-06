import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi/productsApi.js';
import cartReducer from './slices/cartSlice.js';
import favoritesReducer from "./slices/favoritesSlice.js";
import authReducer from "./slices/authSlice.js";


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
