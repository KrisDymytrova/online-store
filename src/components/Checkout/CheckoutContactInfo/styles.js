export const styles = {
    formContainer: {
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        backgroundColor: '#fff',
    },
    phoneNameEmailContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
    },
    formTitle: {
        marginBottom: '20px',
        fontSize: '18px',
    },
    inputField: {
        marginBottom: '20px',
        width: '100%',
    },
    checkbox: {
        '&.Mui-checked': {
            color: '#4caf50',
        },
    },
    checkboxField: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    anotherReceiver: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    receiverField: {
        flex: '1 1 calc(33.333% - 10px)',
        boxSizing: 'border-box',
        maxWidth: '300px',
        width: '100%',
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    errorMessage: {
        color: 'red',
        fontSize: '14px',
        marginTop: '-10px',
        marginBottom: '10px',
    },
    collapsedContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
    },
    collapsedHeaderText: {
        fontSize: '14px',
    },
    infoButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selectedInfo: {
        fontSize: '12px',
        color: '#888',
    }
};
