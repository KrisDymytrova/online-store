import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../../redux/productsApi/productsApi.js';
import ProductCard from '../../Products/ProductCard';
import { Box } from '@mui/material';
import { styles } from './styles.js';

const ProductList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <Box sx={styles.productList}>
            {products.map((product) => (
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
    );
};

export default ProductList;
