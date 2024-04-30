import React from 'react'
import gb from '../../assets/img/png/united-kingdom.png'
import spain from '../../assets/img/png/spain.png'
import { RiArrowDownSLine } from "react-icons/ri";

const Language = () => {
  return (

    <span className='header__lang_option' selected value="">

      <i className='arrow_down'>
        <RiArrowDownSLine />
      </i>
      <img className='flag great-britain' src={gb} alt="" />
      English

      <ul className='header__lang_options' >

        <li className='header__lang_opt' >
          <img className='flag spain' src={spain} alt="" />
          Espanol
        </li>

        <li className='header__lang_opt' >
          <img className='flag spain' src={spain} alt="" />
          Deutch
        </li>

      </ul>
    </span>

  )
}

export default Language