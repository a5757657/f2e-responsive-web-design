import React from 'react'
import './index.scss'

const SolutionAndEvent = () => {
  return (
    <div className='SolutionAndEvent'><p>活動說明</p></div>
  )
}
    <div className="SolutionAndEvent">
        {data.map((item, index) => (
          <WeekCard
            index={index + 1}
            title={item.title}
            tag1={item.tag1}
            tag2={item.tag2}
            timeRange1={item.timeRange1}
            timeRange2={item.timeRange2}
          />
        ))}
    </div>

export default SolutionAndEvent