import { Categories, Header, New } from '@/components'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Products = () => {
  const { id } = useParams()
  const { data: categories } = useQuery({
    queryKey: ['CATEGORIES_LIST'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:5170/api/v1/category')
      return data
    }
  })
  console.log(categories)
  return (
    <div>
      <Header />
      <div className='filter'>
        <div className='filter__byChoose'>
          <span className='__filtering'>
            <img src='../assets/icons/filtering.png' alt='' />
            <p>Filter</p>
            {categories?.map((category: { _id?: number | string; name: string; slug: string }) => (
              <Link
                to={`/products/${category._id}`}
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                {category.name}
              </Link>
            ))}
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
      {id ? <Categories /> : <New />}

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
