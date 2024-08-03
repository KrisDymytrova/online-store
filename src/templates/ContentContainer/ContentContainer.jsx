import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const ContentContainer = ({ children }) => (
    <Box
        sx={{
            padding: 2,
            margin: 'auto',
            maxWidth: '1400px',
        }}
    >
        {children}
    </Box>
);

ContentContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContentContainer;
