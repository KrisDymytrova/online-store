export const styles = {
    personalDataContainer: {
        padding: '20px',
    },
    section: {
        marginBottom: '30px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignContent: 'center',
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: '25px',
        fontSize: '24px',
        color: '#333',
    },
    sectionSubtitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        marginBottom: '15px',
        color: '#333',
    },
    editButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        color: '#4CAF50',
        backgroundColor: '#E8F5E9',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: '#C8E6C9',
        },
    },
    editIcon: {
        fontSize: '18px',
    },
    editText: {
        fontSize: '14px',
        color: '#4CAF50',
    },
    textField: {
        maxWidth: '140px',
        width: '100%',
        marginBottom: '20px',
        '& .MuiInputBase-root': {
            borderRadius: '8px',
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px',
        },
    },
    selectField: {
        maxWidth: '160px',
        width: '100%',
        marginBottom: '20px',
        '& .MuiSelect-outlined': {
            padding: '10px',
            borderRadius: '8px',
        },
    },
    birthDateGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        '& .MuiTextField-root': {
            width: '30%',
        },
    },
    dateField: {
        '& .MuiInputBase-root': {
            borderRadius: '8px',
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px',
        },
    },
    link: {
        color: '#4CAF50',
        cursor: 'pointer',
        textDecoration: 'underline',
        fontSize: '14px',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#388E3C',
        },
    },
    cancelButton: {
        padding: '10px 20px',
        borderRadius: '8px',
        color: '#4CAF50',
        marginRight: '10px',
        border: '1px solid #4CAF50',
        '&:hover': {
            backgroundColor: '#E8F5E9',
        },
    },
    hintBox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#F7F7F7',
        borderRadius: '8px',
        textAlign: 'center',
    },
    textBox: {
        display: 'flex',
        alignItems: 'start',
    },
    hintMainText: {
        fontWeight: 'bold',
        marginRight: '15px',
    },
    hintText: {
        color: '#757575',
        fontSize: '14px',
    },
    helpIcon: {
        fontSize: '40px',
        color: '#388E3C',
    },
};
