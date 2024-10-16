import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { Close as CloseIcon, CheckSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';
import QuantitySelector from '../../UI/QuantitySelector';
import { styles } from './styles';

const CartPopup = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const popupRef = useRef(null);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleProductClick = () => {
        navigate(`/product/${product.code}`);
    };

    const handleGoToCart = () => {
        navigate('/shopping-cart');
    };

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: quantity - 1 }));
        onClose();
        navigate('/checkout', { state: { product, quantity } });
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
                        <CheckSharp sx={styles.checkIcon} />
                        <Typography variant="body1" sx={styles.productAvailability}>Можна забрати сьогодні</Typography>
                    </Box>
                    <Box sx={styles.productInfoPrice}>
                        <Box sx={styles.productTitleCode} onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                            <Typography variant="body1">{product.title}</Typography>
                            <Typography variant="body2" color="textSecondary">Код: {product.code}</Typography>
                        </Box>
                        {isAuthenticated && (
                            <QuantitySelector
                                initialQuantity={quantity}
                                onQuantityChange={setQuantity}
                            />
                        )}
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
                    {isAuthenticated && (
                        <Button sx={styles.makeOrderButton} variant="outlined" onClick={handleAddToCart}>Оформити замовлення</Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

CartPopup.propTypes = {
    product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        newPrice: PropTypes.number.isRequired,
        oldPrice: PropTypes.number.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartPopup;
