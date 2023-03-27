import { useState, useEffect } from 'react'
import style from './TimeTable.module.scss'

const TimeTalbe = () => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const numDays = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()

    let datesArr = []
    let day = 1

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          datesArr.push('')
        } else if (day > numDays) {
          datesArr.push('')
        } else {
          datesArr.push(day)
          day++
        }
      }
    }

    setDates(datesArr)
  }, [])

  return (
    <div className={style.sch_table}>
      <div className={style.day_label}>Sun</div>
      <div className={style.day_label}>Mon</div>
      <div className={style.day_label}>Tue</div>
      <div className={style.day_label}>Wed</div>
      <div className={style.day_label}>Thu</div>
      <div className={style.day_label}>Fri</div>
      <div className={style.day_label}>Sat</div>

      {dates.map((date, index) => (
        <div
          className={date ? style.date : style.empty}
          key={index}
          style={{
            gridColumn: (index % 7) + 1,
            gridRow: Math.floor(index / 7) + 2
          }}
        >
          {date}
        </div>
      ))}
    </div>
  )
}

export default TimeTalbe
