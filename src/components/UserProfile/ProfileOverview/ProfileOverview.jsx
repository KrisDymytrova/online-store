import React from 'react';
import { Grid, Typography, Card, CardContent, CardActionArea, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import DiscountIcon from '@mui/icons-material/LocalOffer';
import welcome from '../../../assets/customer-welcome-image.svg';
import { styles } from './styles';

const ProfileOverview = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Box>
                <img src={welcome} alt="customer-welcome-image" style={styles.logo}/>
            </Box>
            <Typography variant="h5" gutterBottom>
                Вітаємо в особистому кабінеті! 😊
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
                Тут знайдете всю інформацію про ваші покупки та замовлення. А також зможете змінити особисті дані і купувати вигідніше з бонусами
            </Typography>

            <Grid container spacing={3} sx={styles.gridContainer}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={styles.card}>
                        <CardActionArea>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <ShoppingCartIcon sx={styles.icon} />
                                <Typography sx={styles.cardTitle}>Історія покупок</Typography>
                                <Typography sx={styles.cardText}>
                                    Дізнайтеся історію ваших покупок
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={styles.card}>
                        <CardActionArea>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <FavoriteIcon sx={{ ...styles.icon, color: '#F44336' }} />
                                <Typography sx={styles.cardTitle}>Обрані товари</Typography>
                                <Typography sx={styles.cardText}>
                                    Перегляньте вподобані товари
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={styles.card}>
                        <CardActionArea>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <LoyaltyIcon sx={{ ...styles.icon, color: '#FF9800' }} />
                                <Typography sx={styles.cardTitle}>Бонуси</Typography>
                                <Typography sx={styles.cardText}>
                                    Дізнайтеся їх кількість і на що можна витратити
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={styles.card}>
                        <CardActionArea>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <DiscountIcon sx={{ ...styles.icon, color: '#4CAF50' }} />
                                <Typography sx={styles.cardTitle}>Купони</Typography>
                                <Typography sx={styles.cardText}>
                                    Купуйте вигідніше з персональними знижками
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProfileOverview;
