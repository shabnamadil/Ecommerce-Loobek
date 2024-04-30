import React from 'react'
import CartItem from './CartItem'
import "../../../assets/css/cart.css"
import { getCart, getCartCount, getCartTotal } from '../../../features/cart/cartWishlistSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const cartItems = useSelector(getCart)
    const cartCount = useSelector(getCartCount)
    const TotalCartAmount = useSelector(getCartTotal)

    return (
        <div className='container wishlist-area-con'>
            <div className="wishlist-area">
                <div className="wishlist-area__header">
                    <h2>Cart</h2>
                </div>
                <div className="wishlist-area__products">

                    <div className='wishlist-area_product'>
                        {
                            cartCount == 0 ?
                                <div className="wishlist-empty">
                                    <p>No products added to the cart</p>
                                </div> : null
                        }

                        {
                            cartItems.map(product => <CartItem key={product.id} product={product} />)
                        }
                    </div>
                </div>
                <div className='cart-component-last-buttons'>
                    <div className="continue-shopping">
                        <Link to={"/shop"}>
                            <button>Continue shopping</button>
                        </Link>
                    </div>
                    <div className="continue-shopping checkout">
                        <div className='checkout-info'>
                            <span>Total:</span>
                            <h3>${TotalCartAmount}.00</h3>
                        </div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems