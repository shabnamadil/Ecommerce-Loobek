import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsBySize } from '../../../features/products/productsDataSlice'
import { clickedCategory } from '../../../features/products/productCategoriesDataSlice'

const Sizes = ( { filterRemoveActive, setfilterRemoveActive } ) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className='size-bg' onClick={() => {
                dispatch(filterProductsBySize('XXS'));
                dispatch(clickedCategory('Products (XXS)'));
                setfilterRemoveActive(!filterRemoveActive)
                }}>
                <span className='size-name'>XXS</span>
            </div>
            <div className='size-bg' onClick={() => {
                dispatch(filterProductsBySize('XS'));
                dispatch(clickedCategory('Products (XS)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='size-name'>XS</span>
            </div>
            <div className='size-bg' onClick={() => {
                dispatch(filterProductsBySize('S'));
                dispatch(clickedCategory('Products (S)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='size-name'>S</span>
            </div>
            <div className='size-bg' onClick={() => {
                dispatch(filterProductsBySize('M'));
                dispatch(clickedCategory('Products (M)'));
                setfilterRemoveActive(!filterRemoveActive)
                }}>
                <span className='size-name'>M</span>
            </div>
            <div className='size-bg'  onClick={() => {
                dispatch(filterProductsBySize('L'));
                dispatch(clickedCategory('Products (L)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='size-name'>L</span>
            </div>
            <div className='size-bg'  onClick={() => {
                dispatch(filterProductsBySize('XXL'));
                dispatch(clickedCategory('Products (XXL)'));
                setfilterRemoveActive(!filterRemoveActive)
            }}>
                <span className='size-name'>XXL</span>
            </div>
        </>

    )
}

export default Sizes