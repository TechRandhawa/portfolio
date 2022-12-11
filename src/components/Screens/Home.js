import React from 'react'
import HomeImage1 from './images/homeImage1'
import HomeImage2 from './images/homeImage2'

const home = () => {
  return (
    <>
      <div className="flex">
        <div className="relative ml-24">
          <HomeImage1 />
        </div>
        <div className="flex w-full absolute bottom-4 justify-end pr-32">
          <HomeImage2 />
        </div>
        <div className='flex items-center pl-28'>
          <span className='font-bold text-6xl text-white w-2/3'>Creative UI Designer Sourasith Phomhome Based in Montreal</span>
        </div>
      </div>
    </>
  )
}

export default home
