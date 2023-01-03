import React from 'react'
import AboutImage1 from './images/aboutImage1'
import AboutImage2 from './images/aboutImage2'

const Aboutme = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex justify-center items-center h-4/5 w-3/5">
          <div className="absolute w-[600px] blur-3xl h-[600px] bg-[#2954A3] bg-opacity-40 p-14 rounded-full"></div>
          <div className="absolute w-1/3 h-2/3 bg-gradient-to-br from-[#C961DE] to-[#2954A3] rounded-full">
            <div className=" text-white flex flex-col justify-center flex-wrap h-full w-6/12 ml-64 pl-12 pr-2 relative -top-11">
              <span>About Me</span>
              <span>My name is Satnam Singh. I’m a Web Developer based in India. I’m passionate about creating digital experiences. My goal is to grow skills in Web Development.</span>
            </div>
          </div>
          <div className="absolute overflow-hidden w-1/3 h-4/5 mb-24 bg-transparent rounded-b-full">
            <AboutImage2 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
