import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clickedCategory } from '../../../features/products/productCategoriesDataSlice'
import { filterProductByPrice } from '../../../features/products/productsDataSlice'

const Prices = ( { filterRemoveActive, setfilterRemoveActive } ) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className='price-bg' onClick={() => {
                dispatch(filterProductByPrice('$0 - $199'));
                dispatch(clickedCategory('Products ($0 - $199)'));
                setfilterRemoveActive(!filterRemoveActive)
                }}>
                <span className='price-name'>$0 - $199</span>
            </div>
            <div className='price-bg' onClick={() => {
                dispatch(filterProductByPrice('$200 - $399'));
                dispatch(clickedCategory('Products ($200 - $399)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='price-name'>$200 - $399</span>
            </div>
            <div className='price-bg' onClick={() => {
                dispatch(filterProductByPrice('$400 - $599'));
                dispatch(clickedCategory('Products ($400 - $599)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='price-name'>$400 - $599</span>
            </div>
            <div className='price-bg' onClick={() => {
                dispatch(filterProductByPrice('$600 - $799'));
                dispatch(clickedCategory('Products ($600 - $799)'));
                setfilterRemoveActive(!filterRemoveActive)
                }}>
                <span className='price-name'>$600 - $799</span>
            </div>
            <div className='price-bg'  onClick={() => {
                dispatch(filterProductByPrice('Over $799'));
                dispatch(clickedCategory('Products (Over $799)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='price-name'>Over $799</span>
            </div>
        </>

    )
}

export default Prices