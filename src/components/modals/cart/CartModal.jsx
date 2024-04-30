import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';
import { getCart, getCartCount, getCartTotal } from '../../../features/cart/cartWishlistSlice';
import { useSelector } from 'react-redux';
import '../../../assets/css/cart.css'

const CartModal = ({ cartActive, setCartActive }) => {
    const cartItems = useSelector(getCart)
    const cartCount = useSelector(getCartCount)
    const cartTotalPrice = useSelector(getCartTotal)

    let cartContent
    if (cartCount === 0) {
        cartContent =
            <div className='wishlist-empty-message'>
                <p> Your cart is empty </p>
            </div>
    } else {
        cartContent = cartItems.map(product => <CartItem key={product.id} product={product} />)
    }

    return (
        <div className={`wishlist container ${cartActive ? 'navSlideInstead' : ''}`}>
            <div className='wishlist-header-remove'>
                <span onClick={() => setCartActive(!cartActive)}>x</span>
            </div>
            <div className="wishlist-head">
                <h3 className='wishlist-header'>
                    Your Cart ({cartCount === 1 || cartCount == 0 ? `${cartCount} item` : `${cartCount} items`})
                </h3>
            </div>

            <div className="wishlist-items">
                {cartContent}
            </div>
            <div className='cart-total'>
                <span>Total:</span>
                <h3>${cartTotalPrice}.00</h3>
            </div>
            <Link to={"/wishlist-items"} className='wiew-your-wishlist' onClick={() => setCartActive(!cartActive)}>
                <p>Checkout</p>
            </Link>
            <div className='modal-last-info'>
                <Link to={"/cart"} onClick={() => setCartActive(!cartActive)}>
                    <p>View your cart</p>
                </Link>
                <Link to={"/shop"} onClick={() => setCartActive(!cartActive)}>
                    <p>Continue shopping</p>
                </Link>
            </div>
        </div>
    )
}

export default CartModal