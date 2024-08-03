import React, { useState, useEffect, useRef } from 'react';
import { InputBase, IconButton, List, ListItem, ListItemText, Paper, InputAdornment, ListItemAvatar, Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useGetProductsQuery } from '../../../redux/productsApi/productsApi.js';
import { styles } from './styles.js';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { data: products } = useGetProductsQuery();
    const navigate = useNavigate();
    const searchRef = useRef(null);

    useEffect(() => {
        if (searchTerm && products) {
            const results = products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(results);
            setIsDropdownOpen(true);
        } else {
            setFilteredProducts([]);
            setIsDropdownOpen(false);
        }
    }, [searchTerm, products]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        setSearchTerm('');
        setFilteredProducts([]);
        setIsDropdownOpen(false);
    };

    return (
        <div ref={searchRef} style={styles.searchBar}>
            <InputBase
                placeholder="Пошук товарів"
                value={searchTerm}
                onChange={handleInputChange}
                sx={styles.inputBase}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton sx={styles.iconButton}>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
            {isDropdownOpen && filteredProducts.length > 0 && (
                <Paper sx={styles.resultList}>
                    <List>
                        {filteredProducts.map((product) => (
                            <ListItem
                                button
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        src={product.image}
                                        alt={product.title}
                                        variant="square"
                                        sx={styles.avatar}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={product.title} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </div>
    );
};

export default SearchBar;
