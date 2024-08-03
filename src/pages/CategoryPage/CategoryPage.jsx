import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from "../../templates/ContentContainer";
import ProductsCategoryList from "../../components/Products/ProductsCategoryList";

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
                <ProductsCategoryList />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default ProductDetailPage;