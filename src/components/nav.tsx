import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <section className='header'>
        <div className='container'>
          {/* nav PC */}
          <div className='navbar'>
            <div className='navbar__logo'>
              <img src='./src/assets/images/logo.svg' alt='Logo' />
              <h3 className='navbar__brand'>Furniro</h3>
            </div>
            <ul className='navbar__main'>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/products'}>Shop</NavLink>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
            <ul className='navbar__features'>
              <li>
                <NavLink to={'/signin'}>
                  <img src='./src/assets/icons/mdi_account-alert-outline.png' alt='' />
                </NavLink>
              </li>
              <li>
                <NavLink to={'/pay'}>
                  <img src='./src/assets/icons/akar-icons_search.png' alt='' />
                </NavLink>
              </li>
              <li>
                <NavLink to={'/detail'}>
                  <img src='./src/assets/icons/akar-icons_heart.png' alt='' />
                </NavLink>
              </li>
              <li>
                <NavLink to={'/cart'}>
                  <img src='./src/assets/icons/ant-design_shopping-cart-outlined.png' alt='' />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* nav mobile */}
        <nav className='nav__mobile'>
          <div className='navbar__logo'>
            <img src='./src/assets/images/logo.svg' alt='Logo' />
            <h3 className='navbar__brand'>Furniro</h3>
          </div>
          <label htmlFor='nav__input' className='nav__bar_btn'>
            <i className='fa-solid fa-bars' />
          </label>
          <input type='checkbox' hidden id='nav__input' />
          <label htmlFor='nav__input' className='nav_overlay' />
          <div className='menu-mobile'>
            <label htmlFor='nav__input' className='nav__mobile_close'>
              <i className='fa-solid fa-xmark' />
            </label>
            <ul className='menu-mobile_item '>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/products'}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Nav
