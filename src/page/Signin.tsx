import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
      <section className='signin'>
        <form action='#'>
          <div className='cancer'>
            <Link to={'/'}>
              <img src='../assets/icons/cancer.svg' alt='' />
            </Link>
          </div>
          <div className='title'>
            <p>Login</p>
          </div>
          <div className='signin__username forminput'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div className='signin__password forminput'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className='submit'>
            <button type='submit'>Login</button>
          </div>
          <div className='signin__connectsocial'>
            <div className='__connectfb'>
              <div className='logo'>
                <img src='../assets/icons/facebook-f.svg' alt='' />
              </div>
              <p>Facebook</p>
            </div>
            <div className='__connectgg'>
              <div className='logo'>
                <img src='../assets/icons/google.svg' alt='' />
              </div>
              <p>Google</p>
            </div>
          </div>
          <div className='switchsignup'>
            <p>
              Dont have account ? <Link to={'/signup'}>Register now</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Signin
