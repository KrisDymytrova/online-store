import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import CartProductsList from '../CartProductsList';
import CartSummary from '../CartSummary';
import { styles } from './styles';

const Cart = () => {
    const { items, totalAmount, totalDiscount, finalAmount, cartCount } = useSelector(state => state.cart);

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={styles.text}>Кошик</Typography>
            <Box sx={styles.cartContainer}>
                {items.length === 0 ? (
                    <Box sx={styles.emptyCart}>
                        <Typography variant="h6">Кошик порожній</Typography>
                    </Box>
                ) : (
                    <>
                        <Box sx={styles.itemListContainer}>
                            <CartProductsList items={items} />
                        </Box>
                        <Box>
                            <CartSummary
                                cartCount={cartCount}
                                totalAmount={totalAmount}
                                totalDiscount={totalDiscount}
                                finalAmount={finalAmount}
                            />
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Cart;
