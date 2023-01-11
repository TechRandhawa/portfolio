import React, { useEffect, useState } from 'react'
import ContactImage from './images/contactImage1'
import Contactimage2 from './images/contactimage2'
import { db } from '../Firebase/firebase_config'
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
} from 'firebase/firestore'
import _ from 'lodash'

const Contact = () => {
  const [data, setData] = useState()
  const [hvalues, setHValues] = useState('')
  const [shvalues, setShValues] = useState('')
  const usersCollectionRef = collection(db, 'contact')

  const getAboutData = async () => {
    const database = await getDocs(usersCollectionRef)
    setData(database.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    if (data) {
      let newData = _.head(data)
      // console.log(newData.header)
      setHValues(newData.header)
      setShValues(newData.subheader)
    } else {
      setHValues([])
      setShValues([])
    }
  }, [data])

  useEffect(() => {
    getAboutData()
  }, [])
  return (
    <>
      <div className="absolute md:-top-[45%] z-20 sphone:top-[-333px] iphone:top-[-288px] top-[-315px] -left-6 md:left-[8.8%]">
        <ContactImage />
      </div>
      <div className="absolute md:bottom-10 bottom-0 right-1 md:right-40">
        <Contactimage2 />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex justify-center z-10 bg-[#2F2F8A] w-[95%] md:w-3/5 h-1/2 rounded-lg bg-opacity-70">
          <div className="border-r-2 flex-1 pt-16 md:pt-10 md:px-10 px-1 flex flex-col text-white space-y-2">
            <span className="font-semibold md:text-lg md:font-bold">
              {hvalues}
            </span>
            <span className="text-sm md:text-base">{shvalues}</span>
          </div>
          <form
            action="https://formspree.io/f/xzbqbqrn"
            method="post"
            className="flex-1 md:px-10 px-1 flex flex-col items-center md:items-start text-white space-y-3 py-3"
          >
            <span className="font-semibold md:text-lg md:font-bold">
              Send Me a Message
            </span>
            <input
              type="text"
              name="username"
              className="w-40 md:w-full h-8 rounded-2xl px-2 placeholder:text-white placeholder:font-semibold bg-gray-500"
              placeholder="Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              className="w-40 md:w-full h-8 rounded-2xl px-2 placeholder:text-white placeholder:font-semibold bg-gray-500"
              placeholder="Email Address"
              required
              autoComplete="off"
            />
            <textarea
              type="text"
              name="message"
              className="w-40 md:w-full h-24 rounded-xl p-2 placeholder:text-white placeholder:font-semibold bg-gray-500"
              placeholder="Your message"
              required
              autoComplete="off"
            />
            <button
              type="submit"
              className="px-5 py-1 md:px-7 md:font-bold rounded-3xl bg-gradient-to-br from-[#C961DE] to-[#2954A3]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
