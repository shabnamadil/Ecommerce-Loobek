import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromWishlist, addToCart, increaseCartItemCount, increaseCartTotal } from '../../../features/cart/cartWishlistSlice'

const WishListItem = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className='wishlist__item'>
            <div className='wishlist-image'>
                <button
                    className='wishlist-remove-btn' onClick={() => dispatch(removeFromWishlist(product))}
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
            </div> {
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

        </div>
    )
}

export default WishListItem