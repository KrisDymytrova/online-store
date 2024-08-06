import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Badge, Box, Typography, IconButton, Button, Divider } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle, ViewList } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserFromCookies, logout } from '../../../redux/slices/authSlice.js';
import SearchBar from '../../UI/SearchBar';
import CategoriesDropdown from '../../Categories/CategoriesDropdown';
import AuthModal from '../../Auth/AuthModal';
import ProfileDropdown from '../../UserProfile/ProfileDropdown';
import { styles } from './styles.js';

const BottomHeader = ({ cartCount, totalAmount }) => {
    const [setSelectedCategory] = useState(null);
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(loadUserFromCookies());
    }, [dispatch]);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleCartClick = () => {
        navigate('/shopping-cart');
    };

    const handleFavoriteClick = () => {
        navigate('/fav-products');
    };

    const handleAuthModalOpen = () => {
        setOpenAuthModal(true);
    };

    const handleAuthModalClose = () => {
        setOpenAuthModal(false);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <AppBar sx={styles.appBar}>
                <Toolbar sx={styles.toolbar}>
                    <Box>
                        <CategoriesDropdown onSelectCategory={handleSelectCategory} />
                    </Box>
                    <SearchBar />
                    <Box sx={styles.rightBox}>
                        {isAuthenticated ? (
                            <ProfileDropdown onLogout={handleLogout} />
                        ) : (
                            <Button
                                aria-controls="categories-menu"
                                aria-haspopup="true"
                                onClick={handleAuthModalOpen}
                                sx={styles.iconButtonAuth}
                            >
                                Увійти
                            </Button>
                        )}
                        <Divider orientation="vertical" flexItem sx={styles.divider} />
                        <IconButton sx={styles.iconButton} onClick={handleFavoriteClick}>
                            <Favorite />
                        </IconButton>
                        <Divider orientation="vertical" flexItem sx={styles.divider} />
                        <IconButton sx={styles.iconButton} onClick={handleCartClick}>
                            <Badge badgeContent={cartCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={styles.amountText}>
                            {totalAmount} ₴
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <AuthModal open={openAuthModal} onClose={handleAuthModalClose} />
        </>
    );
};

BottomHeader.propTypes = {
    cartCount: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
};

export default BottomHeader;
