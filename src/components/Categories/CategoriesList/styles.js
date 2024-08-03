export const styles = {
    container: {
        padding: '60px',
    },
    categoryPaper: {
        textAlign: 'center',
        padding: '10px',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s, background-color 0.3s',
        '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        '&:active': {
            backgroundColor: '#f0f0f0',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
    },
    categoryName: {
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};