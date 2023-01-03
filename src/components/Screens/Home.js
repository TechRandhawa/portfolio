import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeImage1 from './images/homeImage1'
import HomeImage2 from './images/homeImage2'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex h-full overflow-hidden">
        <div className="relative md:ml-24 ml-4 mt-3 md:mt-0">
          <HomeImage1 />
        </div>
        <div className="flex w-full absolute bottom-4 justify-end md:pr-32">
          <HomeImage2 />
        </div>
        <div className="md:static absolute flex md:pt-28 pr-2 pt-10 z-20 md:pl-28 justify-end  left-0">
          <div className="flex flex-col w-10/12">
            <div className="flex flex-col font-bold text-6xl text-end md:text-start text-white">
              <span>Searching for Creative Web Developer.</span>
              <spam className="text-xl pt-2">
                Hi, I'm Satnam Singh a Front-end Web Developer from India
              </spam>
            </div>
            <div className="flex w-full md:pt-9 pt-3 space-x-3 md:space-x-20 md:pl-11 text-white font-semibold">
              <button
                className="bg-gradient-to-br from-white to-black px-8 py-2 rounded-3xl"
                onClick={() => navigate('contact')}
              >
                Hire me
              </button>
              <button
                className="bg-gradient-to-br from-[#C961DE] to-[#2954A3] px-8 py-2 rounded-3xl"
                onClick={() => navigate('')}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
