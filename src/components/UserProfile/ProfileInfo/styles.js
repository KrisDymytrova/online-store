export const styles = {
    profileContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
    },
    profileName: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    avatar: {
        width: 56,
        height: 56,
        backgroundColor: '#4caf50',
    },
    nameBox: {
        marginLeft: '16px',
    },
    editButton: {
        padding: '4px',
        color: '#888',
        '&:hover': {
            color: '#000',
        },
    },
    profileBonus: {
        textAlign: 'center',
        background: 'linear-gradient(to right, #ff6f00, #ff9100)',
        padding: '8px 16px',
        borderRadius: '8px',
    },
    bonusText: {
        color: 'white',
    },
    bonusAmount: {
        color: 'white',
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
    },
    profileInfoBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        color: '#c0bfbf',
        height: '20px',
        minWidth: '35px',
    },
    profileInfoCount: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '140px',
    },
    profileTextImg: {
        display: 'flex',
        alignItems: 'center',
    },
    profileTextBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '300px',
    },
    firstText: {
        fontSize: '18px',
    },
    greenText: {
        color: 'green',
    },
    badge: {
        '& .MuiBadge-badge': {
            backgroundColor: '#ff6f00',
        },
    },
};
