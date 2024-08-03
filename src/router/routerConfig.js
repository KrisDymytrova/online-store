import routeNames from '../router/routeNames.js';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CategoryPage from "../pages/CategoryPage";
import FavProductsPage from "../pages/FavProductsPage";
import ShoppingCartPage from '../pages/ShoppingCartPage';
import CheckoutPage from '../pages/CheckoutPage';
import NotFoundPage from '../pages/NotFoundPage';

const pagesRoutesConfig = [
    {
        path: routeNames.homePage,
        component: HomePage,
    },
    {
        path: routeNames.productDetailPage,
        component: ProductDetailPage,
    },
    {
        path: routeNames.categoryPage,
        component: CategoryPage,
    },
    {
        path: routeNames.favProductsPage,
        component: FavProductsPage,
    },
    {
        path: routeNames.shoppingCartPage,
        component: ShoppingCartPage,
    },
    {
        path: routeNames.checkoutPage,
        component: CheckoutPage,
    },
    {
        path: routeNames.notFoundPage,
        component: NotFoundPage,
    },
];

export default pagesRoutesConfig;