import React from 'react'
import Nav from '~/componer/nav'

const Home = () => {
  return (
    <div>
      <section className='header'>
        <Nav />
        <div className='header__banner'>
          <img src='https://picsum.photos/1440/1440' srcSet='https://picsum.photos/1440/1440 2x' alt='banner' />
        </div>
      </section>
      <section className='product'>
        <div className='container'>
          <div className='product__title'>
            <h4>New</h4>
          </div>
          <div className='product__list'>
            <div className='product__row'>
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </div>
                <div className='product__infoItem'>
                  <p className='product__nameItem'>Syltherine</p>
                  <p className='product__cateItem'>Stylish cafe chair</p>
                  <div className='product__priceItem'>
                    <span className='product__newprice'>5.000.000</span>
                    <span className='product__oldprice'>5.000.000</span>
                  </div>
                </div>
                <div className='product__feature'>
                  <div className='__btns'>
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
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </div>
                <div className='product__infoItem'>
                  <p className='product__nameItem'>Syltherine</p>
                  <p className='product__cateItem'>Stylish cafe chair</p>
                  <div className='product__priceItem'>
                    <span className='product__newprice'>5.000.000</span>
                    <span className='product__oldprice'>5.000.000</span>
                  </div>
                </div>
                <div className='product__feature'>
                  <div className='__btns'>
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
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#2ec1ac' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </div>
                <div className='product__infoItem'>
                  <p className='product__nameItem'>Syltherine</p>
                  <p className='product__cateItem'>Stylish cafe chair</p>
                  <div className='product__priceItem'>
                    <span className='product__newprice'>5.000.000</span>
                    <span className='product__oldprice'>5.000.000</span>
                  </div>
                </div>
                <div className='product__feature'>
                  <div className='__btns'>
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
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </div>
                <div className='product__infoItem'>
                  <p className='product__nameItem'>Syltherine</p>
                  <p className='product__cateItem'>Stylish cafe chair</p>
                  <div className='product__priceItem'>
                    <span className='product__newprice'>5.000.000</span>
                    <span className='product__oldprice'>5.000.000</span>
                  </div>
                </div>
                <div className='product__feature'>
                  <div className='__btns'>
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
              {/* End Prod  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Prod  */}
      <section className='shop'>
        <div className='container'>
          <div className='shop__title'>
            <h4>Shop</h4>
          </div>
          <div className='shop__item'>
            <a href='#'>
              <img src='https://picsum.photos/605/250' alt='' />
            </a>
            <a href='#'>
              <img src='https://picsum.photos/1000/1000' alt='' />
            </a>
            <a href='#'>
              <img src='https://picsum.photos/1000/1000' alt='' />
            </a>
            <a href='#'>
              <img src='https://picsum.photos/1000/1000' alt='' />
            </a>
          </div>
        </div>
      </section>
      {/* End Shop  */}
      <section className='blog'>
        <div className='container'>
          <div className='blog__title'>
            <h3>BLOG</h3>
          </div>
          <div className='blog__list'>
            <div className='blog__item'>
              <div className='blog__imageItem'>
                <img src='https://picsum.photos/605/250' alt='' />
              </div>
              <div className='blog__info'>
                <h3 className='blog__name'>THE ULTIMATE SOFA BUYING GUIDE</h3>
                <p className='blog__desc'>
                  The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult
                  undertaking. Your needs and the size of your living area will determine everything, However, don’t
                  worry, were are here to help
                </p>
                <div className='blog__about'>
                  <button>
                    ABOUT <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </div>
            </div>
            {/* End blog item */}
            <div className='blog__item'>
              <img src='https://picsum.photos/605/250' alt='' className='blog__imageItem' />
              <div className='blog__info'>
                <h3 className='blog__name'>THE ULTIMATE SOFA BUYING GUIDE</h3>
                <p className='blog__desc'>
                  The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult
                  undertaking. Your needs and the size of your living area will determine everything, However, don’t
                  worry, were are here to help
                </p>
                <div className='blog__about'>
                  <button>
                    ABOUT <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </div>
            </div>
            {/* End blog item */}
            <div className='blog__item'>
              <img src='https://picsum.photos/605/250' alt='' className='blog__imageItem' />
              <div className='blog__info'>
                <h3 className='blog__name'>THE ULTIMATE SOFA BUYING GUIDE</h3>
                <p className='blog__desc'>
                  The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult
                  undertaking. Your needs and the size of your living area will determine everything, However, don’t
                  worry, were are here to help
                </p>
                <div className='blog__about'>
                  <button>
                    ABOUT <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </div>
            </div>
            {/* End blog item */}
          </div>
        </div>
      </section>
      {/* End Blog  */}
      <section className='services'>
        <div className='services__item'>
          <img className='services__imageItem' src='./src/assets/images/trophy 1.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>High Quality</h4>
            <span className='services__desc'>crafted from top materials</span>
          </div>
        </div>
        {/* End Service item */}
        <div className='services__item'>
          <img className='services__imageItem' src='./src/assets/images/guarantee.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>Warranty Protection</h4>
            <span className='services__desc'>Over 2 years</span>
          </div>
        </div>
        {/* End Service item */}
        <div className='services__item'>
          <img className='services__imageItem' src='./src/assets/images/shipping.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>Free Shipping</h4>
            <span className='services__desc'>Order over 150 $</span>
          </div>
        </div>
        {/* End Service item */}
        <div className='services__item'>
          <img className='services__imageItem' src='./src/assets/images/customer-support.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>24 / 7 Support</h4>
            <span className='services__desc'>Dedicated support</span>
          </div>
        </div>
        {/* End Service item */}
      </section>
    </div>
  )
}

export default Home
