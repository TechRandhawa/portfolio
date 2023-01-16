import React, { useEffect, useState } from 'react'
import { storage } from '../Firebase/firebase_config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'

const Certs = () => {
  const navigate = useNavigate()
  const [certificate, setCertificate] = useState([])
  const [certificateName, setCertificateName] = useState([])
  const [showCerts, setshowCerts] = useState()
  const [showCertsName, setshowCertsName] = useState()
  const imageListRef = ref(storage, 'certs/')
  // console.log(location);

  const getCerts = () => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setCertificate((prev) => [...prev, url])
          setCertificateName((prev) => [...prev, item.name])
          // console.log(item.name)
        })
      })
    })
  }

  useEffect(() => {
    getCerts()
  }, [])

  useEffect(() => {
    if (certificate) {
      let newData = _.uniq(certificate)
      setshowCerts(newData)
      let newCerts = _.uniq(certificateName)
      setshowCertsName(newCerts)
    } else {
      setshowCerts([])
      setshowCertsName([])
    }
    // console.log('here',certificate.length)
    console.log(showCerts)
  }, [certificate])

  return (
    <>
      <div className="w-full px-4 pt-6">
        <div className="md:flex md:flex-wrap justify-center">
          {showCerts &&
            showCerts.map((url, index) => {
              return (
                <div key={index}>
                  <object
                    className="md:w-[420px] w-fit h-fit md:h-[380px] md:m-5 text-white"
                    data={url}
                    type="application/pdf"
                    width="420px"
                    height="380px"
                    // width="100%"
                    // height="100%"
                  >
                    <p>
                      {index + 1}.
                      <span
                        className="pl-2 underline underline-offset-2 hover:cursor-pointer"
                        // onClick={handleClick}
                        href={url}
                      >
                        {url
                          .slice(82)
                          .replaceAll('%26', ' ')
                          .replaceAll('%20', ' ')
                          .split('?', 1)}
                      </span>
                    </p>
                    {/* {showCertsName &&
                      showCertsName.map((info, index) => {
                        return(<p>{info}</p>)
                      })} */}
                  </object>
                </div>
              )
            })}
        </div>
        {/* <div className="text-white">
          {showCertsName &&
            showCertsName.map((name, index) => {
              return(<p>{name}</p>)
            })}
        </div> */}
      </div>
    </>
  )
}

export default Certs
