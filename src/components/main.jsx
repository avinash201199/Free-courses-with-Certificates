import React from 'react'
import Featured from './featured'
import AllCourse from './allcourse'

export default function main() {
  return (
    <div className='main'>
        <div className="spacing">
            <Featured />
            <AllCourse />
        </div>
    </div>
  )
}
