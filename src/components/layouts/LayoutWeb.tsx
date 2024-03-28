import { Outlet } from 'react-router-dom'
import { Footer } from '..'
import Nav from '../nav'

const LayoutWeb = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutWeb
