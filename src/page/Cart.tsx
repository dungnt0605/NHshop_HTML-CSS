import { Header } from '@/components'

const Cart = () => {
  return (
    <div>
      <Header />

      <section className='infocart'>
        <div className='container'>
          <div className='infocart__info'>
            <ul className='infocart__list'>
              <ul className='infocart__listheader'>
                <li className='img' />
                <li className='name'>Product</li>
                <li className='price'>Price</li>
                <li className='quantity'>Quantity</li>
                <li className='subtotal'>Subtotal</li>
                <li className='remove' />
              </ul>
              <li className='infocart__listitem'>
                <div className='img'>
                  <div className='infocart__imageitem'>
                    <img src='https://picsum.photos/500/500' alt='' />
                  </div>
                </div>
                <p className='infocart__nameitem name'>Asgaard sofa</p>
                <p className='infocart__priceitem price'>25.000.000đ</p>
                <div className='quantity'>
                  <div className='infocart__quantityitem'>
                    <span className='minus'>-</span>
                    <span className='quanity'>1</span>
                    <span className='plus'>+</span>
                  </div>
                </div>
                <p className='infocart__subtotalitem subtotal'>25.000.000đ</p>
                <div className='remove'>
                  <div className='infocart__removeitem'>
                    <img src='../assets/icons/trash.svg' alt='' />
                  </div>
                </div>
              </li>
            </ul>
            <form method='' action='#' className='infocart__checkout'>
              <h3 className='infocart__titletotal'>Cart Totals</h3>
              <div className='__crosslinecheckout' />
              <div className='infocart__subtotalcart'>
                <p>Subtotal</p>
                <span>25.000.000đ</span>
              </div>
              <div className='infocart__totalcart'>
                <p>Total</p>
                <span>25.000.000đ</span>
              </div>
              <div className='__crosslinecheckout' />
              <button>Check Out</button>
            </form>
          </div>
        </div>
      </section>
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

export default Cart
