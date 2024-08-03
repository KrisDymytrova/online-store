import React from 'react';
import TopHeader from '../../components/Header/TopHeader';
import BottomHeader from '../../components/Header/BottomHeader';
import BaseTemplate from "../../templates/BaseTemplate/index.js";

const CheckoutPage = () => {

    return (
        <BaseTemplate className={'home-page'}>
            <TopHeader location="Київ" languages={['УКР', 'РУС']} />
            <BottomHeader cartCount={1} totalAmount={2199} />
        </BaseTemplate>
    );
};

export default CheckoutPage;