export const styles = {
    popupContainer: {
        position: 'fixed',
        top: '40%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        borderRadius: '8px',
        padding: '24px',
    },
    popupHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popupContent: {
        margin: '16px 0',
        textAlign: 'center',
        color: '#999',
        fontSize: '5px',
    },
    popupActions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
    },
    continueButton: {
        color: '#4caf50',
        borderColor: '#4caf50',
        textAlign: 'center',
        padding: '16px 26px',
        marginRight: '5px',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            color: '#e25c1d',
            borderColor: '#e25c1d',
            backgroundColor: '#fff'
        },
    },
    deleteButton: {
        backgroundColor: '#4caf50',
        color: '#fff',
        textAlign: 'center',
        padding: '16px 26px',
        marginRight: '10px',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#e25c1d',
        },
    },
};
