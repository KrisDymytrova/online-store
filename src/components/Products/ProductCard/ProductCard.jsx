import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CartPopup from '../../ShoppingCart/CartPopup';
import { Typography, IconButton, Box, Button, Snackbar } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';
import { addFavorite, removeFavorite, loadFavoritesFromLocalStorage } from '../../../redux/slices/favoritesSlice';
import { styles } from './styles.js';
import deliveryPdp from '../../../assets/delivery-pdp_4.svg';
import oche from '../../../assets/oche-15_28.svg';
import mono from '../../../assets/mono-10_4.svg';
import kredit from '../../../assets/kredit-15.svg';
import abank from '../../../assets/abank-07_8.svg';

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
                         onImageClick,
                         onTitleClick
                     }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isInCart, setIsInCart] = useState(false);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items || []);
    const cartItems = useSelector((state) => state.cart.items);
    const isFavorite = favorites.some(fav => fav.code === code);

    useEffect(() => {
        dispatch(loadFavoritesFromLocalStorage());
        const isItemInCart = cartItems.some(item => item.code === code);
        setIsInCart(isItemInCart);
    }, [dispatch, cartItems, code]);

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
        setSnackbarMessage('Товар успішно доданий до кошика');
        setShowSnackbar(true);
        setIsInCart(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleToggleFavorite = () => {
        const product = { imageUrl, code, title, newPrice, oldPrice, discount };
        if (isFavorite) {
            dispatch(removeFavorite(code));
            setSnackbarMessage('Товар успішно видалений з обраного');
        } else {
            dispatch(addFavorite(product));
            setSnackbarMessage('Товар успішно доданий до обраного');
        }
        setShowSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    return (
        <Box sx={styles.container}>
            <Box>
                <Box sx={styles.imageContainer} onClick={onImageClick}>
                    <img src={imageUrl} alt={title} style={styles.image} />
                </Box>
                <Box>
                    <Box sx={styles.codeFavorite}>
                        <Typography variant="body2" sx={styles.code}>Код: {code}</Typography>
                        <Box sx={styles.icon}>
                            <IconButton onClick={handleToggleFavorite}>
                                {isFavorite ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={styles.title}
                        onClick={onTitleClick}
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
                        onClick={handleAddToCart}
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
    onClick: PropTypes.func,
    onImageClick: PropTypes.func.isRequired,
    onTitleClick: PropTypes.func.isRequired,
};

export default ProductCard;
