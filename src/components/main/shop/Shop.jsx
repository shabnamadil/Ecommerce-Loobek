import React, { useEffect, useState } from 'react';
import ShopProduct from './ShopProduct';
import ShopCategory from './ShopCategory';
import '../../../assets/css/shop.css';
import { CiFilter } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchProducts,
    getProductStatus,
    getProductError,
    getFilteredProducts,
    filterByOnSale,
    sortByPrice,
}
    from '../../../features/products/productsDataSlice';
import { clickedCategory, getClickedCategory } from '../../../features/products/productCategoriesDataSlice';
import ShowFilters from '../../modals/show-filter/ShowFilters';


const Shop = () => {

    const dispatch = useDispatch();
    const productStatus = useSelector(getProductStatus)
    const productError = useSelector(getProductError)
    const filteredProducts = useSelector(getFilteredProducts)
    const clickedCat = useSelector(getClickedCategory)
    const [filterRemoveActive, setfilterRemoveActive] = useState(false);
    const [saleActive, setSaleActive] = useState(true);
    const [displayedProducts, setDisplayedProducts] = useState(10); // State for number of displayed products

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    const loadMore = () => {
        setDisplayedProducts(prevDisplayedProducts => prevDisplayedProducts + 10); // Increase displayedProducts state by 10
    };

    let content;

    if (productStatus === 'loading') {
        content = 'Loading...'
    } else if (productStatus === 'succeded') {
        content = filteredProducts.slice(0, displayedProducts).map(product => <ShopProduct key={product.id} product={product} />)
    } else if (productStatus === 'failed') {
        content = `${productError}`
    }

    return (
        <section className='shop__area'>
            <div className="container shop-con">
                <div className="shop__header">
                    {
                        clickedCat !== '' ? <h2>{clickedCat.name || clickedCat}</h2> : <h2>All products</h2>
                    }
                    <p className='show_filter' onClick={() => setfilterRemoveActive(!filterRemoveActive)}>
                        <i>
                            <CiFilter />
                        </i>
                        <span>
                            Show filters
                        </span>
                    </p>
                    {filterRemoveActive ? <ShowFilters filterRemoveActive={filterRemoveActive} setfilterRemoveActive={setfilterRemoveActive} /> : null}
                </div>
                <div className="shop__filters">
                    <div className="shop__categories">
                        {clickedCat !== '' ? <ShopCategory category={clickedCat} key={clickedCat.id} /> : null}
                    </div>
                    <div className="shop__sale_price_filter" >
                        <div className="shop__sale"
                            onClick={() => {
                                setSaleActive(!saleActive);
                                dispatch(clickedCategory(saleActive ? "Products Only on Sale" : "All products"));
                                dispatch(filterByOnSale(saleActive));
                            }}
                        >
                            <div><MdDone /></div>
                            <p>Show only products on sale</p>
                        </div>
                        <div className="shop__price-low-high"
                            onClick={() => {
                                dispatch(sortByPrice('asc'));
                                dispatch(clickedCategory("All products"));
                            }}
                        >
                            <div ><MdDone /></div>
                            <p>Sort by price <span className='low-high-price'>(low to high)</span></p>
                        </div>
                        <div className="shop__price-low-high"
                            onClick={() => {
                                dispatch(sortByPrice('desc'));
                                dispatch(clickedCategory("All products"));
                            }}
                        >
                            <div ><MdDone /></div>
                            <p>Sort by price <span className='low-high-price'>(high to low)</span></p>
                        </div>
                    </div>
                </div>
                <div className="shop__products">
                    {content && content.length > 0 ?
                        <>
                            {content}
                            {filteredProducts.length > displayedProducts && (
                                <button className='load-more' onClick={loadMore}>Load More</button>
                            )}
                        </> :
                        <div className='no-product-message'>
                            <h3 >No products to show</h3>
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default Shop;
