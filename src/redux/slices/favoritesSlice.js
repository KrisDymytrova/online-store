import { createSlice } from '@reduxjs/toolkit';

const getFavoriteItems = () => {
    const items = localStorage.getItem('favorites');
    return items ? JSON.parse(items) : [];
};

const saveFavoriteItems = (items) => {
    localStorage.setItem('favorites', JSON.stringify(items));
};

const initialState = getFavoriteItems();

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const item = action.payload;
            const existingItem = state.find(fav => fav.code === item.code);
            if (!existingItem) {
                state.push(item);
                saveFavoriteItems(state);
            }
        },
        removeFavorite: (state, action) => {
            const code = action.payload;
            const newState = state.filter(fav => fav.code !== code);
            saveFavoriteItems(newState);
            return newState;
        },
        loadFavoritesFromLocalStorage: (state) => {
            return getFavoriteItems();
        },
    },
});

export const {
    addFavorite,
    removeFavorite,
    loadFavoritesFromLocalStorage
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
