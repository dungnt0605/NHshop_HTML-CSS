import React from 'react'
import Nav from '~/componer/nav'

const Detailpro = () => {
  return (
    <div>
      <Nav />
      <section className='detailproduct'>
        <div className='container'>
          <div className='detailproduct__main'>
            <div className='detailproduct__images'>
              <ul className='detailproduct__thumbnails'>
                <li className='detailproduct__thumbitems'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </li>
                <li className='detailproduct__thumbitems'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </li>
                <li className='detailproduct__thumbitems'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </li>
                <li className='detailproduct__thumbitems'>
                  <img src='https://picsum.photos/285/300' alt='' />
                </li>
              </ul>
              <div className='detailproduct__showingImage'>
                <img src='https://picsum.photos/285/300' alt='' />
              </div>
            </div>
            <div className='detailproduct__info'>
              <div className='detailproduct__mainInfo'>
                <p className='detailproduct__name'>Asgaard sofa</p>
                <div className='detailproduct__price'>
                  <span className='detailproduct__newprice'>25.000.000đ</span>
                  <span className='detailproduct__oldprice'>25.000.000đ</span>
                </div>
                <div className='detailproduct__vote'>
                  <div className='detailproduct__stars'>
                    <img src='../assets/icons/star.png' className='detailproduct__star' alt='' />
                    <img src='../assets/icons/star.png' className='detailproduct__star' alt='' />
                    <img src='../assets/icons/star.png' className='detailproduct__star' alt='' />
                    <img src='../assets/icons/star.png' className='detailproduct__star' alt='' />
                    <img src='../assets/icons/half_star.png' className='detailproduct__halfstar' alt='' />
                  </div>
                  <span className='detailproduct__totalvote'> 5 Customer Review </span>
                </div>
                <p className='detailproduct__introduce'>
                  Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
                  hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
                <div className='detailproduct__sizes'>
                  <p>Size</p>
                  <div className='detailproduct__sizebtns'>
                    <span style={{ background: '#b88e2f', color: '#fff' }} className='detailproduct__sizeItem'>
                      L
                    </span>
                    <span className='detailproduct__sizeItem'>XL</span>
                    <span className='detailproduct__sizeItem'>XS</span>
                  </div>
                </div>
                <div className='detailproduct__colors'>
                  <p>Color</p>
                  <div className='detailproduct__colorbtns'>
                    <div className='detailproduct__colorItem'>
                      <span style={{ background: '#816dfa' }} className='__circle' />
                    </div>
                    <div className='detailproduct__colorItem'>
                      <span style={{ background: '#000000' }} className='__circle' />
                    </div>
                    <div className='detailproduct__colorItem'>
                      <span style={{ background: '#b88e2f' }} className='__circle' />
                    </div>
                  </div>
                </div>
                <div className='detailproduct__action'>
                  <div className='detailproduct__changeAmount'>
                    <span className='minus'>-</span>
                    <span className='detailproduct__amount'>1</span>
                    <span className='plus'>+</span>
                  </div>
                  <div className='detailproduct__add_compare'>
                    <button className='detailproduct__addtocart'>Add To Cart</button>
                    <button className='detailproduct__compare'>+ Compare</button>
                  </div>
                </div>
              </div>
              <div className='__crossline' />
              <ul className='detailproduct__type'>
                <li>
                  <p>SKU</p>
                  <span>:</span>
                  <span>SS001</span>
                </li>
                <li>
                  <p>Category</p>
                  <span>:</span>
                  <span>Sofas</span>
                </li>
                <li>
                  <p>Tags</p>
                  <span>:</span>
                  <span>Sofa, Chair, Home, Shop</span>
                </li>
                <li>
                  <p>Share</p>
                  <span>:</span>
                  <span className='__social'>
                    <img src='../assets/icons/fb.png' alt='' />
                    <img src='../assets/icons/linkein.png' alt='' />
                    <img src='../assets/icons/twitter.png' alt='' />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Detail product  */}
      <section className='moreinfo'>
        <div className='container'>
          <div className='moreinfo__containlist'>
            <div className='moreinfo__list'>
              <span style={{ color: '#000' }} className='moreinfo__desc'>
                Description
              </span>
              <span className='moreinfo__additional'>Additional Information</span>
              <span className='moreinfo__review'>Reviews [5]</span>
            </div>
          </div>
          <div className='moreinfo__showing'>
            <p className=''>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
              unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              <br />
              <br />
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the
              bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
              well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate
              and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while
              the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
          <div className='moreinfo__showingImage'>
            <span className='__img'>
              <img src='https://picsum.photos/285/500' alt='' />
            </span>
            <span className='__img'>
              <img src='https://picsum.photos/285/500' alt='' />
            </span>
          </div>
        </div>
      </section>
      <div className='__crossline_detailpage' />
      {/* End More Info */}
      <section className='product'>
        <div className='container'>
          <div className='product__relatedTitle'>
            <h4>Related Products</h4>
          </div>
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
          </div>
          <div className='product__showmore'>
            <button className='product__showmorebtn'>Show More</button>
          </div>
        </div>
      </section>
      <div className='__crosslinefooter' />
    </div>
  )
}

export default Detailpro
