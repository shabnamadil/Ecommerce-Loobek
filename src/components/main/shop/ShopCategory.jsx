import React from 'react'
import { filterProductsByCategory } from '../../../features/products/productsDataSlice'
import { useDispatch } from 'react-redux'
import ShopSubCategory from './ShopSubCategory'

const ShopCategory = ({ category }) => {
    const dispatch = useDispatch()

    const CategoryChangeColor = (e) => {
        
        const currentColor = e.target.style.backgroundColor;
        const allCats = document.querySelectorAll('.category');
    
        allCats.forEach(button => {
            button.style.backgroundColor = 'black';
        });
    
        if (currentColor !== 'red') {
            e.target.style.backgroundColor = 'red';
        }
    }

    return (

        <>
            <ul>
                {category != 'All products' && category.sub_categories
                    ?
                    <li className='cat-button category' onClick={(e) => {
                        dispatch(filterProductsByCategory(category.name));
                        CategoryChangeColor(e)
                    }}
                    >{`All ${category.name}`}
                    </li>
                    : null}
                {
                    category != '' && category.sub_categories ?
                        category.sub_categories.map(sub => <ShopSubCategory key={sub.id} sub={sub} CategoryChangeColor={CategoryChangeColor} /> ) : null
                }

            </ul>
        </>

    )
}

export default ShopCategory