import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from "../../templates/ContentContainer";
import FavProductList from "../../components/Products/FavProductsList";

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
                <FavProductList />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default ProductDetailPage;