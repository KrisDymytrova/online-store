import * as Yup from 'yup';

const validationLoginForm = Yup.object().shape({
    login: Yup.string()
        .email('Неправильний формат електронної пошти')
        .trim()
        .required('Логін є обов\'язковим'),
    password: Yup.string()
        .min(6, 'Пароль повинен містити щонайменше 6 символів')
        .trim()
        .required('Пароль обов\'язковий'),
});

export default validationLoginForm;