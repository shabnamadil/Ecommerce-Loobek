import React, { useState, useEffect } from 'react'
import "../../../assets/css/show-filters.css"
import { useDispatch, useSelector } from 'react-redux'
import { clickedCategory, getAllProductCategories } from '../../../features/products/productCategoriesDataSlice'
import CategoryItem from './CategoryItem'
import Colors from './Colors'
import { getAllColors } from '../../../features/products/colorDataSlice'
import { fetchColors, getColorStatus } from '../../../features/products/colorDataSlice'
import { clearFilters } from '../../../features/products/productsDataSlice'
import { fetchBrands, getAllBrands, getBrandStatus } from '../../../features/products/brandsDataSlice'
import Brands from './Brands'
import Sizes from './Sizes'
import Prices from './Prices'

const ShowFilters = ({ filterRemoveActive, setfilterRemoveActive }) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [colorActive, setColorActive] = useState(false)
    const [brandActive, setBrandActive] = useState(false)
    const [sizeActive, setSizeActive] = useState(false)
    const [priceActive, setPriceActive] = useState(false)
    const categories = useSelector(getAllProductCategories)
    const AllColors = useSelector(getAllColors)
    const AllBrands = useSelector(getAllBrands)
    const colorStatus = useSelector(getColorStatus)
    const brandStatus = useSelector(getBrandStatus)

    useEffect(() => {
        if (colorStatus == 'idle') {
            dispatch(fetchColors())
        }
        if (brandStatus == 'idle') {
            dispatch(fetchBrands())
        }

    }, [colorStatus, brandStatus, dispatch])

    return (
        <div className='show-filters container'>
            <div className="show-filters__header">
                <div className='clear-filters-btn' onClick={() => {
                    dispatch(clearFilters());
                    dispatch(clickedCategory(""))
                }}>
                    <span className='clear-filters' onClick={() => setfilterRemoveActive(!filterRemoveActive)} >Clear filters</span>
                </div>
                <button onClick={() => setfilterRemoveActive(!filterRemoveActive)}>x</button>
            </div>
            <ul className='show-filters-list'>
                <li className='main-filter' onClick={() => setActive(!active)}>
                    Categories
                </li>
                {active ?
                    <ul className='show-filters__all-cat'>
                        {categories.map(category =>
                            <CategoryItem
                                key={category.id}
                                category={category}
                                active={active}
                                setActive={setActive}
                                filterRemoveActive={filterRemoveActive}
                                setfilterRemoveActive={setfilterRemoveActive}
                            />)}
                    </ul> : null
                }

                <li className='main-filter' onClick={() => setColorActive(!colorActive)}>
                    Colors
                </li>
                {
                    colorActive ?
                        <ul className='filter-colors'>
                            {
                                AllColors.map(color =>
                                    <Colors
                                        key={color.id}
                                        color={color.color}
                                        filterRemoveActive={filterRemoveActive}
                                        setfilterRemoveActive={setfilterRemoveActive}
                                    />
                                )
                            }
                        </ul> : null
                }
                <li className='main-filter' onClick={() => setBrandActive(!brandActive)}>Brands</li>
                {
                    brandActive ?
                        <ul className='filter-brands'>
                            {
                                AllBrands.map(brand => <Brands
                                    key={brand.id}
                                    brand={brand.brand}
                                    filterRemoveActive={filterRemoveActive}
                                    setfilterRemoveActive={setfilterRemoveActive}
                                />
                                )
                            }
                        </ul> : null
                }
                <li className='main-filter' onClick={() => setPriceActive(!priceActive)}>
                    Price
                </li>
                {
                    priceActive ?
                        <ul className='prices-filter'>
                            <Prices
                                filterRemoveActive={filterRemoveActive}
                                setfilterRemoveActive={setfilterRemoveActive}
                            />
                        </ul>
                        : null
                }
                <li className='main-filter' onClick={() => setSizeActive(!sizeActive)}>
                    Sizes
                </li>
                {
                    sizeActive ?
                        <ul className='sizes-filter'>
                            <Sizes
                                filterRemoveActive={filterRemoveActive}
                                setfilterRemoveActive={setfilterRemoveActive}
                            />
                        </ul> : null
                }
            </ul>
        </div>
    )
}

export default ShowFilters