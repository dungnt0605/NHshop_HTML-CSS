import React from 'react'

const Services = () => {
  return (
    <div>
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

export default Services
