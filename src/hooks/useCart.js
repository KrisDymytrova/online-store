import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const useCart = (product) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.some(item => item.code === product.code);

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return {
        isInCart,
        handleAddToCart
    };
};

export default useCart;
