import React from 'react'
import Nav from './nav'

const Header = () => {
  return (
    <section className='header'>
      <Nav />
      <div className='header__subbanner'>
        <img src='https://picsum.photos/id/1/1440/500' srcSet='https://picsum.photos/id/1/1440/500 2x' alt='banner' />
      </div>
    </section>
  )
}

export default Header
