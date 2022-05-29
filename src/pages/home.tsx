import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <div className="bg-green-500 max-w-[37.5rem]">content</div>
      <div className="bg-red-500 laptop:block hidden">sidebar</div>
    </Layout>
  )
}

export default Home
