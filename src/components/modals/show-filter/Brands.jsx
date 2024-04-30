import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsByBrand } from '../../../features/products/productsDataSlice'

const Brands = ({ brand,  filterRemoveActive, setfilterRemoveActive }) => {
    const dispatch = useDispatch()

    const ChangeColor = (e) => {

        const currentColor = e.target.style.backgroundColor;
        const brands = document.querySelectorAll('.all-brand');

        brands.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        });

        if (currentColor !== 'black') {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
        }
    }

    return (
        <div className='brand-bg all-brand' onClick={(e) => {
            dispatch(filterProductsByBrand(brand))
            ChangeColor(e)
            setfilterRemoveActive(!filterRemoveActive)
        }}>
            <span className='brand-name'>{brand}</span>
        </div>
    )
}

export default Brands