import React from 'react'
import resume from '../../assets/cv.pdf'

export default function CallToAction() {
  return (
    <div className='cta'>
        <a href={resume} target='_blank' rel='noopener noreferrer'className='btn'>Resume</a>
        <a href='#contacts'className='btn btn-primary'>Connect</a>

    </div>
  )
}
