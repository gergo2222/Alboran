import React from 'react'
import { MenuItem } from './menuItem'

import './menu.css'

export const Menu = (items) => {
  return (
    <div id="menu">
      {items.map(item => <MenuItem />)}
    </div>)
}