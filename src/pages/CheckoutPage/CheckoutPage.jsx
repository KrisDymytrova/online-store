import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import Checkout from '../../components/Checkout/Checkout';
import ContentContainer from '../../templates/ContentContainer';

const CheckoutPage = () => {

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
                <Checkout  />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default CheckoutPage;