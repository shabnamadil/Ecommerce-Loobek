import React from 'react'
import FooterFollowing from './FooterFollowing'
import '../../assets/css/footer.css'
import CompanyInfo from './CompanyInfo'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-con">
                <div className="footer__quick_links">
                    <div className='footer__quick_link_box'>
                        <h3>Shop</h3>
                        <ul>
                            <li>Shop</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                            <li>Sale</li>
                        </ul>
                    </div>
                    <div className='footer__quick_link_box'>
                        <h3>Informations</h3>
                        <ul>
                            <li>Track Order</li>
                            <li>Returns</li>
                            <li>Shipping Info</li>
                            <li>Help</li>
                            <li>Gift Cards</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='footer__quick_link_box'>
                        <h3>Account</h3>
                        <ul>
                            <li>Cart</li>
                            <li>My account</li>
                            <li>My orders</li>
                            <li>Whishlist</li>
                            <li>Affilate Program</li>
                        </ul>
                    </div>
                    <FooterFollowing />
                </div>
                <CompanyInfo />
            </div>
        </footer>
    )
}

export default Footer