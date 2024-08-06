import * as Yup from 'yup';

const validationRegisterForm = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Ім\'я повинно містити щонайменше 2 символи')
        .required('Ім\'я обов\'язкове'),
    lastName: Yup.string()
        .min(2, 'Прізвище повинно містити щонайменше 2 символи')
        .required('Прізвище обов\'язкове'),
    phoneNumber: Yup.string()
        .matches(/^\+380 \d{3} \d{3} \d{2} \d{2}$/, 'Невірний формат номера телефону')
        .required('Номер телефону обов\'язковий'),
    email: Yup.string()
        .email('Невірний формат електронної пошти')
        .required('Електронна пошта обов\'язкова'),
    password: Yup.string()
        .min(6, 'Пароль повинен містити не менше 6 символів')
        .required('Пароль обов\'язковий'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати')
        .required('Підтвердження паролю обов\'язкове')
});

export default validationRegisterForm;
