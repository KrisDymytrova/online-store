import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon, ListItemText, Badge } from '@mui/material';
import { HomeSharp, ListAlt, Favorite, Person, ExitToApp } from '@mui/icons-material';
import { styles } from './styles';

const ProfileSidebarMenu = ({ handleSelectOption, ordersCount, favoriteCount }) => {
    return (
        <List sx={styles.menuList}>
            <ListItemButton onClick={() => handleSelectOption('/profile')} sx={styles.menuItem}>
                <ListItemIcon sx={styles.menuIcon}>
                    <HomeSharp />
                </ListItemIcon>
                <ListItemText primary="Мій кабінет" />
            </ListItemButton>

            <ListItemButton onClick={() => handleSelectOption('/orders')} sx={styles.menuItem}>
                <ListItemIcon sx={styles.menuIcon}>
                    <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Мої замовлення" />
                {ordersCount > 0 && <Badge badgeContent={ordersCount} color="primary" sx={styles.badge} />}
            </ListItemButton>

            <ListItemButton onClick={() => handleSelectOption('/fav-products')} sx={styles.menuItem}>
                <ListItemIcon sx={styles.menuIcon}>
                    <Favorite />
                </ListItemIcon>
                <ListItemText primary="Обрані товари" />
                {favoriteCount > 0 && <Badge badgeContent={favoriteCount} color="primary" sx={styles.badge} />}
            </ListItemButton>

            <ListItemButton onClick={() => handleSelectOption('/personal-data')} sx={styles.menuItem}>
                <ListItemIcon sx={styles.menuIcon}>
                    <Person />
                </ListItemIcon>
                <ListItemText primary="Персональні дані" />
            </ListItemButton>

            <ListItemButton onClick={() => handleSelectOption('/logout')} sx={styles.menuItem}>
                <ListItemIcon sx={styles.menuIcon}>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Вийти" />
            </ListItemButton>
        </List>
    );
};

ProfileSidebarMenu.propTypes = {
    handleSelectOption: PropTypes.func.isRequired,
    ordersCount: PropTypes.number,
    favoriteCount: PropTypes.number,
};

ProfileSidebarMenu.defaultProps = {
    ordersCount: 0,
    favoriteCount: 0,
};

export default ProfileSidebarMenu;
