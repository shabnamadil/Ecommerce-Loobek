import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsByColor } from '../../../features/products/productsDataSlice'

const Colors = ({ color, filterRemoveActive, setfilterRemoveActive}) => {
    const dispatch = useDispatch()

    const ChangeColor = (e) => {

        const currentColor = e.target.style.backgroundColor;
        const all = document.querySelectorAll('.all');

        all.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        });

        if (currentColor !== 'black') {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
        }
    }

    return (
        <div className='color-bg all' onClick={(e) => {
            dispatch(filterProductsByColor(color));
            ChangeColor(e)
            setfilterRemoveActive(!filterRemoveActive)
        }}>
            <div className='color-circle' style={{ backgroundColor: `${color}` }}></div>
            <span className='color-name'>{color}</span>
        </div>

    )
}

export default Colors