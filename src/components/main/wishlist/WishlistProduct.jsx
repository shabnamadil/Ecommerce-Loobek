import React from 'react'
import {
    addToCart,
    increaseCartItemCount,
    increaseCartTotal,
    removeFromWishlist
} from '../../../features/cart/cartWishlistSlice'
import { useDispatch } from 'react-redux'

const WishlistProduct = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className="wishlist-area-product-item">
            <div className="wishlist-area_product-image">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
            </div>
            <div className="wishlist-area_product-details">
                {
                    product.onSale.saleAvailabilty === true ?
                        <span> $ {product.price - (Math.floor((product.price / 100) * product.onSale.saleCount, 2))}</span>
                        : <span>$ {product.price}</span>
                }
                {
                    product.InStock.stockAvailabilty === true
                        ? <span className='InStock'>In stock</span> :
                        <span className='OutOfStock'>Out of stock</span>
                }
                <div className='wishlist-buttons-remove-add'>
                    {
                        product.InStock.stockAvailabilty === true ?
                            <button className='wishlist-add-to-cart' onClick={() => {
                                dispatch(addToCart(product));
                                dispatch(increaseCartItemCount(product));
                                dispatch(increaseCartTotal(product))
                            }}>
                                Add to Cart
                            </button> :
                            <button
                                disabled={true}
                                style={{ cursor: "not-allowed", backgroundColor: "black" }}
                                className='wishlist-add-to-cart'>
                                Add to Cart
                            </button>
                    }
                    <button
                        className='wishlist-remove-btn' onClick={() => dispatch(removeFromWishlist(product))}
                        title="Remove this product"
                    >x</button>
                </div>
            </div>

        </div>
    )
}

export default WishlistProduct