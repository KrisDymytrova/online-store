import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Badge, Box, Button, Typography, IconButton } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../UI/SearchBar';
import CategoriesDropdown from "../../Categories/CategoriesDropdown";

import { styles } from './styles.js';

const BottomHeader = ({ cartCount, totalAmount }) => {
    const [setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleCartClick = () => {
        navigate('/shopping-cart');
    };

    return (
        <AppBar sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Box>
                    <CategoriesDropdown onSelectCategory={handleSelectCategory} />
                </Box>
                <SearchBar />
                <Box sx={styles.rightBox}>
                    <Button sx={styles.loginButton}>Увійти</Button>
                    <IconButton sx={styles.iconButton}>
                        <AccountCircle />
                    </IconButton>
                    <IconButton sx={styles.iconButton}>
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
    );
};

BottomHeader.propTypes = {
    cartCount: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
};

export default BottomHeader;
