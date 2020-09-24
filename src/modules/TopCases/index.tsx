import React, {useEffect, useState} from 'react'
import moment from 'moment'
import './index.scss'

interface Props {
  counter: number,
  date: Date;
}
const TopCases = (props: Props) => {
  const {counter, date} = props

  console.log(counter, date)
  return (
    <div className='top-cases__container'>
      <div className='top-cases__container__content'>
        <p className='top-cases__container__content__title'>Top Recovered cases</p>
        <div className='top-cases__container__content__counter'>{counter}</div>
        <div className='top-cases__container__content__date'>{moment(date).format('DD MMMM')}</div>
      </div>

    </div>
  )
}

export {TopCases}