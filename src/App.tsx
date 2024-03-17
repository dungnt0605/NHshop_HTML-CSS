import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Footer from './componer/Footer'
import Cart from './page/Cart'
import Detailpro from './page/Detailpro'
import Products from './page/Products'
import Signin from './page/Signin'
import Signup from './page/Signup'
import Pay from './page/Pay'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail' element={<Detailpro />} />
        <Route path='/products' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/pay' element={<Pay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
