import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, Typography, TextField, Button, IconButton, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styles } from './styles';

const CheckoutGiftCard = ({ onSubmit }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [giftCardCode, setGiftCardCode] = useState('');

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleInputChange = (event) => {
        setGiftCardCode(event.target.value);
    };

    const handleSubmit = () => {
        if (giftCardCode) {
            onSubmit(giftCardCode);
        }
    };

    return (
        <Box>
            <Box sx={styles.container}>
                <Checkbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    sx={styles.checkbox}
                />
                <Typography sx={styles.text}>У мене є подарункова карта</Typography>
                <Tooltip title="Введіть код вашої подарункової карти тут">
                    <IconButton sx={styles.infoIcon}>
                        <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
            {isChecked && (
                <Box sx={styles.expandedContainer}>
                    <Typography sx={styles.formLabel}>Заповніть дані Вашої карти</Typography>
                    <Box sx={styles.input}>
                        <TextField
                            value={giftCardCode}
                            onChange={handleInputChange}
                            placeholder="Код карти"
                            variant="outlined"
                            size="small"
                            sx={styles.inputField}
                        />
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={!giftCardCode}
                            sx={styles.balanceButton}
                        >
                            Дізнатись баланс
                        </Button>
                    </Box>
                    <Typography sx={styles.warningText}>
                        При оплаті подарунковою картою не можна списати бонуси з Вашої бонусної карти
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

CheckoutGiftCard.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CheckoutGiftCard;
