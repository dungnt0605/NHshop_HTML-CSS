import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/cart.scss'
import './scss/detailproduct.scss'
import './scss/home.scss'
import './scss/index.scss'
import './scss/pay.scss'
import './scss/products.scss'
import './scss/responsive.scss'
import './scss/signin.scss'
import './global.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
