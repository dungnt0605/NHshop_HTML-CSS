import instance from '@/config/axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserType>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (user: UserType) => {
    console.log(user)
    ;(async () => {
      const { data } = await instance.post('auth/signin', user)
      if (data) {
        alert('Bạn đã đăng nhập thành công !')
        localStorage.setItem('token', data.token)
      }
    })()
  }
  return (
    <>
      <section className='signin'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='cancer'>
            <Link to={'/'}>
              <img src='../assets/icons/cancer.svg' alt='' />
            </Link>
          </div>
          <div className='title'>
            <p>Login</p>
          </div>
          <div className='signin__username forminput'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' {...register('email')} />
            {errors.email && <span className='text-danger '>{errors.email.message}</span> }
          </div>

          <div className='signin__password forminput'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' {...register('password')} />
            {errors.password && <span className='text-danger '>{errors.password.message}</span> }
          </div>
          <div className='submit'>
            <button>Login</button>
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
