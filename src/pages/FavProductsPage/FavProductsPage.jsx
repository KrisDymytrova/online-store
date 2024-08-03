import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/productsApi/productsApi.js';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from "../../templates/ContentContainer";

const ProductDetailPage = () => {

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

            </ContentContainer>
        </BaseTemplate>
    );
};

export default ProductDetailPage;