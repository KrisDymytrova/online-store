import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography, Avatar, Badge, ListItemIcon, IconButton} from '@mui/material';
import { Favorite, ListAlt } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import purchase from '../../../assets/no_purchase_logo.svg';
import { styles } from './styles';

const ProfileInfo = ({ user, onEditName  }) => {
    return (
        <Box sx={styles.profileContainer}>
            <Box sx={styles.profileName}>
                <Badge overlap="circular" sx={styles.badge}>
                    <Avatar sx={styles.avatar}>{user.initials}</Avatar>
                </Badge>
                <Box sx={styles.nameBox}>
                    <Typography variant="h6">{user.name}</Typography>
                </Box>
                <IconButton onClick={onEditName} sx={styles.editButton}>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box sx={styles.profileBonus}>
                <Typography variant="body2" sx={styles.bonusText}>ДОСТУПНІ БОНУСИ</Typography>
                <Typography variant="h5" sx={styles.bonusAmount}>{user.bonuses} ₴</Typography>
            </Box>

            <Box sx={styles.profileInfo}>
                <Box sx={styles.profileInfoBox}>
                    <ListItemIcon sx={styles.profileIcon}>
                        <ListAlt />
                    </ListItemIcon>
                    <Box sx={styles.profileInfoCount}>
                        <Typography variant="body2">Мої замовлення</Typography>
                        <Typography variant="body2"><span>{user.orders}</span></Typography>
                    </Box>
                </Box>
                <Box sx={styles.profileInfoBox}>
                    <ListItemIcon sx={styles.profileIcon}>
                        <Favorite />
                    </ListItemIcon>
                    <Box sx={styles.profileInfoCount}>
                        <Typography variant="body2">Мої обрані</Typography>
                        <Typography variant="body2"><span>{user.favorites}</span></Typography>
                    </Box>
                </Box>
            </Box>

           <Box sx={styles.profileTextImg}>
               <Box sx={styles.profileTextBox}>
                   <Typography variant="body2" sx={styles.firstText}>Будьте <span
                       style={{color: '#4caf50'}}>#НАМБЕРВАН</span> з Comfy</Typography>
                   <Typography variant="body2">
                       У <a href={user.catalogLink} style={{color: '#4caf50'}}>каталозі</a> знайдете всі товари. А
                       найвигідніше - у <a href={user.promotionsLink} style={{color: '#4caf50'}}>акційних пропозиціях</a>
                   </Typography>
               </Box>
               <Box>
                   <img src={purchase} alt="no_purchase_logo" style={styles.logo}/>
               </Box>
           </Box>
        </Box>
    );
};

ProfileInfo.propTypes = {
    user: PropTypes.shape({
        initials: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        bonuses: PropTypes.number.isRequired,
        orders: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        favorites: PropTypes.number.isRequired,
        catalogLink: PropTypes.string.isRequired,
        promotionsLink: PropTypes.string.isRequired,
    }).isRequired,
    onEditName: PropTypes.func.isRequired,
};

export default ProfileInfo;
