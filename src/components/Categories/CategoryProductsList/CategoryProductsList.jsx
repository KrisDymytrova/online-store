import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetAllProductsByCategoryQuery } from '../../../redux/productsApi/productsApi.js';
import {Box, Grid, Typography} from '@mui/material';
import ProductCard from '../../Products/ProductCard/index.js';
import { styles } from './styles.js';

const CategoryProductsList = () => {
    const { categoryName } = useParams();
    const { data: products, error, isLoading } = useGetAllProductsByCategoryQuery({ category: categoryName, limit: 10 });
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={styles.header}>
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </Typography>
            <Box sx={styles.productList}>
                {products && products.map((product) => (
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
                    />
                ))}
            </Box>
        </Box>
    );
};

export default CategoryProductsList;
