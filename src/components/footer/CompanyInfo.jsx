import React from 'react'
import Navlogo from '../navbar/NavLogo'

const CompanyInfo = () => {
    return (
        <div className='company_info'>
            <Navlogo />
            <p>29 SE 2nd Ave, Miami, Florida 33131, United States</p>
            <div className='company_com'>
                <span>(786) 425-1900</span>
                <span>contact@example.com</span>
            </div>
        </div>
    )
}

export default CompanyInfo