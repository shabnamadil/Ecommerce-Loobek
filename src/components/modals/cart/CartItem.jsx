import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getCartItemsCount,
    removeFromCart,
    increaseCartItemCount,
    decreaseCartItemCount,
    increaseCartTotal,
} from '../../../features/cart/cartWishlistSlice'


const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    const cartItemsCounts = useSelector(getCartItemsCount)

    return (
        <div className='wishlist__item'>
            <div className='wishlist-image'>
                <button
                    className='wishlist-remove-btn' onClick={() => dispatch(removeFromCart(product))}
                    title="Remove this product"
                >
                    X
                </button>
                <img src={product.image} alt="" />
                <div className="wishlist__item-info">
                    <p>{product.title}</p>
                    {
                        product.onSale.saleAvailabilty === true ?
                            <div className='discounted-price'>
                                <span> ${product.price - (Math.floor((product.price / 100) * product.onSale.saleCount, 2))}</span>
                                <span> {product.price} </span>
                            </div>
                            : <span>${product.price}</span>
                    }
                    {
                        product.InStock.stockAvailabilty === true ?
                            <span className='InStock' style={{textAlign: 'start'}}>In stock</span> :
                            <span className='OutOfStock' style={{textAlign: 'start'}}>Out of stock</span>
                    }
                </div>
            </div>
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
    )
}

export default CartItem