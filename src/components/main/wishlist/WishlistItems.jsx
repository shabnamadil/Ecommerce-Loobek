import React, { useEffect, useState } from 'react'
import '../../../assets/css/wishlist.css'
import WishlistProduct from './WishlistProduct'
import { getWishlist, getWishlistCount } from '../../../features/cart/cartWishlistSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdDone } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const WishlistItems = () => {
    const wishlistItems = useSelector(getWishlist)
    const wishlistCount = useSelector(getWishlistCount)
    const [title, setTitle] = useState(() => JSON.parse(localStorage.getItem('title')) || 'My wishlist');
    const [newTitle, setNewTitle] = useState(title);
    const [titleActive, setTitleActive] = useState(false)

    useEffect(() => {
        localStorage.setItem('title', JSON.stringify(title));
    }, [title]);

    return (
        <div className='container wishlist-area-con'>
            <div className="wishlist-area">
                <div className="wishlist-area__header">
                    <h2 onClick={() => setTitleActive(!titleActive)}>{title}</h2>
                    {
                        !titleActive ? 
                        <div className='edit-title'>
                            <p onClick={() => setTitleActive(!titleActive)}>( <FaPencilAlt /> Edit title )</p>
                        </div> : null
                    }
                    {
                        titleActive ?
                            <form action="" className='wishlist-title-form' onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder='Change your wishlist title'
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)} />
                                <div className='wishlist-title-icons'>
                                    <button onClick={() => {
                                        setTitleActive(!titleActive),
                                            setNewTitle(title)
                                    }}>x</button>
                                    <button onClick={() => {
                                        setTitle(newTitle),
                                            setTitleActive(!titleActive)
                                    }}><MdDone /></button>
                                </div>
                            </form> : null
                    }
                </div>
                <div className="wishlist-area__products">
                    {/* <div className="wishlist-area__product-header">
                        <p>Product name</p>
                        <div className="wishlist-area__product-info">
                            <span>Unit price</span>
                            <span>Stock status</span>
                            <span>Add to Cart</span>
                            <span>Remove item</span>
                        </div>
                    </div> */}
                    <div className='wishlist-area_product'>
                        {
                            wishlistCount == 0 ?
                                <div className="wishlist-empty">
                                    <p>No products added to the wishlist</p>
                                </div> : null
                        }

                        {
                            wishlistItems.map(product => <WishlistProduct key={product.id} product={product} />)
                        }
                    </div>
                </div>
                <div className="continue-shopping">
                    <Link to={"/shop"}>
                        <button>Continue shopping</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WishlistItems