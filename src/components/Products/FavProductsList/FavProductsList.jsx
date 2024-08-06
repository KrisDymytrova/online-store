import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../../redux/productsApi/productsApi.js';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../Products/ProductCard';
import { Box, Typography, Snackbar } from '@mui/material';
import { removeFavorite } from '../../../redux/slices/favoritesSlice';
import { styles } from './styles.js';

const FavProductList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const handleRemoveFavorite = (code) => {
        dispatch(removeFavorite(code));
        setSnackbarMessage('Товар успішно видалений з обраного');
        setShowSnackbar(true);
    };

    const favoriteProducts = products.filter(product =>
        favorites.some(fav => fav.code === product.id)
    );

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={styles.header}>Обрані товари</Typography>
            <Box sx={styles.productList}>
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            imageUrl={product.image}
                            code={product.id}
                            title={product.title}
                            rating={product.rating.rate}
                            ratingCount={product.rating.count}
                            oldPrice={(product.price * 1.1).toFixed(2)}
                            discount={10}
                            newPrice={product.price}
                            bonus={Math.floor(product.price * 0.1).toFixed(2)}
                            onClick={() => handleProductClick(product.id)}
                            onRemoveFavorite={() => handleRemoveFavorite(product.id)}
                        />
                    ))
                ) : (
                    <Typography variant="h6" sx={styles.emptyFav}>
                        В обраному немає товарів
                    </Typography>
                )}
                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message={snackbarMessage}
                />
            </Box>
        </Box>
    );
};

export default FavProductList;

