import { Header } from '@/components'

const Pay = () => {
  return (
    <div>
      <Header />
      <section className='bill'>
        <div className='container'>
          <div className='billdetail'>
            <div className='billdetail__detail'>
              <h3>Billing details</h3>
              <div className='billdetail__name'>
                <div className='__firstname'>
                  <label htmlFor='firstname'>First Name</label>
                  <input type='text' id='firstname' />
                </div>
                <div className='__lastname'>
                  <label htmlFor='lastname'>Last Name</label>
                  <input type='text' id='lastname' />
                </div>
              </div>
              <div className='billdetail__company forminput'>
                <label htmlFor='company'>Company Name ( Optional )</label>
                <input type='text' id='company' />
              </div>
              <div className='billdetail__country forminput'>
                <label htmlFor='country'>Country / Region</label>
                <select id='country'>
                  <option value=''>Sri Lanka</option>
                  <option value=''>Sri Lanka</option>
                  <option value=''>Sri Lanka</option>
                </select>
              </div>
              <div className='billdetail__street forminput'>
                <label htmlFor='street'>Street address</label>
                <input type='text' id='street' />
              </div>
              <div className='billdetail__city forminput'>
                <label htmlFor='city'>Town / City</label>
                <input type='text' id='city' />
              </div>
              <div className='billdetail__province forminput'>
                <label htmlFor='province'>Province</label>
                <select id='province'>
                  <option value=''>Western Province</option>
                  <option value=''>Western Province</option>
                  <option value=''>Western Province</option>
                </select>
              </div>
              <div className='billdetail__zipcode forminput'>
                <label htmlFor='zipcode'>ZIP code</label>
                <input type='text' id='zipcode' />
              </div>
              <div className='billdetail__phone forminput'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' />
              </div>
              <div className='billdetail__email forminput'>
                <label htmlFor='email'>Email address</label>
                <input type='text' id='email' />
              </div>
              <div className='billdetail__additional forminput'>
                <label htmlFor='' />
                <input type='text' id='additional' placeholder='Additional information' />
              </div>
            </div>
            <div className='billdetail__order'>
              <ul className='billdetail__orderdetail'>
                <li className='__head orderitem'>
                  <p>Product</p>
                  <p>Subtotal</p>
                </li>
                <li className='__product orderitem'>
                  <p>Asgaard sofa x 1</p>
                  <span>25.000.000đ</span>
                </li>
                <li className='__subtotal orderitem'>
                  <p>Subtotal</p>
                  <span>25.000.000đ</span>
                </li>
                <li className='__total orderitem'>
                  <p>Total</p>
                  <span>25.000.000đ</span>
                </li>
              </ul>
              <div className='__crossline' />
              <div className='__banktransfer'>
                <input type='radio' name='paymethod' id='banktransfer' />
                <label htmlFor='banktransfer'>Direct Bank Transfer</label>
                <p>
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                  Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className='__cashondelivery'>
                <input type='radio' name='paymethod' id='cashondelivery' />
                <label htmlFor='cashondelivery'> Cash On Delivery </label>
                <p>
                  Your personal data will be used to support your experience throughout this website, to manage access
                  to your account, and for other purposes described in our <strong>privacy policy.</strong>
                </p>
              </div>
              <div className='__orderbtn'>
                <button>Place order</button>
              </div>
            </div>
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

export default Pay
