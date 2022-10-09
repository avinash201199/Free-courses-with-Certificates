import React from 'react'
import Featured from './featured'
import AllCourse from './allcourse'

export default function main(props) {
  return (
    <div className='main'>
        <div className="spacing">
            <Featured />
            <AllCourse query={props.query} />
        </div>
    </div>
  )
}
