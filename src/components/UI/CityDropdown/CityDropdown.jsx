import React from 'react'
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styles } from './styles';

const CityDropdown = ({ cities, selectedCity, handleChange }) => {
    return (
        <FormControl sx={styles.formControl}>
            <InputLabel id="city-select-label" sx={styles.inputLabel}>
                Місто
            </InputLabel>
            <Select
                labelId="city-select-label"
                value={selectedCity}
                onChange={handleChange}
                label="Місто"
                sx={styles.select}
            >
                {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                        {city}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

CityDropdown.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCity: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default CityDropdown;
