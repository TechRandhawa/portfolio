import React, { useState,useEffect } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import './Navbar.css'
import { storage } from '../../Firebase/firebase-config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [getImage, setGetImage] = useState()
  const imageListRef = ref(storage, 'my-cv-pics/')
  // console.log(location);

  const goTo = (e) => {
    navigate(e)
    console.log("here",e);
    setOpen(false)
  }

  useEffect(() => {    
    listAll(imageListRef).then((res)=>{
      res.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setGetImage(url)
          // console.log(url);
        })
      })
    })
  }, [])
  

  return (
    <>
      <div className="flex z-30 flex-col h-screen md:h-screen bg-[#0F103F]">
        <div className="overflow-hidden">
          <div className="md:flex hidden border-b-2 mb-5 rounded-b-2xl border-white pb-4 pt-10 justify-center items-center space-x-16 text-white uppercase pr-12">
            <div
              onClick={() => goTo("/")}
              className="w-14 hover:font-semibold hover:cursor-pointer"
            >
              home
            </div>
            <div
              className="w-24 hover:font-semibold hover:cursor-pointer"
              onClick={() => goTo("aboutme")}
            >
              about me
            </div>
            <div
              className="hover:stroke-[#0F103F] hover:cursor-pointer"
              onClick={() => goTo("/")}
            >
              <img src={getImage} alt="Logo" className="rounded-full w-12 h-12" />
            </div>
            <div
              className="w-14 hover:font-semibold hover:cursor-pointer"
              onClick={() => goTo("skill")}
            >
              Skill
            </div>
            <div
              className="w-14 hover:font-semibold hover:cursor-pointer"
              onClick={() => goTo("contact")}
            >
              contact
            </div>
          </div>

          <div className="flex md:hidden text-white border-b-2 rounded-b-2xl mb-3 border-white uppercase justify-between">
            <div
              className="flex hover:stroke-[#0F103F] hover:cursor-pointer p-3"
              onClick={() => goTo("/")}
            >
              <img src={getImage} alt="Logo" className="rounded-full w-14 h-14" />
            </div>
            <div className="flex min-h-full z-10 pr-3 items-center hover:cursor-pointer">
              <div onClick={() => setOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>

            <div className="w-screen flex justify-end h-screen overflow-hidden bg-transparent absolute top-0 left-0">
              <div
                className={` relative w-44 z-30 h-screen ${
                  open
                    ? 'animate-[open_2s_linear_1] right-0'
                    : 'delay-700 translate-x-0 duration-1000 ease-in-out -right-48'
                } bg-[#0F103F] border-l-2 space-y-10 p-10`}
              >
                <div
                  className={` absolute right-2 top-2 ${!open && "animate-[cross_3s_linear_infinite_alternate-reverse]"} active:animate-[cross_3s_linear_infinite_alternate-reverse] hover:cursor-pointer `}
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => goTo("/")}
                >
                  home
                </div>
                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => goTo("aboutme")}
                >
                  about me
                </div>

                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => goTo("skill")}
                >
                  Skill
                </div>
                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => goTo("contact")}
                >
                  contact
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Navbar
