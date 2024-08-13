import { createSlice } from '@reduxjs/toolkit';

const getFavoriteItems = () => {
    const items = localStorage.getItem('favorites');
    return items ? JSON.parse(items) : [];
};

const saveFavoriteItems = (items) => {
    localStorage.setItem('favorites', JSON.stringify(items));
};

const initialState = {
    items: getFavoriteItems(),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(fav => fav.code === item.code);
            if (!existingItem) {
                state.items.push(item);
                saveFavoriteItems(state.items);
            }
        },
        removeFavorite: (state, action) => {
            const code = action.payload;
            state.items = state.items.filter(fav => fav.code !== code);
            saveFavoriteItems(state.items);
        },
        setFavorites: (state, action) => {
            state.items = action.payload;
        },
        loadFavoritesFromLocalStorage: (state) => {
            state.items = getFavoriteItems();
        },
    },
});

export const {
    addFavorite,
    removeFavorite,
    setFavorites,
    loadFavoritesFromLocalStorage,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
