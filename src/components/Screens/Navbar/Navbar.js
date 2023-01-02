import React, { useState } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  // console.log(location);

  return (
    <>
      <div className="flex z-30 flex-col min-h-screen md:h-screen bg-[#0F103F]">
        <div className="overflow-hidden">
          <div className="md:flex hidden border-b-2 pb-4 pt-10 justify-center items-center space-x-16 text-white uppercase pr-12">
            <div
              className="w-14 hover:font-semibold hover:cursor-pointer"
              onClick={() => navigate('/')}
            >
              home
            </div>
            <div
              className="w-24 hover:font-semibold hover:cursor-pointer"
              onClick={() => navigate('aboutme')}
            >
              about me
            </div>
            <div
              className="hover:stroke-[#0F103F] hover:cursor-pointer"
              onClick={() => navigate('/')}
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0086 25.1686C38.18 32.7915 31.9535 44.9486 24.0235 44.9486C19.0049 44.9486 35.6829 43.5029 28.1914 33.4486C25.2945 29.5606 22.0143 28.52 15.7435 24.84C3.4972 17.6533 13.4057 1.05145 23.5307 1.05145C31.3026 1.05146 36.6686 4.99431 34.7629 13.7343C34.1065 16.7447 28.6365 15.7958 29.6372 12.4857C30.4915 9.66002 31.74 7.03145 28.1914 5.32288C24.6429 3.61431 19.6486 7.09717 16.9921 12.3543C13.3713 19.5198 20.8741 20.7868 27.0086 25.1686Z"
                  fill="url(#paint0_linear_1_1589)"
                />
                <rect
                  x="1"
                  y="1"
                  width="44"
                  height="44"
                  rx="22"
                  stroke="url(#paint1_linear_1_1589)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1589"
                    x1="8.91251"
                    y1="3.7375"
                    x2="37.0875"
                    y2="41.6875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BA72BA" />
                    <stop offset="1" stop-color="#626BFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_1589"
                    x1="28.75"
                    y1="1.4375"
                    x2="31.05"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AB71C6" />
                    <stop offset="0.507276" stop-color="#8A6EE0" />
                    <stop offset="1" stop-color="#6A6CF9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="w-14 hover:font-semibold hover:cursor-pointer"
              onClick={() => navigate('work')}
            >
              work
            </div>
            <div
              className="w-14 hover:font-semibold hover:cursor-pointer"
              onClick={() => navigate('contact')}
            >
              contact
            </div>
          </div>
          <div className="flex md:hidden text-white border-b-2 rounded-b-2xl uppercase justify-between">
            <div
              className="flex hover:stroke-[#0F103F] hover:cursor-pointer p-3"
              onClick={() => navigate('/')}
            >
              <img src={logo} alt="Logo" className="rounded-full w-14 h-14" />
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

            <div className='w-screen flex justify-end h-screen overflow-hidden bg-transparent absolute top-0 left-0'>
              <div
                className={` relative w-44 z-30 h-screen ${
                  open
                    ? 'animate-[open_3s_linear_1] right-0'
                    : 'animate-[close_5s_linear_1] -right-48'
                } bg-[#0F103F] border-l-2 space-y-10 p-10`}
              >
                <div
                  className="absolute right-2 top-2 active:animate-[cross_3s_linear_infinite] hover:cursor-pointer"
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
                  onClick={() => navigate('/')}
                >
                  home
                </div>
                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => navigate('aboutme')}
                >
                  about me
                </div>

                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => navigate('work')}
                >
                  work
                </div>
                <div
                  className="hover:font-semibold hover:cursor-pointer border-b-2"
                  onClick={() => navigate('contact')}
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
