import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ProfileOverview from '../ProfileOverview';
// import OrdersList from './OrdersList';
import FavProductsList from '../../Products/FavProductsList';
import PersonalData from '../PersonalData';

const ProfileMainContent = ({ selectedOption }) => {
    const user = {
        name: 'Кузнецова Крістіна',
        phone: '+38 (063) 202 - 66 - 06',
    };

    const lastDelivery = '17.03.2018';

    let content;

    switch (selectedOption) {
        case 'overview':
            content = <ProfileOverview />;
            break;
        // case 'orderHistory':
        //     content = <OrdersList />;
        //     break;
        case 'favorites':
            content = <FavProductsList />;
            break;
        case 'personalData':
            content = <PersonalData user={user} lastDelivery={lastDelivery} />;
            break;
        case 'logout':
            content = <div>Ви успішно вийшли</div>;
            break;
        default:
            content = <div>Виберіть пункт меню</div>;
    }

    return (
        <Box>
            {content}
        </Box>
    );
};

ProfileMainContent.propTypes = {
    selectedOption: PropTypes.string.isRequired,
};

export default ProfileMainContent;


