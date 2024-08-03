import React from 'react';
import { useSelector } from 'react-redux';
import {Box, Typography} from '@mui/material';
import CartItemList from '../CartItemList';
import CartSummary from '../CartSummary';
import { styles } from './styles';

const Cart = () => {
    const { items, totalAmount, totalDiscount, finalAmount } = useSelector(state => state.cart);

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={styles.text}>Кошик </Typography>
            <Box sx={styles.cartContainer}>
                <Box sx={styles.itemListContainer}>
                    <CartItemList items={items} />
                </Box>
                <Box>
                    <CartSummary
                        totalAmount={totalAmount}
                        totalDiscount={totalDiscount}
                        finalAmount={finalAmount}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Cart;
