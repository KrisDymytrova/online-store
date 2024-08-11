import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { TextField, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import validationCheckoutContactForm from '../../../utils/validationSchemas/validationCheckoutContactForm.js';
import CheckoutContinueButton from '../../UI/Buttons/CheckoutContinueButton';
import CheckoutCollapsedButton from '../../UI/Buttons/CheckoutCollapsedButton';
import { styles } from './styles';

const CheckoutContactInfo = ({ onSubmit }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            firstName: '',
            email: '',
            isAnotherReceiver: false,
            receiverPhone: '',
            receiverFirstName: '',
            receiverLastName: '',
            receiverPatronymic: '',
        },
        validationSchema: validationCheckoutContactForm,
        onSubmit: (values) => {
            onSubmit(values);
            setIsCollapsed(true);
        },
    });

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
                    1. Контактна інформація
                </Typography>
                <CheckoutCollapsedButton onClick={handleChangeClick} />
            </Box>
        );
    }

    return (
        <form onSubmit={formik.handleSubmit} style={styles.formContainer}>
            <Typography variant="h6" sx={styles.formTitle}>
                1. Контактна інформація
            </Typography>
            <Box sx={styles.phoneNameEmailContainer}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Номер телефону"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    sx={styles.inputField}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Ім'я"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    sx={styles.inputField}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    label="E-mail"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={styles.inputField}
                />
            </Box>
            <FormControlLabel
                control={
                    <Checkbox
                        name="isAnotherReceiver"
                        checked={formik.values.isAnotherReceiver}
                        onChange={formik.handleChange}
                        sx={styles.checkbox}
                    />
                }
                label="Отримувати буде інша людина"
                sx={styles.checkboxField}
            />
            {formik.values.isAnotherReceiver && (
                <Box sx={styles.anotherReceiver}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Номер отримувача"
                        name="receiverPhone"
                        value={formik.values.receiverPhone}
                        onChange={formik.handleChange}
                        error={formik.touched.receiverPhone && Boolean(formik.errors.receiverPhone)}
                        helperText={formik.touched.receiverPhone && formik.errors.receiverPhone}
                        sx={styles.receiverField}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Ім'я"
                        name="receiverFirstName"
                        value={formik.values.receiverFirstName}
                        onChange={formik.handleChange}
                        error={formik.touched.receiverFirstName && Boolean(formik.errors.receiverFirstName)}
                        helperText={formik.touched.receiverFirstName && formik.errors.receiverFirstName}
                        sx={styles.receiverField}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Прізвище"
                        name="receiverLastName"
                        value={formik.values.receiverLastName}
                        onChange={formik.handleChange}
                        error={formik.touched.receiverLastName && Boolean(formik.errors.receiverLastName)}
                        helperText={formik.touched.receiverLastName && formik.errors.receiverLastName}
                        sx={styles.receiverField}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="По батькові"
                        name="receiverPatronymic"
                        value={formik.values.receiverPatronymic}
                        onChange={formik.handleChange}
                        sx={styles.receiverField}
                    />
                </Box>
            )}
            <Box sx={styles.buttonBox}>
                <CheckoutContinueButton onClick={handleProceedClick} />
            </Box>
        </form>
    );
};

CheckoutContactInfo.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CheckoutContactInfo;
