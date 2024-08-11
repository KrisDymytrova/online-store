import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../../redux/productsApi/productsApi.js';
import ProductCard from '../../Products/ProductCard';
import { Box, Button, Typography } from '@mui/material';
import { styles } from './styles.js';

const ProductList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(12);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;


    const handleImageClick = (id) => {
        navigate(`/product/${id}`);
    };

    const handleTitleClick = (id) => {
        navigate(`/product/${id}`);
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 12);
    };

    return (
        <Box sx={styles.productList}>
            {products.slice(0, visibleCount).map((product) => (
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
                    onImageClick={() => handleImageClick(product.id)}
                    onTitleClick={() => handleTitleClick(product.id)}
                />
            ))}
            {visibleCount < products.length && (
                <Box sx={styles.showMoreContainer}>
                    <Button sx={styles.showMoreButton} onClick={handleShowMore}>
                        <Typography sx={styles.showMoreText}>Показати більше</Typography>
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default ProductList;
