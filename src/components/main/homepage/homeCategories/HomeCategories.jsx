import React from 'react'
import MainCats from './MainCats'
import '../../../../assets/css/home-category.css'
import TopCats from './TopCats'

const HomeCategories = () => {
  return (
    <section className='home__categories'>
      <div className="container home_cat_con">
        <MainCats />
        <TopCats />
      </div>
    </section>
  )
}

export default HomeCategories