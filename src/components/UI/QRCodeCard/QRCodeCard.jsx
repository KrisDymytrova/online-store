import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {styles} from "./styles.js";
import qrCode from '../../../assets/qr-code.svg';

const QRCodeCard = () => {
    return (
        <Box sx={styles.qrContainer}>
            <IconButton>
                <img src={qrCode} alt="QRCode" />
            </IconButton>
            <Typography variant="body1" sx={styles.qrText}>
                Нічого такого. Просто найзручніший та найшвидший додаток COMFY чекає на завантаження.
            </Typography>
        </Box>
    );
};

export default QRCodeCard;
