import React from 'react'
import '../../../buttons/BannerShopButton'
import MainCatButton from '../../../buttons/MainCatButton'
import { filterProductsByCategory } from '../../../../features/products/productsDataSlice'
import { clickedCategory, getAllProductCategories } from '../../../../features/products/productCategoriesDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const MainCats = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(getAllProductCategories)

    let men 
    categories.find(item => item.name === "Men" ? men = item : null)

    let women 
    categories.find(item => item.name === "Women" ? women = item : null)
    

    return (
        <div className='home__main_cats'>
            <div className='home__main_cat_con'>

                <div className="main_cat_men_bg main_cat" onClick={() => {
                    dispatch(filterProductsByCategory(men.name));
                    dispatch(clickedCategory(men))
                    navigate(`/shop`);
                }}>
                    <div className='main_cat__text men_bg_text' >
                        <span className='main_cat__span'>Men</span>
                        <MainCatButton />
                    </div>
                </div>

            </div>
            <div className='home__main_cat_con'>
                <div className="main_cat_women_bg main_cat" onClick={() => {

                    dispatch(filterProductsByCategory(women.name));
                    dispatch(clickedCategory(women))
                    navigate(`/shop`);
                }}>
                    <div className='main_cat__text women_bg_text'>
                        <span className='main_cat__span'>Women</span>
                        <MainCatButton />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainCats