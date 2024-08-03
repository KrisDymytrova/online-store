import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Phone } from '@mui/icons-material';
import CityDropdown from '../../UI/CityDropdown';
import logo from '../../../assets/logo_main.svg';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';

const TopHeader = ({ languages }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const navigate = useNavigate();

    const cities = ['Київ', 'Львів', 'Одеса', 'Харків'];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <AppBar sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Box sx={styles.logoBox} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="COMFY Logo" style={styles.logo} />
                    <Typography sx={styles.cityTypography}>
                        <CityDropdown
                            cities={cities}
                            selectedCity={selectedCity}
                            handleChange={handleCityChange}
                        />
                    </Typography>
                </Box>
                <Box sx={styles.buttonBox}>
                    <Button sx={styles.buttonAccent}>Акції</Button>
                    <Button sx={styles.button}>Подарункові картки</Button>
                    <Button sx={styles.button}>Магазини</Button>
                    <Button sx={styles.buttonHelp}>
                        <Phone />
                        Допомога
                    </Button>
                    {languages.map((lang, index) => (
                        <React.Fragment key={lang}>
                            {index === 0 ? (
                                <Button sx={styles.languageButton}>{lang}</Button>
                            ) : (
                                <Typography sx={styles.languageText}>{lang}</Typography>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

TopHeader.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TopHeader;

