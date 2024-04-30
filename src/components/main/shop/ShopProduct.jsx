import React, { useState } from 'react'
import AddAToCartButton from '../../buttons/AddAToCartButton'
import WishlistButton from '../../buttons/WishlistButton'
import { useDispatch } from 'react-redux';
import { addToCart, increaseCartItemCount, increaseCartTotal } from '../../../features/cart/cartWishlistSlice';
import QuickView from '../../modals/quick-view/QuickView';
import { Link } from 'react-router-dom';

const ShopProduct = ({ product }) => {
    const dispatch = useDispatch()
    const [quickViewActive, setquickViewActive] = useState(false)

    return (
        <>

            <div className="shop__product">
                <div
                    className="shop__product_bg"
                    style={{
                        backgroundImage: `url(${product.image})`,
                    }}
                >

                    {
                        product.onSale.saleAvailabilty === true ?
                            <div className='discount-count'>
                                -{product.onSale.saleCount}%
                            </div> : null
                    }
                    {
                        product.InStock.stockAvailabilty === false ?
                            <div className='out-of-stock-pr'>
                                out of stock
                            </div> : null
                    }
                    <div className='shop__product_icons'>
                        <WishlistButton product={product} quickViewActive={quickViewActive} setquickViewActive={setquickViewActive} />
                    </div>
                    {
                        product.InStock.stockAvailabilty === true ?
                        <div className="shop__add-to-cart-btn" onClick={() => {
                            dispatch(addToCart(product));
                            dispatch(increaseCartItemCount(product));
                            dispatch(increaseCartTotal(product))
                        }}>
                            <AddAToCartButton product={product} />
                        </div> : null
                    }

                </div>
                <div className="shop__product_info">
                    <Link to={`/product/${product.id}`}>
                        <h3>{product.title}</h3>
                    </Link>
                    <div className='discounted'>
                        {
                            product.onSale.saleAvailabilty === true ?
                                <div className='discounted-price'>
                                    <span> ${product.price - (Math.floor((product.price / 100) * product.onSale.saleCount, 2))}</span>
                                    <span> {product.price} </span>
                                </div>
                                : <span>${product.price}</span>
                        }

                    </div>
                </div>
            </div>


            {
                quickViewActive ?
                    <QuickView
                        product={product}
                        key={product.id}
                        quickViewActive={quickViewActive}
                        setquickViewActive={setquickViewActive}
                    /> : null
            }
        </>




    )
}

export default ShopProduct