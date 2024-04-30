import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavCategory from './NavCategory'
import { useSelector, useDispatch } from "react-redux"
import { 
    fetchCategories,
    getAllProductCategories,
    getProductCategoryStatus,
    clickedCategory,
 } from '../../features/products/productCategoriesDataSlice'

import { 
    filterProductsByCategory
} from '../../features/products/productsDataSlice'

const NavCategories = () => {
    const dispatch = useDispatch()
    const ProductCategories = useSelector(getAllProductCategories)
    const ProductCategoryStatus = useSelector(getProductCategoryStatus)

    useEffect(() => {
        if (ProductCategoryStatus == 'idle') {
            dispatch(fetchCategories())
        }
    }, [ProductCategoryStatus, dispatch])

    return (
        <ul className='nav__categories'>
            <li className='nav__cat' onClick={() =>  {
                dispatch(clickedCategory("All products"));
                dispatch(filterProductsByCategory("All products"))
                }}>
                <Link to={'/shop'}>Shop</Link>
            </li>
            {
                ProductCategories.map(category => <NavCategory key={category.id} category={category} />)
            }
        </ul>
    )
}

export default NavCategories