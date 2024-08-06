import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Button, TextField } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import { styles } from './styles';
import validationLoginForm from '../../../utils/validationSchemas/validationLoginForm.js';

const LoginForm = ({ onClose, onShowRegister }) => {
    return (
        <Box sx={styles.popupContainer}>
            <Box sx={styles.popupHeader}>
                <Typography variant="h6">Вхід</Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Formik
                initialValues={{ login: '', password: '' }}
                validationSchema={validationLoginForm}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Login values:', values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Box sx={styles.popupContent}>
                            <Typography variant="body2" color="textSecondary">
                                Для входу введіть свою email адресу
                            </Typography>
                            <Field
                                as={TextField}
                                name="login"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                error={touched.login && Boolean(errors.login)}
                                helperText={touched.login && errors.login}
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
                                Увійти
                            </Button>
                        </Box>
                        <Box sx={styles.alternativeLogin}>
                            <Typography
                                variant="body2"
                                align="center"
                                sx={styles.registerLink}
                                onClick={onShowRegister}
                            >
                                Зареєструватися
                            </Typography>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

LoginForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onShowRegister: PropTypes.func.isRequired,
};

export default LoginForm;
