import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Badge, Box, Typography, IconButton } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle } from '@mui/icons-material';
import SearchBar from '../../UI/SearchBar';
import CategoriesDropdown from '../../Categories/CategoriesDropdown';
import AuthModal from '../../Auth/AuthModal';
import { styles } from './styles.js';

const BottomHeader = ({ cartCount, totalAmount }) => {
    const [setSelectedCategory] = useState(null);
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const navigate = useNavigate();

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

    return (
        <>
            <AppBar sx={styles.appBar}>
                <Toolbar sx={styles.toolbar}>
                    <Box>
                        <CategoriesDropdown onSelectCategory={handleSelectCategory} />
                    </Box>
                    <SearchBar />
                    <Box sx={styles.rightBox}>
                        <IconButton sx={styles.iconButton} onClick={handleAuthModalOpen}>
                            <AccountCircle />
                        </IconButton>
                        <IconButton sx={styles.iconButton} onClick={handleFavoriteClick}>
                            <Favorite />
                        </IconButton>
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
