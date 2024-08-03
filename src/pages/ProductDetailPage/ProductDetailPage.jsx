import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/productsApi/productsApi.js';
import BaseTemplate from '../../templates/BaseTemplate';
import ProductDetail from '../../components/Products/ProductDetail';
import ContentContainer from "../../templates/ContentContainer";

const ProductDetailPage = () => {
    const { id } = useParams();
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product</div>;

    const product = products.find(product => product.id === parseInt(id));

    if (!product) return <div>Product not found</div>;

    return (
        <BaseTemplate
            className="home-page"
            showTopHeader={true}
            showCartHeader={false}
            showBottomHeader={true}
            showTopFooter={true}
            showMainFooter={true}
            showBottomFooter={true}
        >
            <ContentContainer>
                <ProductDetail
                    imageUrl={product.image}
                    code={product.id}
                    title={product.title}
                    description={product.description}
                    rating={product.rating.rate}
                    ratingCount={product.rating.count}
                    oldPrice={(product.price * 1.1).toFixed(2)}
                    discount={10}
                    newPrice={product.price}
                    bonus={Math.floor(product.price * 0.1).toFixed(2)}
                 />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default ProductDetailPage;
