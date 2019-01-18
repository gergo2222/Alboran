import React from 'react'
import { MenuItem } from './menuItem'

import './menu.css'

export const Menu = ({menuItems = []}) => {
  return (
    <div id="menu">
      {menuItems.map((_, i) => <MenuItem key={i} />)}
    </div>)
}