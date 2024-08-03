import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        return JSON.parse(savedCart);
    }
    return { items: [], totalAmount: 0, totalDiscount: 0, finalAmount: 0 };
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.code === item.code);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            // Update totals
            state.totalAmount += item.newPrice;
            state.totalDiscount += (item.oldPrice - item.newPrice);
            state.finalAmount = state.totalAmount - state.totalDiscount;

            // Save to local storage
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
        removeItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.code === item.code);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(cartItem => cartItem.code !== item.code);
                } else {
                    existingItem.quantity -= 1;
                }

                // Update totals
                state.totalAmount -= item.newPrice;
                state.totalDiscount -= (item.oldPrice - item.newPrice);
                state.finalAmount = state.totalAmount - state.totalDiscount;

                // Save to local storage
                localStorage.setItem('cartItems', JSON.stringify(state));
            }
        },
        deleteItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.code === item.code);

            if (existingItem) {
                state.totalAmount -= existingItem.newPrice * existingItem.quantity;
                state.totalDiscount -= (existingItem.oldPrice - existingItem.newPrice) * existingItem.quantity;
                state.items = state.items.filter(cartItem => cartItem.code !== item.code);
                state.finalAmount = state.totalAmount - state.totalDiscount;

                // Save to local storage
                localStorage.setItem('cartItems', JSON.stringify(state));
            }
        },
        deleteAllItems: (state, action) => {
            const itemsToDelete = action.payload;

            itemsToDelete.forEach(itemId => {
                const item = state.items.find(cartItem => cartItem.id === itemId);
                if (item) {
                    state.totalAmount -= item.newPrice * item.quantity;
                    state.totalDiscount -= (item.oldPrice - item.newPrice) * item.quantity;
                    state.items = state.items.filter(cartItem => cartItem.id !== itemId);
                }
            });

            state.finalAmount = state.totalAmount - state.totalDiscount;

            // Save to local storage
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
    },
});

export const { addItem, removeItem, deleteItem, deleteAllItems } = cartSlice.actions;
export default cartSlice.reducer;
