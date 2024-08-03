import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import { styles } from './styles';

const formatCurrency = (amount) => {
    return amount.toFixed(2);
};

const CartSummary = ({ totalAmount, totalDiscount, finalAmount }) => {
    return (
        <Box sx={styles.summary}>
            <Button variant="contained" sx={styles.checkoutButton}>Перейти до оформлення</Button>
            <Box sx={styles.summaryDetails}>
                <Box sx={styles.summaryTextContainer}>
                    <Box sx={styles.summaryText}>
                        <Typography>Товари на суму</Typography>
                        <Typography sx={styles.price}>{formatCurrency(totalAmount)} ₴</Typography>
                    </Box>
                    <Box sx={styles.summaryText}>
                        <Typography>Знижка</Typography>
                        <Typography sx={styles.price}>{formatCurrency(totalDiscount)} ₴</Typography>
                    </Box>
                </Box>
                <Box sx={styles.totalText}>
                    <Typography variant="h6">Загальна сума</Typography>
                    <Typography variant="h6" sx={styles.price}>{formatCurrency(finalAmount)} ₴</Typography>
                </Box>
            </Box>
        </Box>
    );
};

CartSummary.propTypes = {
    totalAmount: PropTypes.number.isRequired,
    totalDiscount: PropTypes.number.isRequired,
    finalAmount: PropTypes.number.isRequired,
};

export default CartSummary;
