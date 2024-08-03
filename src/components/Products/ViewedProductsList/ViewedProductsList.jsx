import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../../redux/productsApi/productsApi.js';
import ViewedProductCard from '../ViewedProductCard/index.js';
import { Box } from '@mui/material';
import { styles } from './styles.js';

const ViewedProductsList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const viewedProducts = products.slice(0, 6);

    return (
        <Box sx={styles.viewedProducts}>
            {viewedProducts.map((product) => (
                <Box key={product.id} sx={styles.productCard}>
                    <ViewedProductCard
                        imageUrl={product.image}
                        title={product.title}
                        oldPrice={(product.price * 1.1).toFixed(2)}
                        discount={10}
                        newPrice={product.price}
                        bonus={Math.floor(product.price * 0.1).toFixed(2)}
                        onClick={() => handleProductClick(product.id)}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default ViewedProductsList;
