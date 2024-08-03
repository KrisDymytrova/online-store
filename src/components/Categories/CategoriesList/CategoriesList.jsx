import React from 'react';
import { useGetAllCategoriesQuery } from '../../../redux/productsApi/productsApi';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const CategoriesList = () => {
    const { data: categories, error, isLoading } = useGetAllCategoriesQuery();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories</div>;

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <Box sx={styles.container}>
            <Grid container spacing={2}>
                {categories && categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Paper
                            sx={styles.categoryPaper}
                            elevation={3}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <Typography variant="h6" sx={styles.categoryName}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategoriesList;
