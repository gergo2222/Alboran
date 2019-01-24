import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItem = ({label, url}) => {
  return (
    <div className="menu-item">
      <Link to={url}>
        {label}
      </Link>
    </div>
  )
}