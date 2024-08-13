import React from 'react';
import { useGetProductsQuery } from '../../../redux/productsApi/productsApi.js';
import { Box } from '@mui/material';
import ViewedProductCard from '../ViewedProductCard';
import { styles } from './styles.js';

const ViewedProductsList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const viewedProducts = products.slice(0, 6);

    return (
        <Box sx={styles.viewedProducts}>
            {viewedProducts.map((product) => (
                <Box key={product.id} sx={styles.productCard}>
                    <ViewedProductCard
                        imageUrl={product.image}
                        title={product.title}
                        code={product.id}
                        oldPrice={(product.price * 1.1).toFixed(2)}
                        discount={10}
                        newPrice={product.price}
                        bonus={Math.floor(product.price * 0.1).toFixed(2)}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default ViewedProductsList;
