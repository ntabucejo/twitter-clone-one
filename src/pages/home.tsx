import Feed from '../components/feed'
import Layout from '../components/layout'
import Publisher from '../components/publisher'

const Home = () => {
  return (
    <Layout>
      <div className="max-w-[37.5rem] border-x-[1px]">
        <div className="sticky top-0 px-4 py-3 bg-white ">
          <h1 className="text-[1.25rem] font-bold">Home</h1>
        </div>
        <Publisher />
        <Feed />
      </div>
      <div className="laptop:block hidden"></div>
    </Layout>
  )
}

export default Home
