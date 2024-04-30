import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../features/products/productsDataSlice';
import { clickedCategory } from '../../features/products/productCategoriesDataSlice';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [query, setQuery] = useState('');

    const handleSearch = (value) => {
        setQuery(value);
        dispatch(searchProducts(value));
        dispatch(clickedCategory(`Search results for  "${value}"`));
        if (value === '') {
            dispatch(clickedCategory("All products"))
        }
        navigate('/shop')
    };

    return (
        <div className='SearchForm'>
            <input
                type="text"
                placeholder='Search for products'
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
            />

            {
                query === '' ?
                    <i
                        className='nav__search nav_hover'
                        onClick={() => handleSearch(query)}
                    >
                        <IoSearchOutline />
                    </i> :
                    <button
                        className='reset-search'
                        onClick={() => {
                            setQuery(''),
                            handleSearch('')
                        }}

                    >
                        x
                    </button>
            }
        </div>
    );
};

export default Searchbar;
