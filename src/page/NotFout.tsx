import { Link } from 'react-router-dom'

const NotFout = () => {
  return (
    <div>
      <img
        src='https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png'
        alt='notfount'
        className='img-fluid '
      />
      <Link
        to='/'
        className='absolute  top-1/2 left-2/3  bg-blue-500 hover:bg-blue-700 text-6xl text-white font-bold py-2 px-4 rounded'
      >
        Go Home :3
      </Link>
    </div>
  )
}

export default NotFout
