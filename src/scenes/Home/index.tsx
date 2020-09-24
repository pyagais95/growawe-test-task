import React, {useEffect, useState} from 'react'
import './index.scss'
import {getDataByCountry} from '../../services/covid-service'

interface Data {
  
}
const HomeScene = () => {

  const [results, setResults]  = useState([])

  const getCovidData = async () => {
    const res = await getDataByCountry()
    setResults(res)
    console.log(res, 'RES')

    console.log(results, 'RESUILTS')
  }
  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <div className="home">
    </div>
  )
}
export {HomeScene}