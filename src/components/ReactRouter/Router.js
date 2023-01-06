import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Screens/Navbar/Navbar'
import Home from '../Screens/Home'
import Aboutme from '../Screens/Aboutme'
import Contact from "../Screens/Contact"
import Work from "../Screens/Work"
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="aboutme" element={<Aboutme />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="work" element={<Work />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router
