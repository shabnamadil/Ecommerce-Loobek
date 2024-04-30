import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { VscGitCompare } from "react-icons/vsc";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterestP } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";

import {
    getAllProducts,
    fetchProducts,
    getProductStatus,
    filterProductsByBrand,
    filterProductByBrandQuickView,
    filterProductBySubCatQuickView
} from '../../../../features/products/productsDataSlice';

import {
    addToCart,
    addToWishlist,
    setAmount,
    increaseCartItemCountByAmount,
    increaseCartTotalByAmount,
    getWishlist
} from '../../../../features/cart/cartWishlistSlice'

import '../../../../assets/css/product-detail.css'
import ProductDetailSecondSection from '../productDetailPage/ProductDetailSecondSection';
import Bestsellers from './Bestsellers';
import MagnifiedImage from './MagnifiedImage';
import { clickedCategory } from '../../../../features/products/productCategoriesDataSlice';



const ProductDetailPage = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const { id } = useParams()
    const productStatus = useSelector(getProductStatus)
    const wishlist_items = useSelector(getWishlist)

    useEffect(() => {
        if (productStatus == 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    const products = useSelector(getAllProducts)
    const detailProduct = products.find(item => item.id == id)
    const [detailCount, setDetailCount] = useState(1)
    const [mainImage, setMainImage] = useState(detailProduct.image)

    return (
        <>
            <section className='product-detail-area'>
                <div className='product-detail container'>
                    <div className="product-detail-image-area">
                        <div className="small-detail-page-images">
                            {
                                detailProduct.smallImages ?
                                    detailProduct.smallImages.map((product, index) => (
                                        <img
                                            key={index}
                                            src={product.image}
                                            onClick={() => setMainImage(product.image)}
                                            alt="" />
                                    )) :
                                    (
                                        <>
                                            <img src={detailProduct.image} />
                                            <img src={detailProduct.image} />
                                            <img src={detailProduct.image} />
                                        </>

                                    )
                            }
                        </div>
                        <MagnifiedImage mainImage={mainImage} style={{ width: '100%' }} />
                    </div>
                    <div className="product-detail-information">
                        <div className="product-detail-info-header">
                            <div className="product-detail-name-cat">
                                <span
                                    className='detail-pr-brand'
                                    onClick={() => {
                                        dispatch(filterProductBySubCatQuickView(detailProduct.category.sub_category)),
                                            dispatch(clickedCategory(detailProduct.category.sub_category)),
                                            Navigate('/Shop')
                                    }}
                                >
                                    {detailProduct.category.sub_category}
                                </span>
                                <h2>{detailProduct.title}</h2>
                                <div className='product-detail-reviews-write'>
                                    <span>0 Reviews</span>
                                    <span>Write a review</span>
                                </div>
                            </div>
                            <div className="quick-view__information-brand-area">
                                <div>
                                    <span>Brand:</span>
                                    <span>Product code:</span>
                                    <span>Availability:</span>
                                </div>
                                <div>
                                    <span
                                        className='detail-pr-brand'
                                        onClick={() => {
                                            dispatch(filterProductByBrandQuickView(detailProduct.brand)),
                                                dispatch(clickedCategory(detailProduct.brand)),
                                                Navigate('/shop')
                                        }}>
                                        {detailProduct.brand}
                                    </span>
                                    <span>{detailProduct.product_code}</span>
                                    {
                                        detailProduct.InStock.stockAvailabilty === true ?
                                            <span className='InStock'>In stock</span> :
                                            <span className='OutOfStock'>Out of stock</span>
                                    }
                                </div>
                            </div>
                            <div className="product-detail-price">
                                {
                                    detailProduct.onSale.saleAvailabilty === true ?
                                        <div className='discounted-price'>
                                            <span> ${detailProduct.price - (Math.floor((detailProduct.price / 100) * detailProduct.onSale.saleCount, 2))}</span>
                                            <span> {detailProduct.price} </span>
                                        </div>
                                        : <span>${detailProduct.price}</span>
                                }
                            </div>
                            {
                                detailProduct.sizes ?
                                    <div className='detail-sizes'>
                                        <p>Sizes</p>
                                        <div className='info-sizes'>
                                            {

                                                detailProduct.sizes.map(size => <div>{size.name}</div>)

                                            }
                                        </div>
                                    </div> : null
                            }

                        </div>
                        <div className="product-detail-add-to-cart">
                            {
                                detailProduct.InStock.stockAvailabilty === true ?
                                    <div className='quick-view-add-to-cart pr-qty'>
                                        <p>Quantity</p>
                                        <div className='quick-view-add-to-cart-quantity'>
                                            <div className='quick-view-cart-quantity pr-detail-quantity-btn'>
                                                <button onClick={() => {
                                                    setDetailCount(() => detailCount > 1 ? detailCount - 1 : 1)
                                                }}>-</button>
                                                <span>
                                                    {detailCount}
                                                </span>
                                                <button onClick={() => {
                                                    setDetailCount(() => detailCount + 1)
                                                }}>+</button>
                                            </div>
                                            <button
                                                className='quick-view-add-to-cart-btn pr-detail-adtocart-btn'
                                                onClick={() => {
                                                    dispatch(setAmount(detailCount))
                                                    dispatch(addToCart(detailProduct));
                                                    dispatch(increaseCartItemCountByAmount(detailProduct))
                                                    dispatch(increaseCartTotalByAmount(detailProduct))
                                                    Navigate('/cart')
                                                }}
                                            > + Add to Cart</button>
                                        </div>
                                    </div>
                                    : <div className='quick-view-add-to-cart pr-qty'>
                                        <p>Quantity</p>
                                        <div className='quick-view-add-to-cart-quantity'>
                                            <div className='quick-view-cart-quantity pr-detail-quantity-btn'>
                                                <button>-</button>
                                                <span>
                                                    0
                                                </span>
                                                <button>+</button>
                                            </div>
                                            <button
                                                disabled={true}
                                                style={{ cursor: "not-allowed", backgroundColor: "black" }}
                                                className='quick-view-add-to-cart-btn pr-detail-adtocart-btn'
                                            > + Add to Cart</button>
                                        </div>
                                    </div>
                            }

                            <ul className='productdetail-icons'>
                                <li
                                    onClick={() => dispatch(addToWishlist(detailProduct))}
                                >
                                    <i>
                                        {wishlist_items.find(item => item.id === id)
                                            ? <IoIosHeart style={{ color: "red" }} />
                                            : <IoIosHeartEmpty style={{ color: "black" }} />}
                                    </i>
                                    <span>Add to wishlist</span>
                                </li>
                                <li>
                                    <i>
                                        <VscGitCompare />
                                    </i>
                                    <span>Add to compare</span>
                                </li>
                                <li>
                                    <i>
                                        <FaRegEnvelope />
                                    </i>
                                    <span>Ask about product</span>
                                </li>
                            </ul>
                        </div>
                        <div className="product-detail-icons">
                            <ul>
                                <li>
                                    <CiLinkedin />
                                </li>
                                <li>
                                    <LuFacebook />
                                </li>
                                <li>
                                    <SlSocialTwitter />
                                </li>
                                <li>
                                    <FaPinterestP />
                                </li>
                                <li>
                                    <PiYoutubeLogoLight />
                                </li>
                            </ul>
                            <div className='pr-detail-shipping'>
                                <div>
                                    <i>
                                        <MdOutlineLocalShipping />
                                    </i>
                                    <p>Free shipping for orders over $200</p>
                                </div>
                                <div>
                                    <i>
                                        <MdCardGiftcard />
                                    </i>
                                    <p>Free gift wrapping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductDetailSecondSection detailProduct={detailProduct} />
            <Bestsellers />
        </>


    )
}

export default ProductDetailPage