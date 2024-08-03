import React, { useState } from 'react';
import { useGetAllCategoriesQuery } from '../../../redux/productsApi/productsApi.js';
import { Menu, MenuItem, Button, CircularProgress } from '@mui/material';
import { styles } from './styles.js';
import { ViewList } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const CategoriesDropdown = () => {
    const { data: categories = [], error, isLoading } = useGetAllCategoriesQuery();
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectCategory = (category) => {
        navigate(`/category/${category}`);
        handleClose();
    };

    if (isLoading) return <CircularProgress />;
    if (error) return <p>Error loading categories</p>;

    return (
        <div style={styles.dropdownContainer}>
            <Button
                aria-controls="categories-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={styles.button}
            >
                <ViewList />
                Каталог товарів
            </Button>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
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
        </div>
    );
};

export default CategoriesDropdown;
