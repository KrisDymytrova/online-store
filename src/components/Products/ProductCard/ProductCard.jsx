import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartPopup from '../../ShoppingCart/CartPopup';
import { Typography, IconButton, Box, Button, Snackbar } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import deliveryPdp from '../../../assets/delivery-pdp_4.svg';
import oche from '../../../assets/oche-15_28.svg';
import mono from '../../../assets/mono-10_4.svg';
import kredit from '../../../assets/kredit-15.svg';
import abank from '../../../assets/abank-07_8.svg';
import useFavorites from '../../../hooks/useFavorites';
import useSnackbar from '../../../hooks/useSnackbar';
import useCart from '../../../hooks/useCart';
import { styles } from './styles';

const ProductCard = ({
                         imageUrl,
                         code,
                         title,
                         rating,
                         ratingCount,
                         oldPrice,
                         discount,
                         newPrice,
                         bonus,
                     }) => {
    const product = { imageUrl, code, title, newPrice, oldPrice, discount, quantity: 1 };
    const { isFavorite, handleToggleFavorite } = useFavorites(code, product);
    const { showSnackbar, snackbarMessage, showSnackbarWithMessage, handleCloseSnackbar } = useSnackbar();
    const { isInCart, handleAddToCart } = useCart(product);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleProductClick = (code) => {
        navigate(`/product/${code}`);
    };

    const handleAddToCartWithSnackbar = () => {
        handleAddToCart();
        setShowPopup(true);
        showSnackbarWithMessage('Товар успішно доданий до кошика');
    };

    const handleFavoriteToggle = () => {
        handleToggleFavorite(showSnackbarWithMessage);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <Box sx={styles.container}>
            <Box>
                <Box sx={styles.imageContainer} onClick={() => handleProductClick(code)}>
                    <img src={imageUrl} alt={title} style={styles.image} />
                </Box>
                <Box>
                    <Box sx={styles.codeFavorite}>
                        <Typography variant="body2" sx={styles.code}>Код: {code}</Typography>
                        <Box sx={styles.icon}>
                            <IconButton onClick={handleFavoriteToggle}>
                                {isFavorite ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={styles.title}
                        onClick={() => handleProductClick(code)}
                    >
                        {title}
                    </Typography>
                    <Box sx={styles.rating}>
                        <Box sx={styles.ratingStars}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Box>
                        <Typography variant="body2" sx={styles.ratingCount}>({ratingCount})</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
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
                    <Button
                        variant="contained"
                        sx={styles.button}
                        onClick={handleAddToCartWithSnackbar}
                        endIcon={isInCart ? <DoneAllOutlinedIcon sx={styles.iconCart}/> : <ShoppingCartIcon sx={styles.iconCart}/>}
                    />
                </Box>
                <Typography variant="body2" sx={styles.bonus}>+{bonus} ₴ на бонусний рахунок</Typography>
            </Box>
            {showPopup && (
                <CartPopup
                    product={{ imageUrl, title, code, newPrice, oldPrice }}
                    onClose={handleClosePopup}
                />
            )}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            />
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
};

export default ProductCard;
