export const styles = {
    container: {
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    citySelect: {
        marginBottom: '20px',
        width: '100%',
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    radio: {
        color: '#c0bfbf',
        '&.Mui-checked': {
            color: '#4caf50',
        },
    },
    methodBox: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '20px',
        width: '100%',
    },
    labelBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '5px',
    },
    labelContentBox: {
        display: 'flex',
        alignItems: 'center',
    },
    methodName: {
        fontSize: '15px',
    },
    methodPrice: {
        fontWeight: 'bold',
    },
    methodSubLabel:{
        fontSize: '12px',
        color: '#888',
    },
    selectStoreButton: {
        backgroundColor: '#4caf50',
        color: '#FFF',
        borderRadius: '8px',
        width: '200px',
        height: '40px',
        padding: '5px',
        fontSize: '14px',
        marginLeft: '28px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#e25c1d',
        },
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    collapsedContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
    },
    collapsedHeaderText: {
        fontSize: '14px',
    },
};
