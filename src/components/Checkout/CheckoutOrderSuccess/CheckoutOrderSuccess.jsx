import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { styles } from './styles';

const CheckoutOrderSuccess = ({ orderNumber, totalAmount, deliveryInfo }) => {

    return (
        <Box sx={styles.summaryContainer}>
            <Typography variant="h6" sx={styles.title}>
                Дякуємо за замовлення!
            </Typography>
            <Box sx={styles.summary}>
                <Box sx={styles.infoSection}>
                    <Box sx={styles.section}>
                        <AccessTimeIcon sx={styles.icon} />
                        <Typography variant="body1" sx={styles.text}>
                            Ваше замовлення буде оброблене автоматично, в разі необхідності з вами зв'яжеться оператор.
                        </Typography>
                    </Box>
                    <Box sx={styles.section}>
                        <CheckCircleIcon sx={styles.icon} />
                        <Typography variant="body1" sx={styles.text}>
                            Номер Вашого замовлення: <strong>{orderNumber}</strong> <br />
                            Сума: <strong>{totalAmount} грн.</strong>
                        </Typography>
                    </Box>
                    <Box sx={styles.section}>
                        <InfoIcon sx={styles.icon} />
                        <Typography variant="body2" sx={styles.infoText}>
                            <strong>Інформація про замовлення:</strong> <br />
                            Ваша покупка буде доставлена за адресою: <br />
                            {deliveryInfo.address}, Нова пошта: {deliveryInfo.postOffice} <br />
                            Тел.: {deliveryInfo.phone}
                        </Typography>
                    </Box>
                </Box>


                <Box sx={styles.contactSection}>
                    <Typography variant="body2" sx={styles.contactText}>
                        Якщо у Вас виникли питання відносно замовлення або нашої роботи, будь ласка, дзвоніть або пишіть нам:
                    </Typography>
                    <Box sx={styles.contactInfo}>
                        <LocalPhoneIcon sx={styles.contactIcon} />
                        <Typography variant="body2">0-800-303-505</Typography>
                    </Box>
                    <Box sx={styles.contactInfo}>
                        <EmailIcon sx={styles.contactIcon} />
                        <Typography variant="body2">info@comfy.ua</Typography>
                    </Box>
                    <Box sx={styles.contactInfo}>
                        <ChatBubbleOutlineIcon sx={styles.contactIcon} />
                        <Typography variant="body2">Онлайн підтримка</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

CheckoutOrderSuccess.propTypes = {
    orderNumber: PropTypes.string.isRequired,
    totalAmount: PropTypes.string.isRequired,
    deliveryInfo: PropTypes.shape({
        address: PropTypes.string.isRequired,
        postOffice: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default CheckoutOrderSuccess;