import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clickedCategory, getAllProductCategories } from '../../../../features/products/productCategoriesDataSlice'
import { filterProductsByCategory } from '../../../../features/products/productsDataSlice'
import women from '../../../../assets/img/jpg/women-bg.jpg'

const CollectionBanner = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(getAllProductCategories)

    let Sweatshirts
    categories.find(item => item.sub_categories.find(sub => sub.name === "Sweatshirts" ? Sweatshirts = sub : null))

    let Coats
    categories.find(item => item.sub_categories.find(sub => sub.name === "Coats" ? Coats = sub : null))


    let Dresses
    categories.find(item => item.sub_categories.find(sub => sub.name === "Dresses" ? Dresses = sub : null))


    return (
        <section className='men-banner-area women-banner-area'>
            <div className="women-banner-con container">
                <img src={women} alt="" />
                <div className="men-banner-info-home">
                    <span>Huge Sale!</span>
                    <h3>Summer collection 2024</h3>
                    <ul>
                        <li
                            onClick={() => {
                                dispatch(filterProductsByCategory(Sweatshirts));
                                dispatch(clickedCategory(Sweatshirts));
                                navigate(`/shop`);
                            }}
                        >
                            Sweatshirts
                        </li>
                        <li
                            onClick={() => {
                                dispatch(filterProductsByCategory(Coats));
                                dispatch(clickedCategory(Coats));
                                navigate(`/shop`);
                            }}
                        >
                            Coats
                        </li>
                        <li
                            onClick={() => {
                                dispatch(filterProductsByCategory(Dresses));
                                dispatch(clickedCategory(Dresses));
                                navigate(`/shop`);
                            }}>
                            Dresses
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CollectionBanner