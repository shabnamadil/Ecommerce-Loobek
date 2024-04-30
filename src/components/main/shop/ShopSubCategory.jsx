import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsByCategory } from '../../../features/products/productsDataSlice'

const ShopSubCategory = ({ sub, CategoryChangeColor }) => {
    const dispatch = useDispatch()

    return (
        <li className='cat-button category' onClick={(e) => {
            CategoryChangeColor(e);
            dispatch(filterProductsByCategory(sub));
        }}>
            <span>{sub.name}</span>
        </li>)
  
}

export default ShopSubCategory