import React, { useEffect, useState } from 'react'
import AboutImage1 from './images/aboutImage1'
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

const Aboutme = () => {
  const [data, setData] = useState()
  const [hvalues, setHValues] = useState('')
  const [shvalues, setShValues] = useState('')
  const usersCollectionRef = collection(db, 'about')

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
      <div className="flex justify-center items-center h-full w-full overflow-hidden">
        <div className="md:flex hidden justify-center items-center h-4/5 w-3/5">
          <div className="absolute w-[600px] blur-3xl h-[600px] bg-[#2954A3] bg-opacity-40 p-14 rounded-full"></div>
          <div className="absolute w-1/3 h-2/3 bg-gradient-to-br from-[#C961DE] to-[#2954A3] rounded-full overflow-hidden">
            <div className=" text-white flex flex-col justify-center flex-wrap h-full w-6/12 ml-64 pl-12 pr-2 relative -top-11 backdrop-blur-md">
              <span>{hvalues}</span>
              <span>{shvalues}</span>
            </div>
          </div>
          <div className="absolute overflow-hidden w-1/3 h-4/5 mb-24 bg-transparent rounded-b-full">
            <AboutImage1 />
          </div>
        </div>

        <div className="flex md:hidden justify-center items-center h-4/5 w-3/5">
          <div className="absolute top-10 sm:w-[600px] w-[240px] h-[240px] blur-3xl sm:h-[600px] bg-[#2954A3] bg-opacity-40 p-14 rounded-full"></div>
          <div className="absolute top-28 h-2/3 bg-gradient-to-br from-[#C961DE] to-[#2954A3] rounded-full overflow-hidden">
            <div className=" text-white flex flex-col justify-center text-end items-end w-full flex-wrap h-full">
              <div className="w-1/2 pr-4 flex flex-col z-20 font-semibold shadow-2xl backdrop-blur-md">
                <span>{hvalues}</span>
                <span>{shvalues}</span>
              </div>
            </div>
          </div>
          <div className="absolute left-0 overflow-hidden h-2/3 w-full top-28 bg-transparent rounded-b-full">
            <AboutImage1 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
