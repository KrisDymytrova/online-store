import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartPopup from '../../ShoppingCart/CartPopup/index.js';
import { Typography, Box, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { styles } from './styles.js';

const ViewedProductCard = ({ imageUrl, title, oldPrice, discount, newPrice, bonus, onClick }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.imageContainer} onClick={onClick}>
                <img src={imageUrl} alt={title} style={styles.image} />
            </Box>
            <Box sx={styles.infoContainer}>
                <Typography variant="h6" sx={styles.title}>{title}</Typography>
                <Box  sx={styles.priceButton}>
                    <Box sx={styles.priceContainer}>
                        <Box sx={styles.oldDiscount}>
                            <Typography variant="body2" sx={styles.oldPrice}>{oldPrice} ₴</Typography>
                            <Typography variant="body2" sx={styles.discount}>-{discount}%</Typography>
                        </Box>
                        <Typography variant="h6" sx={styles.newPrice}>{newPrice} ₴</Typography>
                    </Box>
                    <Button variant="contained" sx={styles.button} onClick={handleAddToCart}>
                        <ShoppingCart />
                    </Button>
                </Box>
                <Typography variant="body2" sx={styles.bonus}>+{bonus} ₴ на бонусний рахунок</Typography>
            </Box>
            {showPopup && (
                <CartPopup
                    product={{ imageUrl, title, newPrice, oldPrice }}
                    onClose={handleClosePopup}
                />
            )}
        </Box>
    );
};

ViewedProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    newPrice: PropTypes.string.isRequired,
    bonus: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ViewedProductCard;
