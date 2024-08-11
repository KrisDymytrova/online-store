import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import CheckoutProductsList from '../CheckoutProductsList';
import CheckoutContactInfo from '../CheckoutContactInfo';
import CheckoutDeliverySelection from '../CheckoutDeliverySelection';
import CheckoutPaymentMethod from '../CheckoutPaymentMethod';
import CheckoutGiftCard from '../CheckoutGiftCard';
import CheckoutComment from '../CheckoutComment';
import CheckoutSummary from '../CheckoutSummary';
import { styles } from './styles';

const Checkout = () => {
    const { totalAmount, totalDiscount, finalAmount, cartCount } = useSelector(state => state.cart);
    const items = useSelector(state => state.cart.items);

    const [city, setCity] = useState('');
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [discountCode, setDiscountCode] = useState('');
    const [bonusCardNumber, setBonusCardNumber] = useState('');

    const deliveryMethods = [
        { id: '1', name: 'Самовивіз з магазину', price: 0, additionalInfo: true, image: 'src/assets/in-shop.svg' },
        { id: '2', name: 'До відділення Нова пошта', price: 1, additionalInfo: false, image: 'src/assets/novaposhta.png', subLabel: 'Сьогодні'  },
        { id: '3', name: 'До відділення Meest пошта', price: 1, additionalInfo: false, image: 'src/assets/meest.png', subLabel: '18 серпня'  },
        { id: '4', name: 'Кур\'єр COMFY', price: 119, additionalInfo: false, image: 'src/assets/delivery-comfy.svg', subLabel: '19 серпня'  },
        { id: '5', name: 'Кур\'єр Нова Пошта', price: 179, additionalInfo: false, image: 'src/assets/novaposhta.png', subLabel: 'Сьогодні'  },
    ];

    const paymentMethods = [
        { id: '1', name: 'Оплата при отриманні', image: 'src/assets/cash-on-delivery.svg' },
        { id: '2', name: 'Оплата частинами або кредит', image: 'src/assets/installment.png', subLabel: 'До 18 платежів' },
        { id: '3', name: 'Онлайн оплата', image: 'src/assets/visa-mastercard.svg', subLabel: 'Visa/MasterCard' },
        { id: '4', name: 'Онлайн-оплата PrivatPay', image: 'src/assets/privatpay.png', subLabel: 'Онлайн-оплата' },
        { id: '5', name: 'Apple Pay', image: 'src/assets/apple-pay.svg', subLabel: 'Онлайн-оплата' },
        { id: '6', name: 'Google Pay', image: 'src/assets/google-pay.svg', subLabel: 'Онлайн-оплата' },
    ];

    const cities = ['Київ', 'Львів', 'Одеса', 'Харків'];

    const handleCityChange = (newCity) => {
        setCity(newCity);
    };

    const handleDeliveryMethodChange = (method) => {
        setSelectedDeliveryMethod(method);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handleContactInfoSubmit = (values) => {
        console.log('Contact Info Submitted:', values);
    };

    const handleGiftCardSubmit = (code) => {
        console.log('Gift Card Code Submitted:', code);
    };

    const handleCommentSubmit = (comment) => {
        console.log('Order Comment Submitted:', comment);
    };

    const handleDiscountApply = (code) => {
        setDiscountCode(code);
    };

    const handleBonusCardChange = (number) => {
        setBonusCardNumber(number);
    };

    const handleConfirmOrder = () => {
        console.log('Order Confirmed');
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={styles.text}>Оформити замовлення</Typography>
            <Box sx={styles.container}>
                <Box sx={styles.itemsList}>
                    <Box>
                        <CheckoutProductsList items={items} />
                    </Box>
                    <Box>
                        <CheckoutContactInfo onSubmit={handleContactInfoSubmit} />
                    </Box>
                    <Box>
                        <CheckoutDeliverySelection
                            deliveryMethods={deliveryMethods}
                            city={city}
                            onCityChange={handleCityChange}
                            onDeliveryMethodChange={handleDeliveryMethodChange}
                            cities={cities}
                        />
                    </Box>
                    <Box>
                        <CheckoutPaymentMethod
                            paymentMethods={paymentMethods}
                            selectedMethod={selectedPaymentMethod}
                            onPaymentMethodChange={handlePaymentMethodChange}
                        />
                    </Box>
                    <Box>
                        <CheckoutGiftCard onSubmit={handleGiftCardSubmit} />
                    </Box>
                    <Box>
                        <CheckoutComment onCommentSubmit={handleCommentSubmit} />
                    </Box>
                </Box>
                <Box>
                    <CheckoutSummary
                        cartCount={cartCount}
                        totalAmount={totalAmount}
                        discountCode={discountCode}
                        bonusCardNumber={bonusCardNumber}
                        totalDiscount={totalDiscount}
                        finalAmount={finalAmount}
                        onDiscountApply={handleDiscountApply}
                        onBonusCardChange={handleBonusCardChange}
                        onConfirmOrder={handleConfirmOrder}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
