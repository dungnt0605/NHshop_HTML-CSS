const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='footer__list'>
          <ul className='footer__brand'>
            <li className='footer__brandname'>Funiro.</li>
            <li className='footer__address'>
              400 University Drive Suite 200 Coral <br />
              Gables,
              <br />
              FL 33134 USA
            </li>
          </ul>
          <div className='footer__list_link'>
            <ul className='footer__links'>
              <li className='footer__namelinks'>Links</li>
              <li className='footer__linksitem'>
                <a href=''>Home</a>
              </li>
              <li className='footer__linksitem'>
                <a href=''>Shop</a>
              </li>
              <li className='footer__linksitem'>
                <a href=''>About</a>
              </li>
              <li className='footer__linksitem'>
                <a href=''>Contact</a>
              </li>
            </ul>
            <ul className='footer__helps'>
              <li className='footer__namehepls'>Helps</li>
              <li className='footer__heplsitem'>
                <a href=''>Payment Options</a>
              </li>
              <li className='footer__heplsitem'>
                <a href=''>Returns</a>
              </li>
              <li className='footer__heplsitem'>
                <a href=''>Privacy Policies</a>
              </li>
            </ul>
          </div>
          <ul className='footer__newsletter'>
            <li className='footer__namenewletter'>Newsletter</li>
            <li className='footer__subcribe'>
              <form action='#'>
                <input type='email' placeholder='Enter Your Email Address' />
                <button type='submit'>SUBSCRIBE</button>
              </form>
            </li>
          </ul>
        </div>
        <div className='footer__license'>
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
