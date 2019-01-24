import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItem = ({item, onMenuItemChange, activeItem}) => {
  const { url, label, id } = item
  return (
      <Link to={url}>
        <div className={`menu-item ${activeItem === id ? 'selected' : ''}`} onClick={() => onMenuItemChange(id)}>
          {label}
        </div>
      </Link>
  )
}
