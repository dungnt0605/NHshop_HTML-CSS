import { getAllProducts } from '@/services/product'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '@/interface/Products'

type ProductProps = {
  featured?: boolean
}

const New = ({ featured }: ProductProps) => {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['PRODUCT_KEY'],
    queryFn: getAllProducts
  })
  // console.log(data)
  const filteredProducts = featured ? products?.filter((product: IProduct) => product?.featured == featured) : products
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>

  return (
    <>
      <section className='product'>
        <div className='container'>
          <div className='product__title'>
            <h4>New</h4>
          </div>
          <div className='product__list'>
            <div className='product__row'>
              {filteredProducts?.map((product, index) => {
                return (
                  <div key={index} className='product__item'>
                    <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                      <p>{product.discount}%</p>
                    </div>
                    <div className='product__imageItem'>
                      <img src={product.image} alt='' />
                    </div>
                    <div className='product__infoItem'>
                      <p className='product__nameItem'>{product.name}</p>
                      <p className='product__cateItem'>{product.category}</p>
                      <div className='product__priceItem'>
                        <span className='product__newprice'>
                          $ {product?.price - (product?.price * product?.discount) / 100}
                        </span>
                        <span className='product__oldprice'>$ {product.price}</span>
                      </div>
                    </div>
                    <div className='product__feature'>
                      <div className='__btns'>
                        <Link to={`/detail/${product.slug}`} className='__addtocart'>
                          View Product
                        </Link>
                        <button className='__addtocart'>Add to cart</button>
                        <div className='__more'>
                          <span className='__share'>
                            <img src='./src/assets/icons/gridicons_share.png' alt='' />
                            Share
                          </span>
                          <span className='__share'>
                            <img src='./src/assets/icons/compare-svgrepo-com 1.png' alt='' />
                          </span>
                          <span className='__like'>
                            <img src='./src/assets/icons/Heart.png' alt='' /> Like
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default New
