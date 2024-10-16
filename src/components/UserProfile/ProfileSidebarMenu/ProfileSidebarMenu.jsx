import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon, ListItemText, Badge } from '@mui/material';
import { HomeSharp, ListAlt, Favorite, Person, ExitToApp } from '@mui/icons-material';
import { styles } from './styles';

const ProfileSidebarMenu = ({ setActiveComponent, ordersCount, favoriteCount }) => {
    const [selected, setSelected] = useState('overview');

    const handleMenuClick = (option) => {
        setSelected(option); // Устанавливаем выбранный пункт меню
        setActiveComponent(option); // Вызываем callback для передачи выбранного элемента
    };

    return (
        <List sx={styles.menuList}>
            <ListItemButton
                onClick={() => handleMenuClick('overview')}
                sx={{
                    ...styles.menuItem,
                    fontWeight: selected === 'overview' ? 'bold' : 'normal',
                }}
            >
                <ListItemIcon sx={styles.menuIcon}>
                    <HomeSharp />
                </ListItemIcon>
                <ListItemText primary="Мій кабінет" />
            </ListItemButton>

            <ListItemButton
                onClick={() => handleMenuClick('orderHistory')}
                sx={{
                    ...styles.menuItem,
                    fontWeight: selected === 'orderHistory' ? 'bold' : 'normal',
                }}
            >
                <ListItemIcon sx={styles.menuIcon}>
                    <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Мої замовлення" />
                {ordersCount > 0 && (
                    <Badge badgeContent={ordersCount} color="primary" sx={styles.badge} />
                )}
            </ListItemButton>

            <ListItemButton
                onClick={() => handleMenuClick('favorites')}
                sx={{
                    ...styles.menuItem,
                    fontWeight: selected === 'favorites' ? 'bold' : 'normal',
                }}
            >
                <ListItemIcon sx={styles.menuIcon}>
                    <Favorite />
                </ListItemIcon>
                <ListItemText primary="Обрані товари" />
                {favoriteCount > 0 && (
                    <Badge badgeContent={favoriteCount} color="primary" sx={styles.badge} />
                )}
            </ListItemButton>

            <ListItemButton
                onClick={() => handleMenuClick('personalData')}
                sx={{
                    ...styles.menuItem,
                    fontWeight: selected === 'personalData' ? 'bold' : 'normal',
                }}
            >
                <ListItemIcon sx={styles.menuIcon}>
                    <Person />
                </ListItemIcon>
                <ListItemText primary="Персональні дані" />
            </ListItemButton>

            <ListItemButton
                onClick={() => handleMenuClick('logout')}
                sx={{
                    ...styles.menuItem,
                    fontWeight: selected === 'logout' ? 'bold' : 'normal',
                }}
            >
                <ListItemIcon sx={styles.menuIcon}>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Вийти" />
            </ListItemButton>
        </List>
    );
};

ProfileSidebarMenu.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    ordersCount: PropTypes.number,
    favoriteCount: PropTypes.number,
};

ProfileSidebarMenu.defaultProps = {
    ordersCount: 0,
    favoriteCount: 0,
};

export default ProfileSidebarMenu;


