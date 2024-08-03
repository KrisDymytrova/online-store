import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartPopup from '../../ShoppingCart/CartPopup';
import { Typography, IconButton, Box, Button } from '@mui/material';
import { ShoppingCart, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';
import { styles } from './styles.js';
import deliveryPdp from '../../../assets/delivery-pdp_4.svg';
import oche from '../../../assets/oche-15_28.svg';
import mono from '../../../assets/mono-10_4.svg';
import kredit from '../../../assets/kredit-15.svg';
import abank from '../../../assets/abank-07_8.svg';

const ProductCard = ({ imageUrl, code, title, rating, ratingCount, oldPrice, discount, newPrice, bonus, onClick }) => {
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const product = {
            imageUrl,
            code,
            title,
            newPrice,
            oldPrice,
            discount,
            quantity: 1,
        };
        dispatch(addItem(product));
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
            <Box>
                <Box sx={styles.codeFavorite}>
                    <Typography variant="body2" sx={styles.code}>Код: {code}</Typography>
                    <Box sx={styles.icon}>
                        <IconButton>
                            <FavoriteBorder />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant="h6" sx={styles.title}>{title}</Typography>
                <Box sx={styles.rating}>
                    <Box sx={styles.ratingStars}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Box>
                    <Typography variant="body2" sx={styles.ratingCount}>({ratingCount})</Typography>
                </Box>
                <Box sx={styles.paymentMethods}>
                    <img src={deliveryPdp} alt="Delivery"/>
                    <img src={oche} alt="PrivatBank"/>
                    <img src={mono} alt="MonoBank"/>
                    <img src={kredit} alt="Credit"/>
                    <img src={abank} alt="ABank"/>
                </Box>
                <Box sx={styles.priceContainer}>
                    <Box sx={styles.price}>
                        <Box sx={styles.oldDiscount}>
                            <Typography variant="body2" sx={styles.oldPrice}>{oldPrice} ₴</Typography>
                            <Typography variant="body2" sx={styles.discount}>-{discount}%</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={styles.newPrice}>{newPrice} ₴</Typography>
                        </Box>
                    </Box>
                    <Button variant="contained" sx={styles.button} onClick={handleAddToCart}>
                        <ShoppingCart />
                    </Button>
                </Box>
                <Typography variant="body2" sx={styles.bonus}>+{bonus} ₴ на бонусний рахунок</Typography>
            </Box>
            {showPopup && (
                <CartPopup
                    product={{ imageUrl, title, code, newPrice, oldPrice }}
                    onClose={handleClosePopup}
                />
            )}
        </Box>
    );
};

ProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    oldPrice: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    newPrice: PropTypes.string.isRequired,
    bonus: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ProductCard;
