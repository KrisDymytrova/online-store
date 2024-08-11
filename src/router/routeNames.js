const routeNames = {
    homePage: '/',
    productDetailPage: '/product/:id',
    categoryPage: '/category/:categoryName',
    favProductsPage: '/fav-products',
    shoppingCartPage: '/shopping-cart',
    checkoutPage: '/checkout',
    orderSuccessPage: '/order-success',
    notFoundPage: '*'
}

Object.freeze(routeNames);
export default routeNames;