import React from 'react'
import '../../../../assets/css/top-cats.css'
import TouchManipulationSwiper from './TouchManiputaionSwiper'
import { Link } from 'react-router-dom'
import { clickedCategory } from '../../../../features/products/productCategoriesDataSlice'
import { filterProductsByCategory } from '../../../../features/products/productsDataSlice'
import { useDispatch } from 'react-redux'

const TopCats = () => {
    const dispatch = useDispatch()

    return (
        <div className='top__cats'>
            <div className="top__cats_header">
                <h2>Top categories</h2>
                <Link to={"/shop"} onClick={() => {
                    dispatch(clickedCategory("All products"));
                    dispatch(filterProductsByCategory("All products"))
                }}>
                    <span>Shop all products</span>
                </Link>
            </div>
            <div className='touch_manipulation_cats'>
                <TouchManipulationSwiper />
            </div>
        </div>
    )
}

export default TopCats