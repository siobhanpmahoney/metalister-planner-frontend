import React from 'react'
import {TopicSummaryItem} from './TopicSummaryItem'

const TopicSummaryList = (props) => {
  return (
    <div>
      {props.topics.map((topic) => {
        return <TopicSummaryItem topic={topic} key={topic.id} />
      })}
    </div>
  )
}

export default TopicSummaryList
