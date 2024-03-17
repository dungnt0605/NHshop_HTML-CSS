import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '~/componer/nav'

const Signup = () => {
  return (
    <>
      <Nav />
      <section className='signin'>
        <form action='#'>
          <div className='cancer'>
            <Link to={'/'}>
              <img src='../assets/icons/cancer.svg' alt='' />
            </Link>
          </div>
          <div className='title'>
            <p>Register</p>
          </div>
          <div className='signin__username forminput'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div className='signin__password forminput'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className='signin__password forminput'>
            <label htmlFor='repassword'>RePassword</label>
            <input type='password' id='repassword' />
          </div>
          <div className='submit'>
            <button type='submit'>Register</button>
          </div>
          <div className='switchsignup'>
            <p>
              <Link to={'/signin'}>Login</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Signup
