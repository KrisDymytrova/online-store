import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, TextField, Button, Select, MenuItem, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import EditIcon from '@mui/icons-material/Edit';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styles } from './styles';

const PersonalData = ({ user, lastDelivery }) => {
    // Форма для редактирования персональных данных
    const formik = useFormik({
        initialValues: {
            lastName: user.lastName || '',
            firstName: user.firstName || '',
            middleName: user.middleName || '',
            gender: user.gender || 'Не вказувати',
            birthDay: user.birthDay || '',
            birthMonth: user.birthMonth || '',
            birthYear: user.birthYear || '',
        },
        validationSchema: Yup.object({
            lastName: Yup.string().required('Прізвище обов’язкове'),
            firstName: Yup.string().required("Ім'я обов’язкове"),
            middleName: Yup.string(),
            birthDay: Yup.string(),
            birthMonth: Yup.string(),
            birthYear: Yup.string(),
        }),
        onSubmit: (values) => {
            // Логика отправки данных
            console.log('Submitted data:', values);
        },
    });

    return (
        <Box sx={styles.personalDataContainer}>
            <Typography variant="h5" sx={styles.sectionTitle}>
                Персональні дані
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Box sx={styles.section}>
                    <Typography variant="h6" sx={styles.sectionSubtitle}>
                        Особисті дані
                        <IconButton sx={styles.editButton}>
                            <EditIcon sx={styles.editIcon} />
                        </IconButton>
                    </Typography>

                    <Box sx={styles.formGroup}>
                        <TextField
                            fullWidth
                            label="Прізвище"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            sx={styles.textField}
                        />
                        <TextField
                            fullWidth
                            label="Ім'я"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            sx={styles.textField}
                        />
                        <TextField
                            fullWidth
                            label="По батькові"
                            name="middleName"
                            value={formik.values.middleName}
                            onChange={formik.handleChange}
                            sx={styles.textField}
                        />
                        <Select
                            fullWidth
                            label="Стать"
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            sx={styles.selectField}
                        >
                            <MenuItem value="Не вказувати">Не вказувати</MenuItem>
                            <MenuItem value="Чоловіча">Чоловіча</MenuItem>
                            <MenuItem value="Жіноча">Жіноча</MenuItem>
                        </Select>

                        <Box sx={styles.birthDateGroup}>
                            <TextField
                                label="День"
                                name="birthDay"
                                value={formik.values.birthDay}
                                onChange={formik.handleChange}
                                sx={styles.dateField}
                            />
                            <TextField
                                label="Місяць"
                                name="birthMonth"
                                value={formik.values.birthMonth}
                                onChange={formik.handleChange}
                                sx={styles.dateField}
                            />
                            <TextField
                                label="Рік"
                                name="birthYear"
                                value={formik.values.birthYear}
                                onChange={formik.handleChange}
                                sx={styles.dateField}
                            />
                        </Box>
                    </Box>

                    <Box sx={styles.buttonBox}>
                        <Button type="button" variant="outlined" sx={styles.cancelButton}>
                            Скасувати
                        </Button>
                        <Button type="submit" variant="contained" sx={styles.saveButton}>
                            Зберегти
                        </Button>
                    </Box>
                </Box>
            </form>

            <Box sx={styles.section}>
                <Typography variant="h6" sx={styles.sectionSubtitle}>
                    Контакти
                    <IconButton sx={styles.editButton}>
                        <EditIcon sx={styles.editIcon} />
                    </IconButton>
                </Typography>
                <Typography variant="body1">
                    Номер телефону: {user.phone}
                </Typography>
            </Box>

            <Box sx={styles.section}>
                <Typography variant="h6" sx={styles.sectionSubtitle}>
                    Остання доставка
                </Typography>
                <Typography variant="body1">
                    Дата доставки: {lastDelivery}
                </Typography>
            </Box>

            <Box sx={styles.hintBox}>
                <Box sx={styles.textBox}>
                    <Typography variant="body3" sx={styles.hintMainText}>
                        Підказка
                    </Typography>
                    <Typography variant="body2" sx={styles.hintText}>
                        На сторінці заповнюються персональні дані. Ми нікому їх не повідомляємо і використовуємо, щоб зробити ваші подальші покупки зручнішими 💚
                    </Typography>
                </Box>
                <HelpOutlineIcon sx={styles.helpIcon}/>
            </Box>
        </Box>
    );
};

PersonalData.propTypes = {
    user: PropTypes.shape({
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        middleName: PropTypes.string,
        phone: PropTypes.string.isRequired,
        gender: PropTypes.string,
        birthDay: PropTypes.string,
        birthMonth: PropTypes.string,
        birthYear: PropTypes.string,
    }).isRequired,
    lastDelivery: PropTypes.string.isRequired,
};

export default PersonalData;

