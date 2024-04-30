import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../components/main/shop/Shop";
import HomePage from "../components/main/homepage/HomePage";
import WishListItem from "../components/modals/wishlist/WishListItem";
import WishlistItems from "../components/main/wishlist/WishlistItems"
import CartItems from "../components/main/cart/CartItems";
import ProductDetailPage from "../components/main/shop/productDetailPage/ProductDetailPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />

            },
            {
                path: '/shop',
                element: <Shop />,
                
            },
            {
                path: '/product/:id',
                element: <ProductDetailPage />
            },
            {
                path: '/wishlist',
                element: <WishlistItems />
            },
            {
                path: '/cart',
                element: <CartItems />
            }
        ]
    }
])