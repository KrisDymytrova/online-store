const routeNames = {
    homePage: '/',
    productDetailPage: '/product/:id',
    categoryPage: '/category/:categoryName',
    favProductsPage: '/fav-products',
    shoppingCartPage: '/shopping-cart',
    checkoutPage: '/checkout',
    notFoundPage: '*'
}

Object.freeze(routeNames);
export default routeNames;