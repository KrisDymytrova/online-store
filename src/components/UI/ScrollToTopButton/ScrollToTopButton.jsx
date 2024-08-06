import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { styles } from './styles';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <IconButton
            onClick={handleClick}
            sx={{ ...styles.scrollToTopButton, display: visible ? 'flex' : 'none' }}
        >
            <KeyboardArrowUp />
        </IconButton>
    );
};

export default ScrollToTopButton;
