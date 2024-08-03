export const styles = {
    appBar: {
        position: 'static',
        backgroundColor: '#fff',
        boxShadow: 'none',

    },
    toolbar: {
        display: 'flex',
        width: '1400px',
        height: 'inherit',
        margin: '6px auto',
        justifyContent: 'space-between',
        padding: '0 16px',
    },
    logoBox: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '40px',
        marginRight: '8px',
    },
    cityTypography: {
        fontWeight: 500,
        cursor: 'pointer',
    },
    buttonBox: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        color: '#000',
        textTransform: 'none',
        margin: '0 8px',
    },
    buttonAccent: {
        backgroundColor: '#ff0000',
        color: '#fff',
        textTransform: 'none',
        margin: '0 8px',
        '&:hover': {
            backgroundColor: '#cc0000',
        }
    },
    buttonHelp: {
        color: '#ff6f00',
        textTransform: 'none',
        margin: '0 8px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    languageButton: {
        backgroundColor: '#4caf50',
        color: '#fff',
        textTransform: 'none',
        margin: '0 8px',
        '&:hover': {
            backgroundColor: '#388e3c',
        }
    },
    languageText: {
        color: '#000',
        margin: '0 8px',
    }
};

