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
