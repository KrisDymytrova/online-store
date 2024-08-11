import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, TextField, Select, MenuItem } from '@mui/material';
import CheckoutContinueButton from '../../UI/Buttons/CheckoutContinueButton';
import CheckoutCollapsedButton from '../../UI/Buttons/CheckoutCollapsedButton';
import { styles } from './styles';

const CheckoutDeliverySelection = ({ deliveryMethods, city, onCityChange, onDeliveryMethodChange, cities }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleMethodChange = (event) => {
        const method = deliveryMethods.find(method => method.id === event.target.value);
        setSelectedMethod(method);
        onDeliveryMethodChange(method);
    };

    const handleCityChange = (event) => {
        onCityChange(event.target.value);
    };

    const handleChangeClick = () => {
        setIsCollapsed(false);
    };

    const handleProceedClick = () => {
        setIsCollapsed(true);
    };

    if (isCollapsed) {
        return (
            <Box sx={styles.collapsedContainer}>
                <Typography variant="h6" sx={styles.collapsedHeaderText}>
                    2. Спосіб доставки
                </Typography>
                <CheckoutCollapsedButton onClick={handleChangeClick} />
            </Box>
        );
    }

    return (
        <Box sx={styles.container}>
            <Typography variant="h6" sx={styles.title}>Спосіб доставки</Typography>
            <Select
                value={city}
                onChange={handleCityChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Ваше місто' }}
                sx={styles.citySelect}
            >
                <MenuItem value="" disabled>Ваше місто</MenuItem>
                {cities.map((cityName) => (
                    <MenuItem key={cityName} value={cityName}>{cityName}</MenuItem>
                ))}
            </Select>
            <RadioGroup value={selectedMethod?.id || ''} onChange={handleMethodChange} sx={styles.radioGroup}>
                {deliveryMethods.map((method) => (
                    <Box key={method.id} sx={styles.methodBox}>
                        <FormControlLabel
                            value={method.id}
                            control={<Radio sx={styles.radio}/>}
                            label={
                                <Box sx={styles.infoBox}>
                                    <Box>
                                        <Box sx={styles.labelBox}>
                                            <Typography sx={styles.methodName}>{method.name}</Typography>
                                            <img src={method.image} alt={method.name}
                                                 style={{marginRight: '10px', width: '24px', height: '24px'}}/>
                                        </Box>
                                        <Box>
                                            {method.subLabel && (
                                                <Typography sx={styles.methodSubLabel}>{method.subLabel}</Typography>
                                            )}
                                        </Box>
                                    </Box>
                                    <Typography sx={styles.methodPrice}>{method.price === 0 ? 'Безкоштовно' : `${method.price} ₴`}</Typography>
                                </Box>
                            }
                        />
                        {method.id === selectedMethod?.id && method.additionalInfo && (
                            <Button sx={styles.selectStoreButton}>Вибрати магазин</Button>
                        )}
                    </Box>
                ))}
            </RadioGroup>
            <Box sx={styles.buttonBox}>
                <CheckoutContinueButton onClick={handleProceedClick} />
            </Box>
        </Box>
    );
};

CheckoutDeliverySelection.propTypes = {
    deliveryMethods: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            additionalInfo: PropTypes.bool
        })
    ).isRequired,
    city: PropTypes.string.isRequired,
    onCityChange: PropTypes.func.isRequired,
    onDeliveryMethodChange: PropTypes.func.isRequired,
    cities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CheckoutDeliverySelection;
