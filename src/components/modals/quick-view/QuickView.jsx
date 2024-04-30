import React, { useState } from 'react'
import '../../../assets/css/quick-view.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    addToCart,
    setAmount,
    increaseCartItemCountByAmount,
    increaseCartTotalByAmount,
} from '../../../features/cart/cartWishlistSlice'
import { useNavigate } from 'react-router-dom'
import { filterProductByBrandQuickView, filterProductBySubCatQuickView, filterProductsByBrand, filterProductsByCategory } from '../../../features/products/productsDataSlice'
import { clickedCategory } from '../../../features/products/productCategoriesDataSlice'


const QuickView = ({ product, quickViewActive, setquickViewActive }) => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [count, setCount] = useState(1)

    return (
        <div className="quick-view-bg">
            <div className='quick-view'>
                <div className="quick-view__header">
                    <button onClick={() => setquickViewActive(!quickViewActive)}>x</button>
                </div>
                <div className="quick-view-content container">
                    <div className="quick-view_image-area">
                        <div className="quick_view__small-imgs">
                        </div>
                        <div className="quick-view__main-img">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="quick-view__information-area">
                        <div className="quick-view__information-area-up">
                            <div className="quick-view__information-header">
                                <span
                                    className='detail-pr-brand'
                                    onClick={() => {
                                        dispatch(filterProductBySubCatQuickView(product.category.sub_category)),
                                            dispatch(clickedCategory(product.category.sub_category)),
                                            Navigate('/Shop'),
                                            setquickViewActive(!quickViewActive)
                                    }}
                                >
                                    {product.category.sub_category}
                                </span>
                                <h2>{product.title}</h2>
                                <div className='quick-view__reviews-info'>
                                    <span>0 Reviews</span>
                                    <span>Write a review</span>
                                </div>
                            </div>
                            <div className="quick-view__information-brand-area">
                                <div>
                                    <span>Brands</span>
                                    <span>Product code</span>
                                    <span>Availability</span>
                                </div>
                                <div>
                                    <span
                                        className='detail-pr-brand'
                                        onClick={() => {
                                            dispatch(filterProductByBrandQuickView(product.brand)),
                                                dispatch(clickedCategory(product.brand)),
                                                Navigate('/shop'),
                                                setquickViewActive(!quickViewActive)
                                        }}>
                                        {product.brand}
                                    </span>
                                    <span>{product.product_code}</span>
                                    {
                                        product.InStock.stockAvailabilty === true
                                            ? <span className='InStock stck-quick'>In stock</span> :
                                            <span className='OutOfStock stck-quick'>Out of stock</span>
                                    }
                                </div>
                            </div>
                            <div className="quick-view__information-price">
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
                        <div className="quick-view__information-area-down">
                            {
                                product.sizes ?
                                    <div className="quick-view__information-sizes">
                                        <p>Sizes</p>
                                        <div className='info-sizes'>
                                            {
                                                product.sizes.map((size, index) => <div key={index}>{size.name}</div>)
                                            }
                                        </div>
                                    </div> : null
                            }
                            {
                                product.InStock.stockAvailabilty === true ?
                                    <div className="quick-view-add-to-cart">
                                        <p>Quantity</p>
                                        <div className='quick-view-add-to-cart-quantity'>
                                            <div className='quick-view-cart-quantity'>
                                                <button onClick={() => {
                                                    setCount(() => count > 1 ? count - 1 : 1)
                                                }}>-</button>
                                                <span>
                                                    {count}
                                                </span>
                                                <button onClick={() => {
                                                    setCount(() => count + 1)
                                                }}>+</button>
                                            </div>
                                            <button
                                                className='quick-view-add-to-cart-btn'
                                                onClick={() => {
                                                    dispatch(setAmount(count))
                                                    dispatch(addToCart(product));
                                                    dispatch(increaseCartItemCountByAmount(product))
                                                    dispatch(increaseCartTotalByAmount(product))
                                                    Navigate('/cart')
                                                }}
                                            > + Add to Cart</button>
                                        </div>
                                    </div>
                                    : <div className="quick-view-add-to-cart">
                                        <p>Quantity</p>
                                        <div className='quick-view-add-to-cart-quantity'>
                                            <div className='quick-view-cart-quantity'>
                                                <button >-</button>
                                                <span>
                                                    0
                                                </span>
                                                <button>+</button>
                                            </div>
                                            <button
                                                disabled={true}
                                                style={{ cursor: "not-allowed", backgroundColor: "black" }}
                                                className='quick-view-add-to-cart-btn'
                                            > + Add to Cart</button>
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuickView