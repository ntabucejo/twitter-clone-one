import trends from "../../library/data/trends"
import Trend from "./trend"

const Trends = () => {
  return (
    <section className="bg-gray-100 py-4 rounded-2xl sticky -top-80 -z-10">
      <h1 className="text-[1.25rem] font-black px-4 pb-4">Trends For You</h1>
      <div>
        {trends.map((trend) => (
          <Trend trend={trend}/>
        ))}
      </div>
    </section>
  )
}

export default Trends
