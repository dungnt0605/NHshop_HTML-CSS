const Blog = () => {
  return (
    <>
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
    </>
  )
}

export default Blog
