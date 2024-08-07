// Функция для получения данных пользователя из localStorage
export const getUserData = () => {
    try {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Ошибка при получении данных из localStorage:', error);
        return null;
    }
};

// Функция для сохранения данных пользователя в localStorage
export const saveUserData = (userData) => {
    try {
        localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
        console.error('Ошибка при сохранении данных в localStorage:', error);
    }
};

// Функция для получения данных корзины из localStorage
export const getCartItems = () => {
    try {
        const items = localStorage.getItem('cartItems');
        return items ? JSON.parse(items) : [];
    } catch (error) {
        console.error('Ошибка при получении данных из localStorage:', error);
        return [];
    }
};

// Функция для сохранения данных корзины в localStorage
export const saveCartItems = (items) => {
    try {
        localStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
        console.error('Ошибка при сохранении данных в localStorage:', error);
    }
};
