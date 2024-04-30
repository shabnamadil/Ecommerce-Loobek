import React from 'react'

const ProductDetailDescription = ({ detailProduct }) => {
    return (
        <div className="pr-detail-description">
            <p>{detailProduct.description}</p>
            <div className="material-washing">
                <h2>Material & Washing</h2>
                <div className='materials-info'>
                    <ul>
                        <li>Material:</li>
                        <li>80% polyamide, 20% elastane</li>
                    </ul>
                    <ul>
                        <li>Top part material:</li>
                        <li>87% polyester, 13% elastan</li>
                    </ul>
                    <ul>
                        <li>Structure:</li>
                        <li>Mesh, jersey</li>
                    </ul>
                    <ul>
                        <li>Care instructions:</li>
                        <li>Machine wash at 40 ° C, do not tumble dry, Dry clean allowed, Machine wash on gentle cycle</li>
                    </ul>
                </div>
            </div>
            <div className="size-shape">
                <h2>Size & Shape</h2>
                <div className='size-info'>
                    <ul>
                        <li>Model height:</li>
                        <li>Our model is 186 cm tall and is wearing size M</li>
                    </ul>
                    <ul>
                        <li>Length:</li>
                        <li>Short</li>
                    </ul>
                    <ul>
                        <li>Inner leg length:</li>
                        <li>27 cm (Size M)</li>
                    </ul>
                    <ul>
                        <li>Outer leg length:</li>
                        <li>44 cm (Size M)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailDescription
