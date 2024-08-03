import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Checkbox } from '@mui/material';
import { Delete, Add, Remove, CheckCircle, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem, deleteAllItems } from '../../../redux/slices/cartSlice';
import { styles } from './styles';

const CartItemList = ({ items }) => {
    const dispatch = useDispatch();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectItem = (itemId) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(itemId)
                ? prevSelected.filter(id => id !== itemId)
                : [...prevSelected, itemId]
        );
    };

    const handleDeleteAll = () => {
        dispatch(deleteAllItems());
        setSelectedItems([]);
    };

    if (items.length === 0) {
        return (
            <Box sx={styles.emptyCart}>
                <Typography variant="h6">Кошик порожній</Typography>
            </Box>
        );
    }

    return (
        <Box sx={styles.itemList}>
            <Box sx={styles.header}>
                <Delete />
                <Typography sx={styles.deleteAll} onClick={handleDeleteAll}>Видалити все</Typography>
            </Box>
            {items.map(item => {
                const totalOldPrice = (item.oldPrice * item.quantity).toFixed(2);
                const totalNewPrice = (item.newPrice * item.quantity).toFixed(2);
                const discountAmount = (item.oldPrice * item.quantity - totalNewPrice).toFixed(2);

                return (
                    <Box key={item.id} sx={styles.item}>
                        <Box sx={styles.itemDetails}>
                            <Checkbox
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelectItem(item.id)}
                            />
                            <img src={item.imageUrl} alt={item.title} style={styles.itemImage} />
                            <Box sx={styles.itemInfo}>
                                <Typography variant="body1">{item.title}</Typography>
                                <Typography variant="body2" sx={styles.code}>Код: {item.code}</Typography>
                                <Box sx={styles.iconText}>
                                    <CheckCircle sx={styles.checkIcon} />
                                    <Typography variant="body1" sx={styles.productAvailability}>Можна забрати сьогодні</Typography>
                                </Box>
                                <Box sx={styles.favDelete}>
                                    <Box sx={styles.favDelIcon}>
                                        <FavoriteBorder sx={styles.icon}/>
                                        <Typography variant="body1" sx={styles.code}> В обране </Typography>
                                    </Box>
                                    <Box sx={styles.favDelIcon} onClick={() => dispatch(deleteItem(item))} >
                                        <Delete sx={styles.icon}/>
                                        <Typography variant="body1" sx={styles.code}> Видалити </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={styles.quantityContainer}>
                            <IconButton onClick={() => dispatch(removeItem(item))} disabled={item.quantity <= 1} sx={styles.quantityButton}>
                                <Remove />
                            </IconButton>
                            <Typography sx={styles.quantity}>{item.quantity}</Typography>
                            <IconButton onClick={() => dispatch(addItem(item))} sx={styles.quantityButton}>
                                <Add />
                            </IconButton>
                        </Box>
                        <Box sx={styles.itemActions}>
                            <Box sx={styles.price}>
                                <Box sx={styles.oldDiscount}>
                                    <Typography variant="body2" sx={styles.oldPrice}>{totalOldPrice} ₴</Typography>
                                    <Typography variant="body2" sx={styles.discount}>-{item.discount}%</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={styles.newPrice}>{totalNewPrice} ₴</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

CartItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            oldPrice: PropTypes.number.isRequired,
            newPrice: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            discount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CartItemList;

