import React from 'react'
import { useDispatch } from "react-redux"
import { filterProductsByCategory } from '../../features/products/productsDataSlice'
import { clickedCategory } from '../../features/products/productCategoriesDataSlice'
import { Link } from 'react-router-dom'

const NavCategory = ({ category }) => {
    const dispatch = useDispatch()
    
    return (
        <Link to={'/shop'} >
            <li className='nav__cat' onClick={() => {
                dispatch(filterProductsByCategory(category.name));
                dispatch(clickedCategory(category))
            }}>
                {category.name}
            </li>
        </Link>

    )
}

export default NavCategory