import React from 'react'
import HeaderQuickLinks from './HeaderQuickLinks'
import HeaderLangCur from './HeaderLangCur'

const HeaderRight = () => {
  return (
    <div className='header__right'>
        <HeaderQuickLinks />
        <HeaderLangCur />
    </div>
  )
}

export default HeaderRight