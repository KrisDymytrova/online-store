import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../../redux/productsApi/productsApi.js';
import { Menu, MenuItem, Button, CircularProgress, Box } from '@mui/material';
import { ViewList, KeyboardArrowDownSharp } from "@mui/icons-material";
import { styles } from './styles';

const CategoriesDropdown = () => {
    const { data: categories = [], error, isLoading } = useGetAllCategoriesQuery();
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const handleSelectCategory = (category) => {
        navigate(`/category/${category}`);
        handleMouseLeave();
    };

    if (isLoading) return <CircularProgress />;
    if (error) return <p>Error loading categories</p>;

    return (
        <Box
            style={styles.dropdownContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button
                aria-controls="categories-menu"
                aria-haspopup="true"
                sx={styles.button}
            >
                <ViewList />
                Каталог товарів
                <KeyboardArrowDownSharp sx={styles.arrowIcon} />
            </Button>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                sx={styles.menu}
            >
                {Array.isArray(categories) && categories.map((category, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleSelectCategory(category)}
                        sx={styles.menuItem}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default CategoriesDropdown;
