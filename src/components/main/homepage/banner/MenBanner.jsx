import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clickedCategory, getAllProductCategories } from '../../../../features/products/productCategoriesDataSlice'
import { filterProductsByCategory } from '../../../../features/products/productsDataSlice'
import men from '../../../../assets/img/jpg/men-area-collection.jpg'



const MenBanner = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(getAllProductCategories)

    let Jeans
    categories.find(item => item.sub_categories.find(sub => sub.name === "Jeans" ? Jeans = sub : null))

    let Suits
    categories.find(item => item.sub_categories.find(sub => sub.name === "Suits" ? Suits = sub : null))

    let Sportswear
    categories.find(item => item.sub_categories.find(sub => sub.name === "Sportswear" ? Sportswear = sub : null))


    return (
        <section className='men-banner-area'>
            <div className="men-banner-con container">
                <img src={men} alt="" />
                <div className="men-banner-info-home">
                    <span>All for Men!</span>
                    <h3>Men's business clothing</h3>
                    <ul>
                        <li
                            onClick={() => {
                                dispatch(filterProductsByCategory(Jeans));
                                dispatch(clickedCategory(Jeans));
                                navigate(`/shop`);
                            }}
                        >
                            Jeans
                        </li>
                        <li
                            onClick={() => {
                                dispatch(filterProductsByCategory(Suits));
                                dispatch(clickedCategory(Suits));
                                navigate(`/shop`);
                            }}
                        >
                            Suits
                        </li>
                        <li
                            onClick={() => {
                                dispatch(filterProductsByCategory(Sportswear));
                                dispatch(clickedCategory(Sportswear));
                                navigate(`/shop`);
                            }}>
                            Sportswear
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MenBanner