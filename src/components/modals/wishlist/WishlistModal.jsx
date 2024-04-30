import React from 'react'
import { useSelector } from 'react-redux'
import { getWishlistCount, getWishlist } from '../../../features/cart/cartWishlistSlice'
import WishListItem from './WishListItem'
import { Link } from 'react-router-dom'


const WishlistModal = ({ wishlistActive, setWishlistActive }) => {
    const wishlistItems = useSelector(getWishlist)
    const wishlistCount = useSelector(getWishlistCount)

    let wishlistContent
    if (wishlistCount == 0) {
        wishlistContent =
            <div className='wishlist-empty-message'>
                <p> Your wishlist is empty </p>
            </div>
    } else {
        wishlistContent = wishlistItems.map(product => <WishListItem key={product.id} product={product} />)
    }

    return (
        <div className={`wishlist container ${wishlistActive ? 'navSlideInstead' : ''}`}>
            <div className='wishlist-header-remove'>
                <span onClick={() => setWishlistActive(!wishlistActive)}>x</span>
            </div>
            <div className='wishlist-head'>
                <h3 className='wishlist-header'>
                    Your wishlist ({wishlistCount === 1 || wishlistCount == 0 ? `${wishlistCount} item` : `${wishlistCount} items`})
                </h3>
            </div>
            <div className="wishlist-items">
                {wishlistContent}
            </div>
            <Link to={"/wishlist"} className='wiew-your-wishlist' onClick={() => setWishlistActive(!wishlistActive)}>
                <p>View your wishlist</p>
            </Link>
            <div className='modal-last-info'>
                <Link to={"/cart"} onClick={() => setWishlistActive(!wishlistActive)}>
                    <p>Go to your cart</p>
                </Link>

                <Link to={"/shop"} onClick={() => setWishlistActive(!wishlistActive)}>
                    <p>Continue shopping</p>
                </Link>
            </div>
        </div>
    )
}

export default WishlistModal