import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import CartPopup from '../../ShoppingCart/CartPopup';
import { styles } from './styles';

const ViewedProductCard = ({
                               imageUrl,
                               title,
                               code,
                               oldPrice,
                               discount,
                               newPrice,
                               bonus,
                               onImageClick,
                               onTitleClick
                           }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <Box sx={styles.container}>
            <Box>
                <Box sx={styles.imageContainer}>
                    <img
                        src={imageUrl}
                        alt={title}
                        style={styles.image}
                        onClick={onImageClick}
                    />
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        sx={styles.title}
                        onClick={onTitleClick}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={styles.code}>Код: {code}</Typography>
                </Box>
            </Box>
            <Box sx={styles.infoContainer}>
                <Box sx={styles.priceButton}>
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
                    product={{ imageUrl, title, newPrice, oldPrice, code }}
                    onClose={handleClosePopup}
                />
            )}
        </Box>
    );
};

ViewedProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    bonus: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
    onTitleClick: PropTypes.func.isRequired,
};

export default ViewedProductCard;
