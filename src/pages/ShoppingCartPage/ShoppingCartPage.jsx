import React from 'react';
import BaseTemplate from "../../templates/BaseTemplate";
import Cart from "../../components/ShoppingCart/Cart";
import ContentContainer from "../../templates/ContentContainer";

const ShoppingCartPage = () => {

    return (
        <BaseTemplate
            className="home-page"
            showTopHeader={false}
            showCartHeader={true}
            showBottomHeader={false}
            showTopFooter={true}
            showMainFooter={true}
            showBottomFooter={true}
        >
            <ContentContainer>
                <Cart />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default ShoppingCartPage;