import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, loadFavoritesFromLocalStorage } from '../redux/slices/favoritesSlice';

const useFavorites = (code, product) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items || []);
    const [isFavorite, setIsFavorite] = useState(favorites.some(fav => fav.code === code));

    useEffect(() => {
        dispatch(loadFavoritesFromLocalStorage());
    }, [dispatch]);

    const handleToggleFavorite = (showSnackbarWithMessage) => {
        if (isFavorite) {
            dispatch(removeFavorite(code));
            showSnackbarWithMessage('Товар успішно видалений з обраного');
        } else {
            dispatch(addFavorite(product));
            showSnackbarWithMessage('Товар успішно доданий до обраного');
        }
        setIsFavorite(!isFavorite);
    };

    return {
        isFavorite,
        handleToggleFavorite
    };
};

export default useFavorites;
