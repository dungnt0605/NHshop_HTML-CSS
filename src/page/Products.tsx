import React from 'react'
import Nav from '~/componer/nav'

const Products = () => {
  return (
    <div>
      <section className='header'>
        <Nav />
        <div className="header__subbanner">
			<img src="https://picsum.photos/id/1/1440/500" srcSet="https://picsum.photos/id/1/1440/500 2x"
				alt="banner" />
		</div>
      </section>
      <div className='filter'>
        <div className='filter__byChoose'>
          <span className='__filtering'>
            <img src='../assets/icons/filtering.png' alt='' />
            <p>Filter</p>
          </span>
          <span className='__gridfil'>
            <img src='../assets/icons/grid.png' alt='' />
          </span>
          <span className='__listfil'>
            <img src='../assets/icons/Vector.png' alt='' />
          </span>
          <span className='__resultOption'>
            <p>
              Showing <span className='__indexResults'>1 - 16</span> of <span className='__totalResult'>32</span>
            </p>
          </span>
        </div>
        <div className='filter__byKeyword'>
          <p>Show</p>
          <span className='__resultsShowing'>16</span>
          <p>Short by</p>
          <input className='__inputFilKeyword' type='text' placeholder='Default' />
        </div>
      </div>
      {/* End Filter  */}
      <section className='product'>
        <div className='container'>
          <div className='product__list'>
            <div className='product__row'>
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#2ec1ac' }} className='product__status'>
                  <p>New</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
            </div>
            <div className='product__row'>
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#2ec1ac' }} className='product__status'>
                  <p>New</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
            </div>
            <div className='product__row'>
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#2ec1ac' }} className='product__status'>
                  <p>New</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
            </div>
            <div className='product__row'>
              <div className='product__item'>
                <div style={{ backgroundColor: '#e97171' }} className='product__status'>
                  <p>-50%</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div style={{ backgroundColor: '#2ec1ac' }} className='product__status'>
                  <p>New</p>
                </div>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Prod  */}
              <div className='product__item'>
                <div className='product__imageItem'>
                  <img src='https://picsum.photos/id/55/285/300' alt='' />
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
                    <button className='__view'>View product</button>
                    <button className='__addtocart'>Add to cart</button>
                    <div className='__more'>
                      <span className='__share'>
                        <img src='../assets/icons/gridicons_share.png' alt='' />
                        Share
                      </span>
                      <span className='__share'>
                        <img src='../assets/icons/compare-svgrepo-com 1.png' alt='' />
                        Compare
                      </span>
                      <span className='__like'>
                        <img src='../assets/icons/Heart.png' alt='' /> Like
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
      <section className='btnList'>
        <span style={{ display: 'none' }} className='btnList__back'>
          Back
        </span>
        <span className='btnList__item btnlist__active'>1</span>
        <span className='btnList__item'>2</span>
        <span className='btnList__item'>3</span>
        <span className='btnList__next'>Next</span>
      </section>
      {/* End Btn List  */}
      <section className='services'>
        <div className='services__item'>
          <img className='services__imageItem' src='../assets/images/trophy 1.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>High Quality</h4>
            <span className='services__desc'>crafted from top materials</span>
          </div>
        </div>
        {/* End Service item */}
        <div className='services__item'>
          <img className='services__imageItem' src='../assets/images/guarantee.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>Warranty Protection</h4>
            <span className='services__desc'>Over 2 years</span>
          </div>
        </div>
        {/* End Service item */}
        <div className='services__item'>
          <img className='services__imageItem' src='../assets/images/shipping.png' alt='' />
          <div className='sevices__infoItem'>
            <h4 className='services__name'>Free Shipping</h4>
            <span className='services__desc'>Order over 150 $</span>
          </div>
        </div>
        {/* End Service item */}
        <div className='services__item'>
          <img className='services__imageItem' src='../assets/images/customer-support.png' alt='' />
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

export default Products
