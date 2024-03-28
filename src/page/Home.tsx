import { Banner, Blog, New, Services, Shop } from '@/components'

const Home = () => {
  return (
    <div>
      <Banner />

      <New featured={true} />
      {/* End Prod  */}
      <Shop />
      {/* End Shop  */}
      <Blog />
      {/* End Blog  */}
      <Services />
    </div>
  )
}

export default Home
