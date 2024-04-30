import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";

const Currency = () => {
  return (

    <span className='currency__option' selected value="">
      <i className='arrow_down_curr'>
        <RiArrowDownSLine />
      </i>
      $ USD
      <ul className='header__curr_options' >
        <li className='currency__opt' > € EUR</li>
        <li className='currency__opt' > ₼ AZN</li>
      </ul>
    </span>

  )
}

export default Currency