import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from '../../templates/ContentContainer';
import CheckoutOrderSuccess from '../../components/Checkout/CheckoutOrderSuccess';

const OrderSuccessPage = () => {
    const orderData = {
        orderNumber: '6906520',
        totalAmount: '434',
        deliveryInfo: {
            address: 'Київ, Нова пошта: 16',
            postOffice: '16',
            phone: '+38 (XXX) XXX-XX-XX',
        },
    };

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
                    orderNumber={orderData.orderNumber}
                    totalAmount={orderData.totalAmount}
                    deliveryInfo={orderData.deliveryInfo}
                />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default OrderSuccessPage;
