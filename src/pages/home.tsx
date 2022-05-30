import { SearchIcon } from '@heroicons/react/outline'
import Feed from '../components/feed'
import Layout from '../components/layout'
import Publisher from '../components/publisher'
import Trends from '../components/trends'

const Home = () => {
  return (
    <Layout>
      <div className="max-w-[37.5rem] border-x-[1px]">
        <section className="sticky top-0 px-4 py-6 bg-white ">
          <h1 className="text-[1.25rem] font-bold">Home</h1>
        </section>
        <Publisher />
        <Feed />
      </div>
      <div className="laptop:block hidden px-8 space-y-2">
        <section className="sticky top-0 py-3 bg-white">
          <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
            <SearchIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Twitter"
              className="text-base placeholder:text-base focus:outline-none bg-transparent"
            />
          </div>
        </section>
        <Trends />
      </div>
    </Layout>
  )
}

export default Home
