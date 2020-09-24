import React from 'react'
import moment from 'moment'
import './index.scss'

const OneDayCard = (props: any) => {
  const {data} = props

  return (
    <div className='card__container'>
      <div className='card__container__date'>
        {moment(data.Date).format('D MMMM')}
      </div>
      <div className='card__container__covid-data'>
        <div className='card__container__covid-data__column'>
          <div className='card__container__covid-data__column__info top-row'>
            <p>
              Active
            </p>
            <div className='card__container__covid-data__column__info__counter'>
              {data.Active}
            </div>
          </div>
          <div className='card__container__covid-data__column__info'>
            <p>
              Confirmed
            </p>
            <div className='card__container__covid-data__column__info__counter'>
              {data.Confirmed}
            </div>
          </div>
        </div>

        <div className='card__container__covid-data__column right-column'>
          <div className='card__container__covid-data__column__info top-row'>
            <p>
              Death
            </p>
            <div className='card__container__covid-data__column__info__counter'>
              {data.Deaths}
            </div>
          </div>
          <div className='card__container__covid-data__column__info'>
            <p>
              Recovered
            </p>
            <div className='card__container__covid-data__column__info__counter'>
              {data.Recovered}
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export {OneDayCard}