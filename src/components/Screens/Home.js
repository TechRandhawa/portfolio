import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeImage1 from './images/homeImage1'
import HomeImage2 from './images/homeImage2'
import { db } from '../Firebase/firebase_config'
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
} from 'firebase/firestore'
import { storage } from '../Firebase/firebase_config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [hvalues, setHValues] = useState('')
  const [shvalues, setShValues] = useState('')
  const usersCollectionRef = collection(db, 'home')
  const docListRef = ref(storage, 'resume/')
  const [getDoc, setGetDoc] = useState()

  const getHomeData = async () => {
    const database = await getDocs(usersCollectionRef)
    setData(database.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    // setGetData(true)
    // console.log(data[0])
    // console.log(data[0].header)
  }

  useEffect(() => {
    if (data) {
      setHValues(data[0].header)
      setShValues(data[0].subheader)
      // console.log('gotnew')
    }
  }, [data])

  useEffect(() => {
    getHomeData()
    listAll(docListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setGetDoc(url)
          // console.log("doc",url);
        })
      })
    })
  }, [])

  const resume = () => {
    // window.location.href=getDoc
    // window.location.replace(getDoc)
    // console.log("here");
    window.open(getDoc)
  }

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
          {data && (
            <div className="flex flex-col w-10/12">
              <div className="flex flex-col font-bold text-6xl text-end md:text-start text-white">
                <span>{hvalues}</span>
                <spam className="text-xl pt-2">{shvalues}</spam>
              </div>
              <div className="flex w-full md:pt-9 h-[3.2rem] md:h-20 pt-3 space-x-3 md:space-x-20 md:pl-11 text-white font-semibold">
                <button
                  className="bg-gradient-to-br from-white to-black px-8 py-2 rounded-3xl"
                  onClick={() => navigate('contact')}
                >
                  Hire me
                </button>
                <button
                  className="bg-gradient-to-br from-[#C961DE] to-[#2954A3] px-8 py-2 rounded-3xl"
                  onClick={() => resume()}
                >
                  Download CV
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
