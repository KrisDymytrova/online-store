import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { Close as CloseIcon, Add, Remove, CheckCircle } from '@mui/icons-material';
import { styles } from './styles.js';
import { useNavigate } from 'react-router-dom';

const CartPopup = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const popupRef = useRef(null);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const handleProductClick = () => {
        navigate(`/product/${product.code}`);
    };

    const handleGoToCart = () => {
        navigate('/shopping-cart');
    };

    const totalOldPrice = (product.oldPrice * quantity).toFixed(2);
    const totalNewPrice = (product.newPrice * quantity).toFixed(2);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <Box sx={styles.popupContainer} ref={popupRef}>
            <Box sx={styles.popupHeader}>
                <Typography variant="h6">Товар додано до кошика</Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={styles.popupContent}>
                <Box sx={styles.productImageContainer} onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                    <img src={product.imageUrl} alt={product.title} style={styles.productImage} />
                </Box>
                <Box sx={styles.productInfo}>
                    <Box sx={styles.iconText}>
                        <CheckCircle sx={styles.checkIcon} />
                        <Typography variant="body1" sx={styles.productAvailability}>Можна забрати сьогодні</Typography>
                    </Box>
                    <Box sx={styles.productInfoPrice}>
                        <Box sx={styles.productTitleCode} onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                            <Typography variant="body1">{product.title}</Typography>
                            <Typography variant="body2" color="textSecondary">Код: {product.code}</Typography>
                        </Box>
                        <Box sx={styles.quantityContainer}>
                            <IconButton onClick={handleDecrease} disabled={quantity <= 1} sx={styles.quantityButton}>
                                <Remove />
                            </IconButton>
                            <Typography sx={styles.quantity}>{quantity}</Typography>
                            <IconButton onClick={handleIncrease} sx={styles.quantityButton}>
                                <Add />
                            </IconButton>
                        </Box>
                        <Box>
                            <Box sx={styles.productPrice}>
                                <Typography variant="body2" sx={styles.oldPrice}>{totalOldPrice} ₴</Typography>
                                <Typography variant="h6" sx={styles.newPrice}>{totalNewPrice} ₴</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.popupActions}>
                <Button sx={styles.continueButton} variant="outlined" onClick={onClose}>Продовжити покупки</Button>
                <Box>
                    <Button sx={styles.goToCartButton} variant="contained" onClick={handleGoToCart}>Перейти до кошика</Button>
                    <Button sx={styles.makeOrderButton} variant="outlined">Оформити замовлення</Button>
                </Box>
            </Box>
        </Box>
    );
};

CartPopup.propTypes = {
    product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        newPrice: PropTypes.number.isRequired,
        oldPrice: PropTypes.number.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartPopup;

