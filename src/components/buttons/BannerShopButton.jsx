import React from 'react'
import '../../assets/css/button.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { clickedCategory } from '../../features/products/productCategoriesDataSlice';
import { filterProductsByCategory } from '../../features/products/productsDataSlice';

const BannerShopButton = () => {
  return (
    <Link to={"/shop"}>
      <button className='banner_shop_btn' onClick={() => {
        dispatch(clickedCategory("All products"));
        dispatch(filterProductsByCategory("All products"))
      }}>
        Shop now
        <i className='banner_shop_btn_arrow'>
          <MdKeyboardArrowRight />
        </i>
      </button>
    </Link>
  )
}

export default BannerShopButton