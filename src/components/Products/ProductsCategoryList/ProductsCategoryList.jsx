import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetAllProductsByCategoryQuery } from '../../../redux/productsApi/productsApi.js';
import {Box, Grid, Typography} from '@mui/material';
import ProductCard from '../ProductCard';
import { styles } from './styles.js';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { data: products, error, isLoading } = useGetAllProductsByCategoryQuery({ category: categoryName, limit: 10 });
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <Box style={styles.container}>
            <Typography variant="h4" gutterBottom>
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </Typography>
            <Grid container spacing={2}>
                {products && products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategoryPage;
