import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const formatCurrency = (amount) => {
    return amount.toFixed(2);
};

const CheckoutSummary = ({
                             totalAmount,
                             discountCode,
                             bonusCardNumber,
                             totalDiscount,
                             finalAmount,
                             cartCount,
                             onDiscountApply,
                             onBonusCardChange,
                             onConfirmOrder,
                         }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setIsConfirmed(event.target.checked);
    };

    const handleConfirmOrder = () => {
        onConfirmOrder();
        navigate('/order-success');
    };

    return (
        <Box sx={styles.summary}>
            <Typography variant="h6" sx={styles.title}>
                Разом:
            </Typography>
            <Box sx={styles.inputContainer}>
                <TextField
                    variant="outlined"
                    placeholder="Код знижки"
                    sx={styles.textField}
                    value={discountCode}
                    onChange={(e) => onDiscountApply(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={styles.applyButton}
                    onClick={() => onDiscountApply(discountCode)}
                >
                    Застосувати
                </Button>
            </Box>
            <Box sx={styles.inputContainer}>
                <TextField
                    variant="outlined"
                    placeholder="Номер бонусної картки"
                    sx={styles.textField}
                    value={bonusCardNumber}
                    onChange={(e) => onBonusCardChange(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={styles.applyButton}
                    onClick={() => onBonusCardChange(bonusCardNumber)}
                >
                    <DoneOutlineIcon />
                </Button>
            </Box>
            <Typography variant="body2" sx={styles.changeBonusCard}>
                змінити номер бонусної картки
            </Typography>
            <Box sx={styles.bonusInfo}>
                <Typography variant="body2" sx={styles.bonusText}>
                    За покупку буде нараховано
                </Typography>
                <Typography sx={styles.bonusCount}>
                    45 бонусів
                </Typography>
            </Box>
            <Box sx={styles.disclaimer}>
                Для зазначеної картки доступно тільки нарахування бонусів. Списання бонусів доступно тільки для карти, зазначеної у Вашому особистому кабінеті
            </Box>
            <Box sx={styles.summaryDetails}>
                <Box sx={styles.summaryTextContainer}>
                    <Box sx={styles.summaryText}>
                        <Typography>Товари на суму</Typography>
                        <Typography sx={styles.price}>{formatCurrency(totalAmount)} ₴</Typography>
                    </Box>
                    <Box sx={styles.summaryText}>
                        <Typography>Знижка</Typography>
                        <Typography sx={styles.price}>- {formatCurrency(totalDiscount)} ₴</Typography>
                    </Box>
                    <Box sx={styles.summaryText}>
                        <Typography>Доставка</Typography>
                        <Typography sx={styles.price}>75.00 ₴</Typography>
                    </Box>
                    <Box sx={styles.summaryText}>
                        <Typography>Кількість товарів </Typography>
                        <Typography sx={styles.price}>{cartCount} шт.</Typography>
                    </Box>
                </Box>
                <Box sx={styles.totalText}>
                    <Typography variant="h6">Загальна сума</Typography>
                    <Typography variant="h6" sx={styles.price}>{formatCurrency(finalAmount + 75.00)} ₴</Typography>
                </Box>
            </Box>
            <Button
                variant="contained"
                sx={styles.checkoutButton}
                onClick={handleConfirmOrder}
                disabled={!isConfirmed}
            >
                Оформити замовлення
            </Button>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isConfirmed}
                        onChange={handleCheckboxChange}
                        sx={styles.checkbox}
                    />
                }
                label="Підтверджую замовлення і погоджуюся з правилами користування сайтом"
                sx={styles.checkboxLabel}
            />
        </Box>
    );
};

CheckoutSummary.propTypes = {
    totalAmount: PropTypes.number.isRequired,
    discountCode: PropTypes.string,
    bonusCardNumber: PropTypes.string,
    totalDiscount: PropTypes.number.isRequired,
    finalAmount: PropTypes.number.isRequired,
    cartCount: PropTypes.number.isRequired, // Добавлен пропс
    onDiscountApply: PropTypes.func.isRequired,
    onBonusCardChange: PropTypes.func.isRequired,
    onConfirmOrder: PropTypes.func.isRequired,
};

export default CheckoutSummary;
