import React from 'react';
import { useSelector } from 'react-redux';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from '../../templates/ContentContainer';
import CheckoutOrderSuccess from '../../components/Checkout/CheckoutOrderSuccess';

const OrderSuccessPage = () => {
    const { city, deliveryMethod, contactInfo, totalAmount, orderDetails } = useSelector(state => state.order);

    if (!orderDetails) {
        return <div>Loading...</div>;
    }

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
                <CheckoutOrderSuccess
                    city={city}
                    deliveryMethod={deliveryMethod}
                    contactInfo={contactInfo}
                    totalAmount={totalAmount}
                />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default OrderSuccessPage;
