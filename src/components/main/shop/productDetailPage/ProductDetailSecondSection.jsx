import React, { useState } from 'react'
import ProductDetailDescription from '../productDetailPage/ProductDetailDescription'
import AdditionalInformation from '../productDetailPage/AdditionalInformation';
import Reviews from '../productDetailPage/Reviews';


const ProductDetailSecondSection = ({ detailProduct }) => {
    const [query, setQuery] = useState("Description");

    return (
        <section className='pr-detail-2nd-section'>
            <div className="container pr-detail-2nd-section-con">
                <ul className="second-section-header">
                    <li onClick={(e) => {
                        setQuery("Description");
                        }}
                        >
                        Description
                    </li>
                    <li onClick={(e) => setQuery("AdditionalInfo")}>
                        Additional information
                    </li>
                    <li onClick={(e) => setQuery("Reviews")}>
                        Reviews(0)
                    </li>
                </ul>
                {
                    query === 'Description' ? 
                    <ProductDetailDescription detailProduct={detailProduct} /> :
                    query === "AdditionalInfo" ? 
                    <AdditionalInformation /> :
                    query === "Reviews" ?
                    <Reviews />
                    : null
                }
            </div>
        </section>
    )
}

export default ProductDetailSecondSection