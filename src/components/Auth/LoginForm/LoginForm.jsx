import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Button, TextField, InputAdornment } from '@mui/material';
import { Close as CloseIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, authFailure } from '../../../redux/slices/authSlice';
import validationLoginForm from '../../../utils/validationSchemas/validationLoginForm.js';
import { getUserData } from '../../../utils/localStorage';
import { styles } from './styles';

const LoginForm = ({ onClose, onShowRegister }) => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

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
                    const userData = getUserData();
                    if (userData && values.login === userData.email && values.password === userData.password) {
                        dispatch(loginSuccess({ email: values.login }));
                    } else {
                        dispatch(authFailure('Неправильні облікові дані'));
                    }
                    setSubmitting(false);
                    onClose();
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Box sx={styles.popupContent}>
                            <Typography variant="body2" color="textSecondary">
                                Для входу введіть свою email адресу та пароль
                            </Typography>
                            {error && (
                                <Typography variant="body2" color="error">
                                    {error}
                                </Typography>
                            )}
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
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                fullWidth
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                sx={styles.inputField}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
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
                                Реєстрація
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
