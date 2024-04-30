import React, { useState } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { getCartCount, getWishlistCount } from '../../features/cart/cartWishlistSlice';
import WishlistModal from '../modals/wishlist/WishlistModal';
import CartModal from '../modals/cart/CartModal';

const NavRight = () => {
    const wishlistCount = useSelector(getWishlistCount)
    const cartCount = useSelector(getCartCount)
    const [wishlistActive, setWishlistActive] = useState(false)
    const [cartActive, setCartActive] = useState(false)

    return (
        <div className='nav__right'>
            <i className='nav__burger_menu nav_hover burger_right'>
                <RxHamburgerMenu />
            </i>
            <i className='nav__user_icon nav_hover'>
                <AiOutlineUser />
            </i>
            <i
                className='nav__wishlist_icon nav_hover'
                title="View your wishlist"
                onClick={() => setWishlistActive(!wishlistActive)}
            >
                <HiOutlineHeart />
                <span className='nav__wish_count'>
                    {wishlistCount}
                </span>
            </i>
            {
                wishlistActive ?
                    <WishlistModal
                        wishlistActive={wishlistActive}
                        setWishlistActive={setWishlistActive}
                    /> : null
            }
            <i
                className='nav__cart_icon nav_hover'
                title="View your shopping cart"
                onClick={() => setCartActive(!cartActive)}
            >
                <IoCartOutline />
                <span className='nav__cart_count'>
                    {cartCount}
                </span>
            </i>
            {
                cartActive ?
                    <CartModal
                        cartActive={cartActive}
                        setCartActive={setCartActive}
                    /> : null
            }
        </div>
    )
}

export default NavRight