import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderDetails: null,
    status: 'idle',
    error: null,
    paymentMethod: JSON.parse(localStorage.getItem('paymentMethod')) || null,
    deliveryMethod: JSON.parse(localStorage.getItem('deliveryMethod')) || null,
    city: localStorage.getItem('city') || '',
    comment: localStorage.getItem('comment') || '',
    noCall: JSON.parse(localStorage.getItem('noCall')) || false,
    contactInfo: JSON.parse(localStorage.getItem('contactInfo')) || {
        phoneNumber: '',
        firstName: '',
        email: ''
    },
    receiverInfo: JSON.parse(localStorage.getItem('receiverInfo')) || {
        receiverPhone: '',
        receiverFirstName: '',
        receiverLastName: '',
        receiverPatronymic: ''
    },
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        placeOrder: (state) => {
            state.status = 'loading';
        },
        placeOrderSuccess: (state, action) => {
            state.status = 'succeeded';
            state.orderDetails = action.payload;
        },
        placeOrderFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        setContactInfo: (state, action) => {
            state.contactInfo = action.payload;
            localStorage.setItem('contactInfo', JSON.stringify(action.payload));
        },
        setReceiverInfo: (state, action) => {
            console.log('Reducer setting receiverInfo:', action.payload);
            state.receiverInfo = action.payload;
            localStorage.setItem('receiverInfo', JSON.stringify(action.payload));
        },
        setDeliveryMethod: (state, action) => {
            state.deliveryMethod = action.payload;
            localStorage.setItem('deliveryMethod', JSON.stringify(action.payload));
        },
        setCity: (state, action) => {
            state.city = action.payload;
            localStorage.setItem('city', action.payload);
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            localStorage.setItem('paymentMethod', JSON.stringify(action.payload));
        },
        setComment: (state, action) => {
            state.comment = action.payload;
            localStorage.setItem('comment', action.payload);
        },
        setNoCall: (state, action) => {
            state.noCall = action.payload;
            localStorage.setItem('noCall', JSON.stringify(action.payload));
        },
    },
});

export const {
    setOrderDetails,
    setContactInfo,
    setReceiverInfo,
    setDeliveryMethod,
    setCity,
    setPaymentMethod,
    setComment,
    setNoCall,
    placeOrder,
    placeOrderSuccess,
    placeOrderFailure
} = orderSlice.actions;

export default orderSlice.reducer;
