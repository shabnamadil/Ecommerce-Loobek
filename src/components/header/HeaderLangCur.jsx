import React from 'react'
import Language from './Language'
import Currency from './Currency'

const HeaderLangCur = () => {
    return (
        <div className='header__lang_cur'>
            <Language />
            <Currency />
        </div>
    )
}

export default HeaderLangCur