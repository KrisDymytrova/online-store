import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Button, TextField } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import { styles } from './styles';
import validationRegisterForm from '../../../utils/validationSchemas/validationRegisterForm.js';

const RegisterForm = ({ onClose, onShowLogin }) => {
    return (
        <Box sx={styles.popupContainer}>
            <Box sx={styles.popupHeader}>
                <Typography variant="h6">Реєстрація</Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={validationRegisterForm}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Register values:', values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Box sx={styles.popupContent}>
                            <Field
                                as={TextField}
                                name="firstName"
                                label="Ім'я"
                                variant="outlined"
                                fullWidth
                                error={touched.firstName && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                                sx={styles.inputField}
                            />
                            <Field
                                as={TextField}
                                name="lastName"
                                label="Прізвище"
                                variant="outlined"
                                fullWidth
                                error={touched.lastName && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                                sx={styles.inputField}
                            />
                            <Field
                                as={TextField}
                                name="phoneNumber"
                                label="Номер телефону"
                                variant="outlined"
                                fullWidth
                                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                helperText={touched.phoneNumber && errors.phoneNumber}
                                sx={styles.inputField}
                            />
                            <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                sx={styles.inputField}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Пароль"
                                type="password"
                                variant="outlined"
                                fullWidth
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                sx={styles.inputField}
                            />
                            <Field
                                as={TextField}
                                name="confirmPassword"
                                label="Підтвердження паролю"
                                type="password"
                                variant="outlined"
                                fullWidth
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                sx={styles.inputField}
                            />
                        </Box>
                        <Box sx={styles.popupActions}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                fullWidth
                                sx={styles.submitButton}
                            >
                                Зареєструватися
                            </Button>
                        </Box>
                        <Box sx={styles.alternativeLogin}>
                            <Typography
                                variant="body2"
                                align="center"
                                sx={styles.registerLink}
                                onClick={onShowLogin}
                            >
                                Увійти
                            </Typography>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

RegisterForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onShowLogin: PropTypes.func.isRequired,
};

export default RegisterForm;
