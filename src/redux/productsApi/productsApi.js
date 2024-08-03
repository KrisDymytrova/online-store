import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../utils/api/api.js';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
        getAllCategories: builder.query({
            query: () => 'products/categories',
        }),
        getAllProductsByCategory: builder.query({
            query: ({ category, limit }) => `products/category/${category}?limit=${limit}`,
        }),
        getCategoryById: builder.query({
            query: (categoryId = 1) => `categories/${categoryId}`,
        }),
        getAllUsers: builder.query({
            query: () => 'users',
        }),
        getUserById: builder.query({
            query: (userId = 1) => `users/${userId}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetAllCategoriesQuery,
    useGetAllProductsByCategoryQuery,
    useGetCategoryByIdQuery,
    useGetAllUsersQuery,
    useGetUserByIdQuery
} = productsApi;
