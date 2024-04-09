import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutWeb from './components/layouts/LayoutWeb'
import Cart from './page/Cart'
import Detailpro from './page/Detailpro'
import Home from './page/Home'
import Pay from './page/Pay'
import Products from './page/Products'
import Signin from './page/Signin'
import Signup from './page/Signup'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import ProductManagement from './page/admin/products'
import ProductAddPage from './page/admin/products/Add'
import ProductEditpage from './page/admin/products/Edit'
import NotFout from './page/NotFout'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWeb />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='detail/:slug' element={<Detailpro />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<Products />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='pay' element={<Pay />} />
        </Route>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route path='product' element={<ProductManagement />} />
          <Route path='product/create' element={<ProductAddPage />} />
          <Route path='product/:slug/edit' element={<ProductEditpage />} />
        </Route>
        <Route path='*' element={<NotFout />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
