import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import TopHeader from '../../components/Header/TopHeader';
import CartHeader from "../../components/Header/CartHeader";
import BottomHeader from '../../components/Header/BottomHeader';
import TopFooter from '../../components/Footer/TopFooter';
import MainFooter from '../../components/Footer/MainFooter';
import BottomFooter from '../../components/Footer/BottomFooter';

const BaseTemplate = ({ children, className, showTopHeader, showCartHeader, showBottomHeader, showTopFooter, showMainFooter, showBottomFooter }) => {
    return (
        <Box className={className} sx={{ width: '100%', padding: 0, margin: 0 }}>
            {showTopHeader && <TopHeader location="Київ" languages={['УКР', 'РУС']}/>}
            {showCartHeader && <CartHeader location="Київ" languages={['УКР', 'РУС']}/>}
            {showBottomHeader && <BottomHeader cartCount={1} totalAmount={2199}/>}
            <Box sx={{ flexGrow: 1}}>{children}</Box>
            {showTopFooter && <TopFooter />}
            {showMainFooter && <MainFooter />}
            {showBottomFooter && <BottomFooter />}
        </Box>
    );
};

BaseTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    showTopHeader: PropTypes.bool,
    showCartHeader: PropTypes.bool,
    showBottomHeader: PropTypes.bool,
    showTopFooter: PropTypes.bool,
    showMainFooter: PropTypes.bool,
    showBottomFooter: PropTypes.bool,
};

BaseTemplate.defaultProps = {
    className: '',
    showTopHeader: false,
    showBottomHeader: false,
    showTopFooter: false,
    showMainFooter: false,
    showBottomFooter: false,
};

export default BaseTemplate;
