import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import BaseTemplate from '../../templates/BaseTemplate';

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <BaseTemplate
            className="not-found-page"
            showTopHeader={true}
            showCartHeader={false}
            showBottomHeader={true}
            showTopFooter={true}
            showMainFooter={true}
            showBottomFooter={true}
        >
            <Box sx={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Page Not Found
                </Typography>
            </Box>
        </BaseTemplate>
    );
};

export default NotFoundPage;