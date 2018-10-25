import React from 'react'
import { Link } from 'react-router-dom'

import './area.css'

export const Area = ({label}) => {
  return (
    <div className="area">
      <Link to={`/${label}`}>
        {label}
      </Link>
    </div>
  )
}
