import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsByCategory } from '../../../features/products/productsDataSlice'
import { clickedCategory } from '../../../features/products/productCategoriesDataSlice'

const CategoryItem = ({ category, setfilterRemoveActive, filterRemoveActive }) => {
    const dispatch = useDispatch()
    const [subCatActive, setSubCatActive] = useState(false)

    const ChangeColor = (e) => {

        const currentColor = e.target.style.backgroundColor;
        const cats = document.querySelectorAll('.cats');

        cats.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        });

        if (currentColor !== 'black') {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
        }
    }

    return (
        <div className='color-bg cats' onClick={(e) => {
            dispatch(filterProductsByCategory(category.name));
            dispatch(clickedCategory(category));
            setSubCatActive(!subCatActive);
            ChangeColor(e)
            setfilterRemoveActive(!filterRemoveActive)
        }}>
            <span className='color-name'>{category.name}</span>
        </div>

    )
}

export default CategoryItem