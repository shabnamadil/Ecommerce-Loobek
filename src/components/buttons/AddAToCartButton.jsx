import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import '../../assets/css/button.css'

const AddAToCartButton = ({product}) => {
    return (
        <>
            <i>
                <AiOutlinePlus />
            </i>
            <span >
                Add to Cart
            </span>
        </>
    )
}

export default AddAToCartButton