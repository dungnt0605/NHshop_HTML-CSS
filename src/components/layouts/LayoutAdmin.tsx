import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <>
      <div className='grid grid-cols-[300px, auto]'>
        <aside className='bg-red-700'>Aside</aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default LayoutAdmin
