import React from 'react'
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsQuestionLg } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { 
    increaseCartItemCount,
    addToWishlist,
    getWishlist
} from '../../features/cart/cartWishlistSlice';

const WishlistButton = ({ product, quickViewActive, setquickViewActive }) => {
    const dispatch = useDispatch()
    const wishlist_items = useSelector(getWishlist)

    return (
        <>
            <button
                className='add-to-wishlist-btn'
                onClick={() => dispatch(addToWishlist(product))} style={{ backgroundColor: "white" }}>
                {wishlist_items.find(item => item.id === product.id)
                    ? <IoIosHeart style={{ color: "red" }} />
                    : <IoIosHeartEmpty style={{ color: "black" }} />}
            </button>

            <button className='quick-view-btn' onClick={() => {
                setquickViewActive(!quickViewActive);
                dispatch(increaseCartItemCount(product));
            }}>
                <IoSearchOutline />
            </button>
            <button className='compare-btn'>
                <BsQuestionLg />
            </button>
        </>

    )
}

export default WishlistButton