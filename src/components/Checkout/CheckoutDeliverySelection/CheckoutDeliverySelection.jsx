import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, Select, MenuItem } from '@mui/material';
import CheckoutContinueButton from '../../UI/Buttons/CheckoutContinueButton';
import CheckoutCollapsedButton from '../../UI/Buttons/CheckoutCollapsedButton';
import { setCity, setDeliveryMethod } from '../../../redux/slices/orderSlice';
import { styles } from './styles';

const CheckoutDeliverySelection = ({ deliveryMethods, cities }) => {
    const dispatch = useDispatch();
    const { city, deliveryMethod } = useSelector((state) => state.order);
    const [selectedMethod, setSelectedMethod] = useState(deliveryMethod || null);
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        const storedCity = localStorage.getItem('city');
        const storedDeliveryMethod = localStorage.getItem('deliveryMethod');

        if (storedCity) {
            dispatch(setCity(storedCity));
        }

        if (storedDeliveryMethod) {
            const parsedDeliveryMethod = JSON.parse(storedDeliveryMethod);
            dispatch(setDeliveryMethod(parsedDeliveryMethod));
        }
    }, [dispatch]);

    useEffect(() => {
        setSelectedMethod(deliveryMethod);
    }, [deliveryMethod]);

    const handleMethodChange = (event) => {
        const method = deliveryMethods.find(method => method.id === event.target.value);
        setSelectedMethod(method);
        dispatch(setDeliveryMethod(method));
    };

    const handleCityChange = (event) => {
        dispatch(setCity(event.target.value));
    };

    const handleChangeClick = () => {
        setIsCollapsed(false);
    };

    const handleProceedClick = () => {
        if (selectedMethod) {
            localStorage.setItem('deliveryMethod', JSON.stringify(selectedMethod));
        }
        localStorage.setItem('city', city);
        setIsCollapsed(true);
    };

    if (isCollapsed) {
        return (
            <Box sx={styles.collapsedContainer}>
                <Typography variant="h6" sx={styles.collapsedHeaderText}>
                    2. Спосіб доставки
                </Typography>
                <Box sx={styles.infoButton}>
                    <Box>
                        <Typography variant="body2" sx={styles.selectedInfo}>
                            {city ? `Місто: ${city}` : 'Місто: -'}
                        </Typography>
                        {deliveryMethod ? (
                            <Typography variant="body2" sx={styles.selectedInfo}>
                                {`Спосіб доставки: ${deliveryMethod.name} (${deliveryMethod.price === 0 ? 'Безкоштовно' : `${deliveryMethod.price} ₴`})`}
                            </Typography>
                        ) : (
                            <Typography variant="body2" sx={styles.selectedInfo}>
                                Спосіб доставки: -
                            </Typography>
                        )}
                    </Box>
                    <CheckoutCollapsedButton onClick={handleChangeClick} />
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={styles.container}>
            <Typography variant="h6" sx={styles.title}>Спосіб доставки</Typography>
            <Select
                value={city || ''}
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
                                    <Box>
                                        <Typography sx={styles.methodPrice}>{method.price === 0 ? 'Безкоштовно' : `${method.price} ₴`}</Typography>
                                    </Box>
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
