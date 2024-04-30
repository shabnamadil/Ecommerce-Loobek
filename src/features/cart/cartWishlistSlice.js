import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    wishlist: JSON.parse(localStorage.getItem("wishlistItems")) || [],
    wishlistCount: JSON.parse(localStorage.getItem("wishlistCount")) || 0,
    cart: JSON.parse(localStorage.getItem("cartItems")) || [],
    cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0,
    cartItemsCount: JSON.parse(localStorage.getItem('cartItemsCount')) || 0,
    cartTotal: JSON.parse(localStorage.getItem("cartTotal")) || 0,
    amount: 1 
}

const calculateDiscountedPrice = (product) => {
    if (product.onSale && product.onSale.saleAvailabilty === true) {
        const discountedPrice = +product.price - Math.floor((+product.price / 100) * +product.onSale.saleCount);
        return discountedPrice;
    } else {
        return +product.price;
    }
};


const cartWishlistSlice = createSlice({
    name: 'cartWishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            try {
                const product = action.payload
                if (!state.wishlist.find(item => item.id === product.id)) {
                    state.wishlist.push(action.payload)
                    state.wishlistCount += 1
                    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
                    localStorage.setItem("wishlistCount", JSON.stringify(state.wishlistCount));
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        removeFromWishlist(state, action) {
            try {
                const product = action.payload
                if (state.wishlist.find(item => item.id === product.id)) {
                    state.wishlist = state.wishlist.filter(item => item.id != product.id)
                    state.wishlistCount -= 1
                    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
                    localStorage.setItem("wishlistCount", JSON.stringify(state.wishlistCount));
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        addToCart(state, action) {
            try {
                const product = action.payload
                if (!state.cart.find(item => item.id === product.id)) {
                    state.cart.push(action.payload)
                    state.cartCount += 1
                    localStorage.setItem("cartItems", JSON.stringify(state.cart));
                    localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
                }
                if (state.wishlist.find(item => item.id === product.id)) {
                    state.wishlist = state.wishlist.filter(item => item.id != product.id)
                    state.wishlistCount -= 1
                    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
                    localStorage.setItem("wishlistCount", JSON.stringify(state.wishlistCount));
                    localStorage.setItem("cartItems", JSON.stringify(state.cart));
                    localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        setAmount(state, action) {
            try {
                console.log(state.amount);
                state.amount = action.payload
            } catch (err) {
                console.log(err.message);
            }
        },
        removeFromCart(state, action) {
            try {
                const product = action.payload
                if (state.cart.find(item => item.id === product.id)) {
                    state.cart = state.cart.filter(item => item.id != product.id)
                    state.cartCount -= 1
                    const updatedCartItemsCount = { ...state.cartItemsCount };
                    const productPrice = calculateDiscountedPrice(product)
                    state.cartTotal = state.cartTotal - (productPrice * updatedCartItemsCount[product.id])
                    localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))
                    updatedCartItemsCount[product.id] = 0
                    state.cartItemsCount = updatedCartItemsCount
                    localStorage.setItem('cartItemsCount', JSON.stringify(updatedCartItemsCount));
                    localStorage.setItem("cartItems", JSON.stringify(state.cart));
                    localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        increaseCartItemCount(state, action) {
            try {
                const product = action.payload;
                const updatedCartItemsCount = { ...state.cartItemsCount };
                updatedCartItemsCount[product.id] = (updatedCartItemsCount[product.id] || 0) + 1;
                state.cartItemsCount = updatedCartItemsCount
                localStorage.setItem('cartItemsCount', JSON.stringify(updatedCartItemsCount));
            } catch (err) {
                console.log(err.message);
                return state;
            }
        },
        increaseCartItemCountByAmount(state, action) {
            try {
                console.log(state.amount);
                const product = action.payload;
                const updatedCartItemsCount = { ...state.cartItemsCount };
                console.log(updatedCartItemsCount[product.id]);
                updatedCartItemsCount[product.id] == null || updatedCartItemsCount[product.id] == 1  ? updatedCartItemsCount[product.id] = 0 : null
                updatedCartItemsCount[product.id] = (updatedCartItemsCount[product.id]) + (+state.amount);
                console.log((updatedCartItemsCount[product.id]));
                state.cartItemsCount = updatedCartItemsCount
                localStorage.setItem('cartItemsCount', JSON.stringify(updatedCartItemsCount));
            } catch (err) {
                console.log(err.message);
            }
        },
        decreaseCartItemCount(state, action) {
            try {
                const product = action.payload;
                const updatedCartItemsCount = { ...state.cartItemsCount };
                if (updatedCartItemsCount[product.id] > 1) {
                    const productPrice = calculateDiscountedPrice(product)
                    state.cartTotal -= productPrice
                }
                updatedCartItemsCount[product.id] = Math.max((updatedCartItemsCount[product.id] || 2) - 1, 1);
                state.cartItemsCount = updatedCartItemsCount
                localStorage.setItem('cartItemsCount', JSON.stringify(updatedCartItemsCount));
                localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))
            } catch (err) {
                console.log(err.message);
                return state;
            }
        },
        increaseCartTotal(state, action) {
            const product = action.payload
            const productPrice = calculateDiscountedPrice(product)
            try {
                state.cartTotal += productPrice
                localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))
            } catch (err) {
                console.log(err.message);
            }
        },
        increaseCartTotalByAmount(state, action) {
            console.log(state.amount);
            const product = action.payload
            const productPrice = calculateDiscountedPrice(product)
            try {
                state.cartTotal += productPrice * state.amount
                localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))
            } catch (err) {
                console.log(err.message);
            }
        }

    }
})

export const getWishlistCount = (state) => state.cartWishlist.wishlistCount
export const getWishlist = (state) => state.cartWishlist.wishlist
export const getCart = (state) => state.cartWishlist.cart
export const getCartCount = (state) => state.cartWishlist.cartCount
export const getCartItemsCount = (state) => state.cartWishlist.cartItemsCount
export const getCartTotal = (state) => state.cartWishlist.cartTotal
export const getAmount = (state) => state.cartWishlist.amount

export default cartWishlistSlice.reducer
export const {
    addToWishlist,
    removeFromWishlist,
    addToCart, removeFromCart,
    increaseCartItemCount,
    decreaseCartItemCount,
    increaseCartTotal,
    decreaseCartTotal,
    increaseCartItemCountByAmount,
    increaseCartTotalByAmount,
    setAmount
} = cartWishlistSlice.actions