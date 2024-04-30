import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    removeFromCart,
    decreaseCartItemCount,
    increaseCartItemCount,
    increaseCartTotal,
    getCartItemsCount,
} from '../../../features/cart/cartWishlistSlice'

const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    const cartItemsCounts = useSelector(getCartItemsCount)

    return (
        <div className="wishlist-area-product-item">
            <div className="wishlist-area_product-image">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
            </div>
            <div className="wishlist-area_product-details cart-details">
                {
                    product.onSale.saleAvailabilty === true ?
                        <div className='cart-res-price'>
                            ${product.price - (Math.floor((product.price / 100) * product.onSale.saleCount, 2))}
                        </div>
                        : <div>
                            ${product.price}
                        </div>
                }
                <div className='qty-cart-res'>
                    <div className='cart-items-count-calc'>
                        <button onClick={() => {
                            dispatch(decreaseCartItemCount(product));
                        }}>-</button>
                        <span>
                            {Object.entries(cartItemsCounts).map(([itemId, itemCount]) =>
                                itemId == product.id ? itemCount : null
                            )}
                        </span>
                        <button onClick={() => {
                            dispatch(increaseCartItemCount(product));
                            dispatch(increaseCartTotal(product))
                        }}>+</button>
                    </div>
                </div>

                <div className='cart-subtotal'>
                    <span>
                        {Object.entries(cartItemsCounts).map(([itemId, itemCount]) =>
                            itemId == product.id && product.onSale.saleAvailabilty === true ?
                                `$ ${(product.price - (Math.floor((product.price / 100) * product.onSale.saleCount, 2))) * itemCount}.00`
                                : null
                        )}
                    </span>
                    <span>
                        {
                            product.onSale.saleAvailabilty == false ? (
                                Object.entries(cartItemsCounts).map(([itemId, itemCount]) =>
                                    itemId == product.id ?
                                        `$ ${product.price * itemCount}.00`
                                        : null
                                )
                            ) : null
                        }
                    </span>
                </div>
                <div className="wishlist-area__buttons">
                    <button
                        className='wishlist-remove-btn' onClick={() => dispatch(removeFromCart(product))}
                        title="Remove this product"
                    >x</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem