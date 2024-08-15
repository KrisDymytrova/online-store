export const styles = {
    menuList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'background.paper',
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        '&:hover': {
            backgroundColor: '#f1f1f1',
        },
    },
    menuIcon: {
        color: '#888',
        minWidth: '40px',
    },
    badge: {
        '& .MuiBadge-badge': {
            backgroundColor: '#ff6f00',
        },
    },
};
