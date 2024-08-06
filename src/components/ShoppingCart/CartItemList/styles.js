export const styles = {
    itemList: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
    },
    emptyCart: {
        textAlign: 'center',
        margin: '200px auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '10px',
        borderBottom: '1px solid #e0e0e0',
    },
    deleteAll: {
        cursor: 'pointer',
        marginLeft: '10px',
        fontSize: '16px',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        borderBottom: '1px solid #e0e0e0',
        '&:last-child': {
            borderBottom: 'none',
        },
    },
    itemDetails: {
        display: 'flex',
        alignItems: 'center',
    },
    itemImage: {
        width: '80px',
        height: '80px',
        marginRight: '20px',
    },
    itemInfo: {
        width: '400px',
    },
    icon: {
        color: '#999',
        marginRight: '4px',
    },
    favDelete: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
    },
    code: {
        color: '#999',
        fontSize: '14px',
    },
    iconText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '8px 0',
    },
    favDelIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '12px',
        transition: 'transform 0.3s ease', // Плавный переход
        '&:hover': {
            transform: 'scale(1.1)', // Увеличение на 20%
        },
    },
    checkIcon: {
        color: 'green',
        marginRight: '4px',
    },
    productAvailability: {
        color: '#4caf50',
        fontSize: '14px',
    },
    itemActions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    price: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '30px',
    },
    oldDiscount: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    oldPrice: {
        textDecoration: 'line-through',
        color: '#999',
        marginRight: '8px',
    },
    discount: {
        color: '#d32f2f',
        fontWeight: 'bold',
        marginRight: '8px',
    },
    newPrice: {
        fontWeight: 'bold',
        fontSize: '30px',
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
};
