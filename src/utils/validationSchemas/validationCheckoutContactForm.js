import * as Yup from 'yup';

const validationCheckoutContactForm = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(/^\+380 \d{2} \d{3} \d{2} \d{2}$/, 'Невірний формат номера телефону')
        .required('Номер телефону обов\'язковий'),
    firstName: Yup.string()
        .min(2, 'Ім\'я повинно містити щонайменше 2 символи')
        .required('Ім\'я обов\'язкове'),
    email: Yup.string()
        .email('Невірний формат електронної пошти')
        .required('Електронна пошта обов\'язкова'),
    receiverPhone: Yup.string().when('isAnotherReceiver', {
        is: true,
        then: Yup.string()
            .matches(/^\+380 \d{2} \d{3} \d{2} \д{2}$/, 'Невірний формат номера телефону')
            .required('Номер телефону обов\'язковий'),
    }),
    receiverFirstName: Yup.string().when('isAnotherReceiver', {
        is: true,
        then: Yup.string()
            .min(2, 'Ім\'я повинно містити щонайменше 2 символи')
            .required('Ім\'я обов\'язкове'),
    }),
    receiverLastName: Yup.string().when('isAnotherReceiver', {
        is: true,
        then: Yup.string()
            .min(2, 'Прізвище повинно містити щонайменше 2 символи')
            .required('Прізвище обов\'язкове'),
    }),
});

export default validationCheckoutContactForm;
