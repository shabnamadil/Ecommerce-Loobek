import { configureStore } from '@reduxjs/toolkit'
import productsFilterReducer from '../features/products/productsDataSlice'
import productCategoryReducer from '../features/products/productCategoriesDataSlice'
import colorReducer from '../features/products/colorDataSlice'
import brandReducer from '../features/products/brandsDataSlice'
import cartWishlistReducer from '../features/cart/cartWishlistSlice'
import reviewsReducer from '../features/reviewsSlice/reviewsDataSlice'
import topCategoryReducer from '../features/products/topcategoriesDataSlice'



export const store = configureStore({
    reducer: {
        products: productsFilterReducer,
        productCategories: productCategoryReducer,
        colors: colorReducer,
        brands: brandReducer,
        cartWishlist: cartWishlistReducer,
        reviews: reviewsReducer,
        topCategories: topCategoryReducer
    }
})