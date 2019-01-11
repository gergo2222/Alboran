import React from 'react'
import { Link } from 'react-router-dom'

import './section.css'

export const Section = ({label}) => {
  return (
    <div className="section">
      <Link to={`/${label}`}>
        {label}
      </Link>
    </div>
  )
}
