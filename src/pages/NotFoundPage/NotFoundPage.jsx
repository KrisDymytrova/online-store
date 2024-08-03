import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
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
        <BaseTemplate className={'not-found-page'}>
            <Typography variant="h3" align="center" gutterBottom>
                Page Not Found
            </Typography>
        </BaseTemplate>
    );
};

export default NotFoundPage;