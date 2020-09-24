import React, {useEffect, useState} from 'react'
import {getDataByCountry} from '../../services/covid-service'
import {OneDayCard} from '../../modules/Card'
import {TopCases} from '../../modules/TopCases'
import './index.scss'

const HomeScene = () => {

  const [results, setResults]  = useState<any[]>([])
  const [topRecovered, setTopRecovered] = useState<number>(0)
  const [topRecoveredDate, setTopRecoveredDate] = useState<any>(new Date())

  const findTopRecoveredCases = () => {
    let counter = 0
    let date = null

    results.map((item, idx) => {
      if(idx < 4) {
        console.log(idx)
        const recovered = results[idx+1].Recovered - item.Recovered
        console.log(recovered, 'recovered')
        if(recovered > counter) {
          counter = recovered
          date = results[idx + 1].Date
        }
      }
    })
    setTopRecovered(counter)
    setTopRecoveredDate(date)
  }

  const getCovidData = async () => {
    const res = await getDataByCountry()
    setResults(res)
  }
  useEffect(() => {
    getCovidData()
  }, [])

  useEffect(() => {
    findTopRecoveredCases()
  }, [results])

  return (
    <div className="home-container">
      <div className="home-container__content">
        <div className="home-container__content__cards">
          {results && results.map((item: any) => {
            return (
              <OneDayCard data={item}/>
            )
          })}
        </div>
        <div className="home-container__content__cases">
          <TopCases
            counter={topRecovered}
            date={topRecoveredDate}
          />
        </div>
      </div>

    </div>
  )
}
export {HomeScene}