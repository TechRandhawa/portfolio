import React, { useEffect, useState } from 'react'
import WorkImage1 from './images/workImage1'
import { db } from '../Firebase/firebase-config'
import { storage } from '../Firebase/firebase-config'
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
} from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'

const Work = () => {
  const navigate=useNavigate()
  const [getImage, setGetImage] = useState()
  const [data, setData] = useState()
  // const imageListRef = ref(storage, 'my-cv-pics/')
  const usersCollectionRef = collection(db, 'skills')
  const getHomeData = async () => {
    const database = await getDocs(usersCollectionRef)
    setData(database.docs.map((doc) => ({ ...doc.data() })))
    // setGetData(true)
    // console.log(data[0])
    // console.log(data[0].header)
  }
  useEffect(() => {
    getHomeData()
  }, [])

  const [dataValues, setDataValues] = useState()
  useEffect(() => {
    if (data) {
      // setHValues(data[0].header)
      // setShValues(data[0].subheader)
      let newData = _.head(data)
      console.log();
      setDataValues(newData.data)
      console.log('gotnew', data, newData.data)
    } else {
      setDataValues([])
    }
  }, [data])
  return (
    <>
      <div className="">
        <div className="flex absolute md:mt-5 top-24 md:top-44 justify-center w-full blur-sm">
          <WorkImage1 />
        </div>
        <div className="flex flex-col overflow-hidden items-center h-[500px] md:h-[600px] m-4 space-y-10 shadow-lg shadow-white">
          <div className="flex flex-col flex-wrap w-10/12 z-20 mt-12 space-y-4 md:space-y-12 items-center backdrop-blur-none">
            <span className="text-white font-semibold text-2xl">Skills</span>
            {data && (
              <>
                {dataValues &&
                  Object.keys(dataValues).map((key, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <div class="flex w-full justify-between">
                          <span className="text-base font-medium text-blue-700 dark:text-white">
                            {key}
                          </span>
                          <span className="text-sm font-medium text-blue-700 dark:text-white">
                            {dataValues[key]}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className={`bg-blue-600 h-2.5 rounded-full `}
                            style={{ width: dataValues[key] + '%' }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
              </>
            )}
          </div>
          <div className="flex flex-col items-center z-20 text-white font-medium">
            <span>Know more about projects kindly visit</span>
            <span onClick={()=> window.open("https://github.com/TechRandhawa")} className='capitalize hover:cursor-pointer underline underline-offset-4'>github profile</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
