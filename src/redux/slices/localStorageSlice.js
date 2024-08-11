import { createSlice } from '@reduxjs/toolkit';
import { getCartItems, saveCartItems } from '../../utils/localStorage';

const initialState = {
    items: getCartItems(), // Загружаем начальное состояние из localStorage
    totalAmount: 0,
    totalDiscount: 0,
    finalAmount: 0,
};

const localStorageSlice = createSlice({
    name: 'localStorage',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, newPrice, oldPrice } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.totalAmount += oldPrice;
            state.totalDiscount += (oldPrice - newPrice);
            state.finalAmount = state.totalAmount - state.totalDiscount;

            saveCartItems(state.items);
        },
        removeItem: (state, action) => {
            const { id, newPrice, oldPrice } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                }

                state.totalAmount -= oldPrice;
                state.totalDiscount -= (oldPrice - newPrice);
                state.finalAmount = state.totalAmount - state.totalDiscount;

                saveCartItems(state.items);
            }
        },
        deleteItem: (state, action) => {
            const { id, newPrice, oldPrice, quantity } = action.payload;
            state.totalAmount -= oldPrice * quantity;
            state.totalDiscount -= (oldPrice - newPrice) * quantity;
            state.items = state.items.filter(item => item.id !== id);
            state.finalAmount = state.totalAmount - state.totalDiscount;

            saveCartItems(state.items);
        },
        loadCartFromLocalStorage: (state) => {
            const items = getCartItems();
            state.items = items;
            state.totalAmount = items.reduce((sum, item) => sum + item.oldPrice * item.quantity, 0);
            state.totalDiscount = items.reduce((sum, item) => sum + (item.oldPrice - item.newPrice) * item.quantity, 0);
            state.finalAmount = state.totalAmount - state.totalDiscount;
        },
    },
});

export const { addItem, removeItem, deleteItem, loadCartFromLocalStorage } = localStorageSlice.actions;
export default localStorageSlice.reducer;
