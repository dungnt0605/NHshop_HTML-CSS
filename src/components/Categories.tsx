import { IProduct } from '@/interface/Products'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { number } from 'joi'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Categories = () => {
  const { id } = useParams()
  const { data: categoryId, isLoading } = useQuery({
    queryKey: ['CATEGORIES_DETAIL', id],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:5170/api/v1/category/' + id)
      return data
    }
  })
  // console.log(categoryId.categorys)
  // console.log(categoryId.products)
  if (isLoading) {
    return <p>Loading ....</p>
  }

  return (
    <>
      <section className='product'>
        <div className='container'>
          <div className='product__title'>
            <h4>{categoryId.categorys.name}</h4>
          </div>

          <div className='product__list'>
            <div className='product__row'>
              {categoryId?.products?.map((product: IProduct, index: number) => {
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

export default Categories
