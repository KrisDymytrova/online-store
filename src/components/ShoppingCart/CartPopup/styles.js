export const styles = {
    popupContainer: {
        position: 'fixed',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        borderRadius: '8px',
        padding: '16px',
    },
    popupHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popupContent: {
        display: 'flex',
        margin: '16px',
        marginBottom: '32px',
    },
    productImageContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
    },
    productImage: {
        borderRadius: '8px',
        objectFit: 'contain',
        objectPosition: 'center',
        width: '150px',
        height: '150px',
        cursor: 'pointer',
    },
    productInfo: {
        flex: '4',
        paddingLeft: '16px',
        display: 'flex',
        flexDirection: 'column',
    },
    productInfoPrice: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productTitleCode: {
        maxWidth: '330px',
        width: '100%',
    },
    iconText: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
    },
    checkIcon: {
        color: 'green',
        marginRight: '4px',
    },
    productAvailability: {
        color: '#4caf50',
    },
    productPrice: {
        flex: '1',
        textAlign: 'right',
        alignItems: 'center',
    },
    newPrice: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    oldPrice: {
        textDecoration: 'line-through',
        color: '#888',
    },
    quantityContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16px',
        marginRight: '16px',
    },
    quantityButton: {
        padding: '8px',
    },
    quantity: {
        padding: '0 16px',
        textAlign: 'center',
        width: '40px',
    },
    popupActions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
    },
    continueButton: {
        color: '#888',
        borderColor: '#888',
        cursor: 'pointer',
        '&:hover': {
            borderColor: '#888',
            backgroundColor: '#f0f0f0'
        },
    },
    goToCartButton: {
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
    makeOrderButton: {
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
};
